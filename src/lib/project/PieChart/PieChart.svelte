<script lang="ts">
  import { onMount } from "svelte";

  onMount(() => {
    (function () {
      var extend = function (
        out: { [x: string]: any },
        defaults?: any,
        setup?: {
          canvas: { getContext: (arg0: string) => any };
          proportions: any;
          data: any;
          radius: any;
          collapsing: any;
          minAngle: any;
          drawSegment: any;
          drawNode: any;
          onchange: any;
        }
      ) {
        out = out || {};

        for (var i = 1; i < arguments.length; i++) {
          if (!arguments[i]) continue;

          for (var key in arguments[i]) {
            if (arguments[i].hasOwnProperty(key)) out[key] = arguments[i][key];
          }
        }

        return out;
      };

      var DraggablePiechart = function (
        this: any,
        setup: {
          canvas: { getContext: (arg0: string) => any };
          proportions: any;
          data: any;
          radius: any;
          collapsing: any;
          minAngle: any;
          drawSegment: any;
          drawNode: any;
          onchange: any;
        }
      ) {
        var piechart = this;
        // @ts-ignore
        setup = extend({}, this.defaults, setup);

        this.canvas = setup.canvas;
        this.context = setup.canvas.getContext("2d");

        if (!this.context) {
          console.log("Error: DraggablePiechart needs an html5 canvas.");
          return;
        }

        if (setup.proportions) {
          this.data = generateDataFromProportions(setup.proportions);
        } else if (setup.data) {
          this.data = setup.data;
        }

        this.draggedPie = null;
        this.hoveredIndex = -1;
        this.radius = setup.radius;
        this.collapsing = setup.collapsing;
        this.minAngle = setup.minAngle;
        this.drawSegment = setup.drawSegment;
        this.drawNode = setup.drawNode;
        this.onchange = setup.onchange;

        // Bind appropriate events

        this.canvas.addEventListener(
          "touchstart",
          function (e: { preventDefault: () => void }) {
            touchStart(e);
            e.preventDefault();
          }
        );
        this.canvas.addEventListener(
          "touchmove",
          function (e: { preventDefault: () => void }) {
            touchMove(e);
            e.preventDefault();
          }
        );
        document.addEventListener("touchend", function (e) {
          touchEnd(e);
        });

        this.canvas.addEventListener("mousedown", touchStart);
        this.canvas.addEventListener("mousemove", touchMove);
        // @ts-ignore
        document.addEventListener("mouseup", touchEnd);

        this.draw();

        function touchStart(event: any) {
          piechart.draggedPie = piechart.getTarget(getMouseLocation(event));
          if (piechart.draggedPie) {
            piechart.hoveredIndex = piechart.draggedPie.index;
          }
        }

        function touchEnd(e?: TouchEvent) {
          if (piechart.draggedPie) {
            piechart.draggedPie = null;
            piechart.draw();
          }
        }

        function touchMove(event: any) {
          var dragLocation = getMouseLocation(event);

          if (!piechart.draggedPie) {
            var hoveredTarget = piechart.getTarget(dragLocation);
            if (hoveredTarget) {
              piechart.hoveredIndex = hoveredTarget.index;
              piechart.draw();
            } else if (piechart.hoveredIndex != -1) {
              piechart.hoveredIndex = -1;
              piechart.draw();
            }
            return;
          }

          var draggedPie = piechart.draggedPie;

          var dx = dragLocation.x - draggedPie.centerX;
          var dy = dragLocation.y - draggedPie.centerY;

          // Get angle of grabbed target from centre of pie
          var newAngle = Math.atan2(dy, dx) - draggedPie.angleOffset;

          piechart.shiftSelectedAngle(newAngle);
          piechart.draw();
        }

        function getMouseLocation(evt: {
          clientX: number;
          clientY: number;
          targetTouches: {
            clientX: any;
            clientY: number;
          }[];
        }) {
          var rect = piechart.canvas.getBoundingClientRect();

          if (evt.clientX) {
            return {
              x: evt.clientX - rect.left,
              y: evt.clientY - rect.top,
            };
          } else {
            return {
              x: evt.targetTouches[0].clientX - rect.left,
              y: evt.targetTouches[0].clientY - rect.top,
            };
          }
        }

        /*
         * Generates angle data from proportions (array of objects with proportion, format
         */
        function generateDataFromProportions(proportions: any[]) {
          // sum of proportions
          var total = proportions.reduce(function (
            a: any,
            v: { proportion: any }
          ) {
            return a + v.proportion;
          }, 0);

          // begin at 0
          var currentAngle = 0;

          // use the proportions to reconstruct angles
          return proportions.map(function (
            v: { proportion: number; format: any },
            i: any
          ) {
            var arcSize = (TAU * v.proportion) / total;
            var data = {
              angle: currentAngle,
              format: v.format,
              collapsed: arcSize <= 0,
            };
            currentAngle = normaliseAngle(currentAngle + arcSize);
            return data;
          });
        }
      };

      /*
       * Move angle specified by index: i, by amount: angle in rads
       */
      DraggablePiechart.prototype.moveAngle = function (
        i: string | number,
        amount: number
      ) {
        if (this.data[i].collapsed && amount < 0) {
          this.setCollapsed(i, false);
          return;
        }

        var geometry = this.getGeometry();
        this.draggedPie = {
          index: i,
          angleOffset: 0,
          centerX: geometry.centerX,
          centerY: geometry.centerY,
          startingAngles: this.data.map(function (v: { angle: any }) {
            return v.angle;
          }),
          collapsed: this.data.map(function (v: { collapsed: any }) {
            return v.collapsed;
          }),
          angleDragDistance: 0,
        };

        this.shiftSelectedAngle(this.data[i].angle + amount);
        this.draggedPie = null;
        this.draw();
      };

      /*
       * Gets percentage of indexed slice
       */
      DraggablePiechart.prototype.getSliceSizePercentage = function (
        index: any
      ) {
        var visibleSegments = this.getVisibleSegments();

        for (var i = 0; i < visibleSegments.length; i += 1) {
          if (visibleSegments[i].index == index) {
            return (100 * visibleSegments[i].arcSize) / TAU;
          }
        }
        return 0;
      };

      /*
       * Gets all percentages for each slice
       */
      DraggablePiechart.prototype.getAllSliceSizePercentages = function () {
        var visibleSegments = this.getVisibleSegments();
        var percentages = [];
        for (var i = 0; i < this.data.length; i += 1) {
          if (this.data[i].collapsed) {
            percentages[i] = 0;
          } else {
            for (var j = 0; j < visibleSegments.length; j += 1) {
              if (visibleSegments[j].index == i) {
                percentages[i] = (100 * visibleSegments[j].arcSize) / TAU;
              }
            }
          }
        }

        return percentages;
      };

      /*
       * Gets the geometry of the pie chart in the canvas
       */
      DraggablePiechart.prototype.getGeometry = function () {
        var centerX = Math.floor(this.canvas.width / 2);
        var centerY = Math.floor(this.canvas.height / 2);
        return {
          centerX: centerX,
          centerY: centerY,
          radius: Math.min(centerX, centerY) * this.radius,
        };
      };

      /*
       * Returns a segment to drag if given a close enough location
       */
      DraggablePiechart.prototype.getTarget = function (targetLocation: {
        x: number;
        y: number;
      }) {
        var geometry = this.getGeometry();
        var startingAngles = [];
        var collapsed = [];

        var closest = {
          index: -1,
          distance: 9999999,
          angle: null,
        };

        for (var i = 0; i < this.data.length; i += 1) {
          startingAngles.push(this.data[i].angle);
          collapsed.push(this.data[i].collapsed);

          if (this.data[i].collapsed) {
            continue;
          }

          var dx = targetLocation.x - geometry.centerX;
          var dy = targetLocation.y - geometry.centerY;
          var trueGrabbedAngle = Math.atan2(dy, dx);

          var distance = Math.abs(
            smallestSignedAngleBetween(trueGrabbedAngle, this.data[i].angle)
          );

          if (distance < closest.distance) {
            closest.index = i;
            closest.distance = distance;
            // @ts-ignore
            closest.angle = trueGrabbedAngle;
          }
        }

        if (closest.distance < 0.1) {
          return {
            index: closest.index,
            angleOffset: smallestSignedAngleBetween(
              closest.angle,
              startingAngles[closest.index]
            ),
            centerX: geometry.centerX,
            centerY: geometry.centerY,
            startingAngles: startingAngles,
            collapsed: collapsed,
            angleDragDistance: 0,
          };
        } else {
          return null;
        }
      };

      /*
       * Sets segments collapsed or uncollapsed
       */
      DraggablePiechart.prototype.setCollapsed = function (
        index: string | number,
        collapsed: any
      ) {
        // Flag to set position of previously collapsed to new location
        var setNewPos = this.data[index].collapsed && !collapsed;

        this.data[index].collapsed = collapsed;

        var visibleSegments = this.getVisibleSegments();

        // Shift other segments along to make space if necessary
        for (var i = 0; i < visibleSegments.length; i += 1) {
          // Start at this segment
          if (visibleSegments[i].index == index) {
            //Set new position
            if (setNewPos) {
              var nextSegment =
                visibleSegments[mod(i + 1, visibleSegments.length)];
              this.data[index].angle = nextSegment.angle - this.minAngle;
            }

            for (var j = 0; j < visibleSegments.length - 1; j += 1) {
              var currentSegment =
                visibleSegments[mod(1 + i - j, visibleSegments.length)];
              var nextAlongSegment =
                visibleSegments[mod(i - j, visibleSegments.length)];

              var angleBetween = Math.abs(
                smallestSignedAngleBetween(
                  this.data[currentSegment.index].angle,
                  this.data[nextAlongSegment.index].angle
                )
              );

              if (angleBetween < this.minAngle) {
                this.data[nextAlongSegment.index].angle = normaliseAngle(
                  this.data[currentSegment.index].angle - this.minAngle
                );
              }
            }
            break;
          }
        }

        this.draw();
      };

      /*
       * Returns visible segments
       */
      DraggablePiechart.prototype.getVisibleSegments = function () {
        var piechart = this;
        // Collect data for visible segments
        var visibleSegments = [];
        for (var i = 0; i < piechart.data.length; i += 1) {
          if (!piechart.data[i].collapsed) {
            var startingAngle = piechart.data[i].angle;

            // Get arcSize
            var foundNextAngle = false;
            for (var j = 1; j < piechart.data.length; j += 1) {
              var nextAngleIndex = (i + j) % piechart.data.length;

              if (!piechart.data[nextAngleIndex].collapsed) {
                var arcSize =
                  piechart.data[nextAngleIndex].angle - startingAngle;
                if (arcSize <= 0) {
                  arcSize += TAU;
                }

                visibleSegments.push({
                  arcSize: arcSize,
                  angle: startingAngle,
                  format: piechart.data[i].format,
                  index: i,
                });

                foundNextAngle = true;
                break;
              }
            }

            // Only one segment
            if (!foundNextAngle) {
              visibleSegments.push({
                arcSize: TAU,
                angle: startingAngle,
                format: piechart.data[i].format,
                index: i,
              });
              break;
            }
          }
        }
        return visibleSegments;
      };

      /*
       * Returns invisible segments
       */
      DraggablePiechart.prototype.getInvisibleSegments = function () {
        var piechart = this;
        // Collect data for visible segments
        var invisibleSegments = [];
        for (var i = 0; i < piechart.data.length; i += 1) {
          if (piechart.data[i].collapsed) {
            invisibleSegments.push({
              index: i,
              format: piechart.data[i].format,
            });
          }
        }

        return invisibleSegments;
      };

      /*
       * Draws the piechart
       */
      DraggablePiechart.prototype.draw = function () {
        var piechart = this;
        var context = piechart.context;
        var canvas = piechart.canvas;
        context.clearRect(0, 0, canvas.width, canvas.height);

        var geometry = this.getGeometry();

        var visibleSegments = this.getVisibleSegments();

        // Flags to get arc sizes and index of largest arc, for drawing order
        var largestArcSize = 0;
        var indexLargestArcSize = -1;

        // Get the largeset arcsize
        for (var i = 0; i < visibleSegments.length; i += 1) {
          if (visibleSegments[i].arcSize > largestArcSize) {
            largestArcSize = visibleSegments[i].arcSize;
            indexLargestArcSize = i;
          }
        }

        // Need to draw in correct order
        for (i = 0; i < visibleSegments.length; i += 1) {
          // Start with one *after* largest
          var index = mod(i + indexLargestArcSize + 1, visibleSegments.length);
          piechart.drawSegment(
            context,
            piechart,
            geometry.centerX,
            geometry.centerY,
            geometry.radius,
            visibleSegments[index].angle,
            visibleSegments[index].arcSize,
            visibleSegments[index].format,
            false
          );
        }

        // Now draw invisible segments
        var invisibleSegments = this.getInvisibleSegments();
        for (i = 0; i < invisibleSegments.length; i += 1) {
          piechart.drawSegment(
            context,
            piechart,
            geometry.centerX,
            geometry.centerY,
            geometry.radius,
            0,
            0,
            invisibleSegments[i].format,
            true
          );
        }

        // Finally draw drag nodes on top (order not important)
        for (i = 0; i < visibleSegments.length; i += 1) {
          var location = polarToCartesian(
            visibleSegments[i].angle,
            geometry.radius
          );
          piechart.drawNode(
            context,
            piechart,
            location.x,
            location.y,
            geometry.centerX,
            geometry.centerY,
            i == piechart.hoveredIndex
          );
        }

        piechart.onchange(piechart);
      };

      /*
       * *INTERNAL USE ONLY*
       * Moves the selected angle to a new angle
       */
      DraggablePiechart.prototype.shiftSelectedAngle = function (
        newAngle: any
      ) {
        var piechart = this;
        if (!piechart.draggedPie) {
          return;
        }
        var draggedPie = piechart.draggedPie;

        // Get starting angle of the target
        var startingAngle = draggedPie.startingAngles[draggedPie.index];

        // Get previous angle of the target
        var previousAngle = piechart.data[draggedPie.index].angle;

        // Get diff from grabbed target start (as -pi to +pi)
        var angleDragDistance = smallestSignedAngleBetween(
          newAngle,
          startingAngle
        );

        // Get previous diff
        var previousDragDistance = draggedPie.angleDragDistance;

        // Determines whether we go clockwise or anticlockwise
        var rotationDirection = previousDragDistance > 0 ? 1 : -1;

        // Reverse the direction if we have done over 180 in either direction
        var sameDirection = previousDragDistance > 0 == angleDragDistance > 0;
        var greaterThanHalf =
          Math.abs(previousDragDistance - angleDragDistance) > Math.PI;

        if (greaterThanHalf && !sameDirection) {
          // Reverse the angle
          angleDragDistance =
            (TAU - Math.abs(angleDragDistance)) * rotationDirection;
        } else {
          rotationDirection = angleDragDistance > 0 ? 1 : -1;
        }

        draggedPie.angleDragDistance = angleDragDistance;

        // Set the new angle:
        piechart.data[draggedPie.index].angle = normaliseAngle(
          startingAngle + angleDragDistance
        );

        // Reset Collapse
        piechart.data[draggedPie.index].collapsed =
          draggedPie.collapsed[draggedPie.index];

        // Search other angles
        var shifting = true;
        var collapsed = false;
        var minAngle = piechart.minAngle;
        var numberOfAnglesShifted = 0;

        for (var i = 1; i < piechart.data.length; i += 1) {
          // Index to test each slice in order
          var index = mod(
            parseInt(draggedPie.index) + i * rotationDirection,
            piechart.data.length
          );

          // Get angle from target start to this angle
          var startingAngleToNonDragged = smallestSignedAngleBetween(
            draggedPie.startingAngles[index],
            startingAngle
          );

          // If angle is in the wrong direction then it should actually be OVER 180
          if (startingAngleToNonDragged * rotationDirection < 0) {
            startingAngleToNonDragged =
              (startingAngleToNonDragged * rotationDirection + TAU) *
              rotationDirection;
          }

          if (piechart.collapsing) {
            // *Collapsing behaviour* when smallest angle encountered

            // Reset collapse
            piechart.data[index].collapsed = draggedPie.collapsed[index];

            var checkForSnap = !collapsed && !piechart.data[index].collapsed;

            // Snap node to collapse, and prevent going any further
            if (
              checkForSnap &&
              startingAngleToNonDragged > 0 &&
              angleDragDistance > startingAngleToNonDragged - minAngle
            ) {
              piechart.data[draggedPie.index].angle =
                piechart.data[index].angle;
              piechart.data[draggedPie.index].collapsed = true;
              collapsed = true;
            } else if (
              checkForSnap &&
              startingAngleToNonDragged < 0 &&
              angleDragDistance < startingAngleToNonDragged + minAngle
            ) {
              piechart.data[draggedPie.index].angle =
                piechart.data[index].angle;
              piechart.data[index].collapsed = true;
              collapsed = true;
            } else {
              piechart.data[index].angle = draggedPie.startingAngles[index];
            }
          } else {
            // *Shifting behaviour* when smallest angle encountered

            // Shift all other angles along
            var shift = (numberOfAnglesShifted + 1) * minAngle;

            if (
              shifting &&
              startingAngleToNonDragged > 0 &&
              angleDragDistance > startingAngleToNonDragged - shift
            ) {
              piechart.data[index].angle = normaliseAngle(
                draggedPie.startingAngles[index] +
                  (angleDragDistance - startingAngleToNonDragged) +
                  shift
              );
              numberOfAnglesShifted += 1;
            } else if (
              shifting &&
              startingAngleToNonDragged < 0 &&
              angleDragDistance < startingAngleToNonDragged + shift
            ) {
              piechart.data[index].angle = normaliseAngle(
                draggedPie.startingAngles[index] -
                  (startingAngleToNonDragged - angleDragDistance) -
                  shift
              );
              numberOfAnglesShifted += 1;
            } else {
              shifting = false;
              piechart.data[index].angle = draggedPie.startingAngles[index];
            }
          }

          //console.log(JSON.stringify(piechart.data));
        }
      };

      DraggablePiechart.prototype.defaults = {
        onchange: function (piechart: any) {},
        radius: 0.9,
        data: [
          {
            angle: -2,
            format: { color: "#2665da", label: "Walking" },
            collapsed: false,
          },
          {
            angle: -1,
            format: { color: "#6dd020", label: "Programming" },
            collapsed: false,
          },
          {
            angle: 0,
            format: { color: "#f9df18", label: "Chess" },
            collapsed: false,
          },
          {
            angle: 1,
            format: { color: "#d42a00", label: "Eating" },
            collapsed: false,
          },
          {
            angle: 2,
            format: { color: "#e96400", label: "Sleeping" },
            collapsed: false,
          },
        ],
        collapsing: false,
        minAngle: 0.1,

        drawSegment: function (
          context: {
            save: () => void;
            beginPath: () => void;
            moveTo: (arg0: any, arg1: any) => void;
            arc: (
              arg0: any,
              arg1: any,
              arg2: any,
              arg3: any,
              arg4: any,
              arg5: boolean
            ) => void;
            closePath: () => void;
            fillStyle: any;
            fill: () => void;
            restore: () => void;
            translate: (arg0: any, arg1: any) => void;
            rotate: (arg0: any) => void;
            canvas: { height: number };
            textAlign: string;
            font: string;
            fillText: (arg0: any, arg1: number, arg2: number) => void;
          },
          piechart: any,
          centerX: any,
          centerY: number,
          radius: number,
          startingAngle: any,
          arcSize: any,
          format: { color: any; label: any },
          collapsed: any
        ) {
          if (collapsed) {
            return;
          }

          // Draw coloured segment
          context.save();
          var endingAngle = startingAngle + arcSize;
          context.beginPath();
          context.moveTo(centerX, centerY);
          context.arc(
            centerX,
            centerY,
            radius,
            startingAngle,
            endingAngle,
            false
          );
          context.closePath();

          context.fillStyle = format.color;
          context.fill();
          context.restore();

          // Draw label on top
          context.save();
          context.translate(centerX, centerY);
          context.rotate(startingAngle);

          var fontSize = Math.floor(context.canvas.height / 25);
          var dx = radius - fontSize;
          var dy = centerY / 10;

          context.textAlign = "right";
          context.font = fontSize + "pt Helvetica";
          context.fillText(format.label, dx, dy);
          context.restore();
        },

        drawNode: function (
          context: {
            save: () => void;
            translate: (arg0: any, arg1: any) => void;
            fillStyle: string;
            beginPath: () => void;
            arc: (
              arg0: any,
              arg1: any,
              arg2: number,
              arg3: number,
              arg4: number,
              arg5: boolean
            ) => void;
            fill: () => void;
            stroke: () => void;
            restore: () => void;
          },
          piechart: any,
          x: any,
          y: any,
          centerX: any,
          centerY: any,
          hover: any
        ) {
          context.save();
          context.translate(centerX, centerY);
          context.fillStyle = "#DDDDDD";

          var rad = hover ? 7 : 5;
          context.beginPath();
          context.arc(x, y, rad, 0, TAU, true);
          context.fill();
          context.stroke();
          context.restore();
        },
      };
      // @ts-ignore
      window.DraggablePiechart = DraggablePiechart;

      /*
       * Utilities + Constants
       */

      var TAU = Math.PI * 2;

      function degreesToRadians(degrees: number) {
        return (degrees * Math.PI) / 180;
      }

      function smallestSignedAngleBetween(
        target: number | null,
        source: number
      ) {
        // @ts-ignore
        return Math.atan2(Math.sin(target - source), Math.cos(target - source));
      }

      function mod(n: number, m: number) {
        return ((n % m) + m) % m;
      }

      function normaliseAngle(angle: number) {
        return mod(angle + Math.PI, TAU) - Math.PI;
      }

      function polarToCartesian(angle: number, radius: number) {
        return {
          x: radius * Math.cos(angle),
          y: radius * Math.sin(angle),
        };
      }
    })();
    (function () {
      //IE9+ http://youmightnotneedjquery.com/
      function ready(fn: { (): void; (this: Document, ev: Event): any }) {
        if (
          // @ts-ignore
          document.attachEvent
            ? document.readyState === "complete"
            : document.readyState !== "loading"
        ) {
          fn();
        } else {
          document.addEventListener("DOMContentLoaded", fn);
        }
      }

      ready(setupPieChart);

      function setupPieChart() {
        var dimensions = knuthfisheryates2([
          "walking",
          "programming",
          "chess",
          "eating",
          "sleeping",
        ]);
        var randomProportions = generateRandomProportions(
          dimensions.length,
          0.05
        );
        // @ts-ignore
        var proportions = dimensions.map(function (
          d: string,
          i: string | number
        ) {
          return {
            label: d,
            // @ts-ignore
            proportion: randomProportions[i],
            collapsed: false,
            format: {
              label: d.charAt(0).toUpperCase() + d.slice(1), // capitalise first letter
            },
          };
        });

        var setup = {
          canvas: document.getElementById("piechart"),
          radius: 0.9,
          collapsing: true,
          proportions: proportions,
          drawSegment: drawSegmentOutlineOnly,
          onchange: onPieChartChange,
        };
        // @ts-ignore
        var newPie = new DraggablePiechart(setup);

        function drawSegmentOutlineOnly(
          context: {
            save: () => void;
            beginPath: () => void;
            moveTo: (arg0: any, arg1: any) => void;
            arc: (
              arg0: any,
              arg1: any,
              arg2: any,
              arg3: any,
              arg4: any,
              arg5: boolean
            ) => void;
            closePath: () => void;
            fillStyle: string;
            fill: () => void;
            stroke: () => void;
            restore: () => void;
            canvas: { height: number };
            font: string;
            translate: (arg0: any, arg1: any) => void;
            rotate: (arg0: any) => void;
            textAlign: string;
            fillText: (arg0: any, arg1: number, arg2: number) => void;
          },
          piechart: any,
          centerX: any,
          centerY: any,
          radius: number,
          startingAngle: number,
          arcSize: any,
          format: { label: any },
          collapsed: any
        ) {
          if (collapsed) {
            return;
          }

          // Draw segment
          context.save();
          var endingAngle = startingAngle + arcSize;
          context.beginPath();
          context.moveTo(centerX, centerY);
          context.arc(
            centerX,
            centerY,
            radius,
            startingAngle,
            endingAngle,
            false
          );
          context.closePath();

          context.fillStyle = "#f5f5f5";
          context.fill();
          context.stroke();
          context.restore();

          // Draw label on top
          context.save();

          var fontSize = Math.floor(context.canvas.height / 25);
          var dx;
          var dy;
          context.font = fontSize + "pt Helvetica";

          const absVal = Math.abs(startingAngle) * 2;

          if (absVal > Math.PI) {
            dx = 0 - (radius - fontSize);
            dy = 5 - fontSize;
            context.translate(centerX, centerY);
            context.rotate(Math.PI + startingAngle);
            context.textAlign = "left";
            console.log(
              format.label,
              "left",
              dx,
              dy,
              startingAngle,
              centerX,
              centerY
            );
          } else {
            dx = radius - fontSize;
            dy = fontSize + 5;
            context.translate(centerX, centerY);
            context.rotate(startingAngle);
            context.textAlign = "right";
          }

          context.fillText(format.label, dx, dy);
          context.restore();
        }

        function onPieChartChange(piechart: {
          getAllSliceSizePercentages: () => any;
          moveAngle: (arg0: any, arg1: number) => void;
        }) {
          var table = document.getElementById("proportions-table");
          var percentages = piechart.getAllSliceSizePercentages();

          var labelsRow = "<tr>";
          var propsRow = "<tr>";
          for (var i = 0; i < proportions.length; i += 1) {
            labelsRow += "<th>" + proportions[i].format.label + "</th>";

            var v = "<var>" + percentages[i].toFixed(0) + "%</var>";
            var plus =
              '<div id="plu-' +
              dimensions[i] +
              '" class="adjust-button" data-i="' +
              i +
              '" data-d="-1">&#43;</div>';
            var minus =
              '<div id="min-' +
              dimensions[i] +
              '" class="adjust-button" data-i="' +
              i +
              '" data-d="1">&#8722;</div>';
            propsRow += "<td>" + v + plus + minus + "</td>";
          }
          labelsRow += "</tr>";
          propsRow += "</tr>";
          // @ts-ignore
          table.innerHTML = labelsRow + propsRow;

          var adjust = document.getElementsByClassName("adjust-button");

          function adjustClick(this: any, e: any) {
            var i = this.getAttribute("data-i");
            var d = this.getAttribute("data-d");

            piechart.moveAngle(i, d * 0.1);
          }

          for (i = 0; i < adjust.length; i++) {
            adjust[i].addEventListener("click", adjustClick);
          }
        }

        /*
         * Generates n proportions with a minimum percentage gap between them
         */
        function generateRandomProportions(n: any, min: number) {
          // n random numbers 0 - 1
          // @ts-ignore
          var rnd = Array.apply(null, { length: n }).map(function () {
            return Math.random();
          });

          // sum of numbers
          var rndTotal = rnd.reduce(function (a, v) {
            return a + v;
          }, 0);

          // get proportions, then make sure each propoertion is above min
          return validateAndCorrectProportions(
            rnd.map(function (v) {
              return v / rndTotal;
            }),
            min
          );

          function validateAndCorrectProportions(
            proportions: any[],
            min: number
          ) {
            var sortedProportions = proportions.sort(function (
              a: number,
              b: number
            ) {
              return a - b;
            });

            for (var i = 0; i < sortedProportions.length; i += 1) {
              if (sortedProportions[i] < min) {
                var diff = min - sortedProportions[i];
                sortedProportions[i] += diff;
                sortedProportions[sortedProportions.length - 1] -= diff;
                return validateAndCorrectProportions(sortedProportions, min);
              }
            }

            return sortedProportions;
          }
        }

        /*
         * Array sorting algorithm
         */
        function knuthfisheryates2(arr: string | any[]) {
          var temp,
            j,
            i = arr.length;
          while (--i) {
            j = ~~(Math.random() * (i + 1));
            temp = arr[i];
            // @ts-ignore
            arr[i] = arr[j];
            // @ts-ignore
            arr[j] = temp;
          }

          return arr;
        }
      }
    })();
  });
</script>

<div id="piechart-controls">
  <canvas id="piechart" width="300" height="300"></canvas>
  <br />
  <table id="proportions-table"></table>
  <br />
  <p id="piechart-instructions">
    Drag the circles or click the buttons to adjust the pie chart. If a segment
    has gone, you can get it back by clicking it's '+' button.
  </p>
</div>

<style lang="scss">
  #piechart-controls {
    text-align: center;
  }

  #piechart-instructions {
    display: inline-block;
    inline-size: 600px;
  }

  table {
    border-collapse: collapse;

    -webkit-touch-callout: none;
    /* iOS Safari */
    -webkit-user-select: none;
    /* Safari */
    -khtml-user-select: none;
    /* Konqueror HTML */
    -moz-user-select: none;
    /* Firefox */
    -ms-user-select: none;
    /* Internet Explorer/Edge */
    user-select: none;

    display: inline-block;
  }

  td,
  th {
    border: 1px solid lightgray;
    padding: 10px;
    margin: 0;
  }

  .adjust-button {
    inline-size: 20px;
    block-size: 20px;
    font-size: 20px;
    line-height: 20px;
    text-align: center;
    display: inline-block;
    border: 1px solid grey;
    border-radius: 5px;
    margin: 1px;
  }

  var {
    inline-size: 40px;
    display: inline-block;
  }
</style>
