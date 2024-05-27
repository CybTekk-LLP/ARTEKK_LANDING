<script lang="ts">
  import { Typography } from "..";
  export let selectedProject: string;
  export let projects: string[] = [];
  let uniqueId = "inputCheckbox" + Math.random().toString().split(".")[1];
</script>

<div class="projects">
  {#each projects ?? [] as project, i}
    <input
      type="radio"
      id={uniqueId}
      value={project}
      bind:group={selectedProject}
    />
    <label for={uniqueId}
      ><Typography type="body">{projects[i]}</Typography></label
    >{/each}
</div>

<style lang="scss">
  .projects {
    display: flex;
  }
</style>
