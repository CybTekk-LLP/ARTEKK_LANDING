<script lang="ts">
  export let selectedProject: string;
  export let projects: string[] = [];
  import { stringToColor } from "../../utils";
  let uniqueId = "inputCheckbox" + Math.random().toString().split(".")[1];
  $: console.log(selectedProject);
</script>

<div class="projects">
  {#each projects ?? [] as project, index}
    <input
      type="radio"
      id={uniqueId + index}
      name="project"
      value={project}
      bind:group={selectedProject}
    />
    <label for={uniqueId + index}>
      <p>
        <span style={`color: ${stringToColor(project)}`}>•</span>
        {project}
      </p>
    </label>
  {/each}
</div>

<style lang="scss">
  .projects {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 20px;
    p {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      inline-size: max-content;
      padding-inline-start: 20px;
      border: 1px solid var(--secondary-700);
      margin: 10px;
      padding: 5px 20px;
      border-radius: 5px;
      transition: background-color 0.3s;
      white-space: nowrap;
      &:hover {
        background-color: var(--secondary-700);
      }
      & > span {
        font-size: 1rem;
        margin-inline-end: 5px;
      }
    }
    input[type="radio"] {
      display: none;
      &:checked + label > p {
        background-color: var(--secondary-700);
      }
    }
  }
</style>
