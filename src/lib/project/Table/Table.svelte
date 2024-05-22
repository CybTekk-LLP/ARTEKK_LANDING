<script lang="ts">
  import { Typography } from "./../../ui";
  export let tableHeadings: {
    headingOne: string;
    headingTwo: string;
    headingThree: string;
    headingFour: string;
  };
  export let tableData: {
    rowDataOne: string;
    rowDataTwo: string;
    status: "Active" | "Inactive";
    handleWatch: () => void;
    handleEdit: () => void;
    handleDelete: () => void;
  }[];
</script>

<table>
  <thead>
    <tr>
      <th
        ><Typography type="subtext" _color="var(--primary-700)"
          >{tableHeadings.headingOne}</Typography
        ></th
      >
      <th
        ><Typography type="subtext" _color="var(--primary-700)"
          >{tableHeadings.headingTwo}</Typography
        ></th
      >
      <th
        ><Typography type="subtext" _color="var(--primary-700)"
          >{tableHeadings.headingThree}</Typography
        ></th
      >
      <th
        ><Typography type="subtext" _color="var(--primary-700)"
          >{tableHeadings.headingFour}</Typography
        ></th
      >
    </tr>
  </thead>
  <tbody>
    {#each tableData as data}
      <tr>
        <td><Typography type="subtext">{data.rowDataOne}</Typography></td>
        <td
          ><Typography type="subtext"
            ><a class="links" href={data.rowDataTwo}>{data.rowDataTwo}</a
            ></Typography
          ></td
        >
        <td class="status" class:active={data.status === "Active"}
          ><Typography type="subtext">{data.status}</Typography></td
        >
        <td class="actions">
          <!-- svelte-ignore a11y-click-events-have-key-events -->
          <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
          <img
            on:click={data.handleWatch}
            src="/images/Table/Watch.svg"
            alt="watch"
          />
          <!-- svelte-ignore a11y-click-events-have-key-events -->
          <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
          <img
            on:click={data.handleEdit}
            src="/images/Table/Edit.svg"
            alt="edit"
          />
          <!-- svelte-ignore a11y-click-events-have-key-events -->
          <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
          <img
            on:click={data.handleDelete}
            src="/images/Table/Delete.svg"
            alt="delete"
          />
        </td>
      </tr>
      <br />
    {/each}
  </tbody>
</table>

<style lang="scss">
  table {
    inline-size: 100%;
    display: table;
    border-collapse: collapse;
    & > thead {
      & > tr {
        & > th {
          padding-inline: 5px;
          padding-block: 20px;
        }
      }
    }
    & > tbody {
      & > tr {
        & > td {
          padding: 5px;
          text-align: center;
          &.status {
            :global(.typography) {
              background-color: var(--secondary-500);
              padding: 5px;
              border-radius: 20px;
            }
          }
          &.active {
            :global(.typography) {
              background-color: var(--tertiary-900);
            }
          }
          .links {
            text-decoration: none;
            color: var(--primary-900);
          }
          &.actions {
            & > img {
              cursor: pointer;
              background-color: var(--secondary-700);
              padding: 8px;
              box-sizing: content-box;
              border-radius: 5px;
              opacity: 0.7;
              transition: opacity 0.2s ease-in-out;
              &:hover {
                opacity: 1;
              }
              &:last-of-type {
                background-color: var(--danger);
              }
            }
          }
        }
      }
    }
  }
</style>
