<script lang="ts">
  import { Typography, Button, InputText } from "$lib/ui";
  import { CodeSnippet, CopyPaste } from "$lib/project";

  let apiKey = "";
  let url = "";

  /* eslint-disable */
  let code = 
 [ `<!-- Insert in HEAD -->
    <script src="//cdn.8thwall.com/web/aframe/8frame-1.4.1.min.js"></script>
    <script src="//apps.8thwall.com/xrweb?appKey=1d6X9SFyuyJpIfjlJSVLLuHM6phbYsvdfRhQfwSSpAKUHLlt2rrNNDrJOMSPUYCAYU4GBq"
        async></script>
    <script src="../js/8thWall/insertAR.js"></script>
    <!-- Insert in HEAD -->`, 
    `<div id="target"></div>`, 
     `// AR class instance instantiated with the new operator 
      // supplying with modelURL and target div while calling
      const target = document.getElementById("target");
      const url = "../models/chair/chair.glb"
      // additional model styling options can be provided as well (optional)
      const modelConfigs = { position: "0 0 0", rotation: "0 0 0", scale: ".08 .08 .08" }
      const ar = new AR(url, target, modelConfigs);
      console.log(ar.init());`
        ]
  /* eslint-enable  */
</script>

<main>
  <h1 class="page-title">
    <Typography type="cardTitle">Generate Your Snippet</Typography>
  </h1>
  <br /><br />
  <InputText
    variant="text"
    labelNeeded={true}
    label="Api Key"
    bind:value={apiKey}
    placeholder="XXXX-XXXX-XXXX"
  />
  <br />
  <br />
  <InputText
    variant="text"
    labelNeeded={true}
    label="Uploaded Model Link"
    bind:value={url}
    placeholder="https://cdn.lorem_ipsum1.glb"
  />
  <br />
  <br />
  <br />
  <Button
    type="primary"
    buttonLabel="GENERATE CODE"
    onClick={() => alert("asf")}
  />
  <br />
  <br />
  <p>
    <Typography type="impact"
      >{"Paste The Following Code In The <head> Section Of Your HTML"}</Typography
    >
  </p>
  <div class="snippet">
    <CodeSnippet code="" language="HTML" />
    <span class="copy">
      <CopyPaste text="" />
    </span>
  </div>
  <p>
    <Typography type="impact"
      >{"Now create a <div> with an id of “target”"}</Typography
    >
  </p>
  <div class="snippet">
    <CodeSnippet code="" language="HTML" />
    <span class="copy">
      <CopyPaste text={`<div id="target"></div>`} />
    </span>
  </div>
  <p>
    <Typography type="impact"
      >{"Finally, Paste this code at the end of body or After the Dom is loaded"}</Typography
    >
  </p>
  <div class="snippet">
    <CodeSnippet code={` `} language="js" />
    <span class="copy">
      <CopyPaste text="" />
    </span>
  </div>
</main>

<style lang="scss">
  main {
    max-inline-size: 550px;
    inline-size: 90vw;
    margin-inline: auto;
    padding-block-start: 100px;
    & > .page-title {
      text-align: center;
    }
    & > p {
      margin-block-start: 20px;
    }
    & > .snippet {
      position: relative;
      & > .copy {
        position: absolute;
        inset-inline-end: 15px;
        inset-block-start: 30px;
      }
    }
  }
</style>
