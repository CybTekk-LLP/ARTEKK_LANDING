<script lang="ts">
  import { Typography } from "..";
  export let value: string[] = [];
  export let projectName: any;
  let uniqueId = "inputCheckbox" + Math.random().toString().split(".")[1];
</script>

<div class="projects">
  <input type="radio" id={uniqueId} />
  <label for={uniqueId}><Typography type="body" /></label>
</div>
