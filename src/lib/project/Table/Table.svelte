<script lang="ts">
  import { Typography } from "./../../ui";
  export let tableHeadings: {
    headingOne: string;
    headingTwo: string | undefined;
    headingThree: string;
    headingFour: string;
  };
  export let tableData: {
    rowDataOne: string;
    rowDataTwo: string | undefined;
    status: "Active" | "Inactive";
    // handleWatch: () => void;
    handleEdit: () => void;
    handleDelete: () => void;
  }[];
  export let isExtraColumn = false;
</script>

<table>
  <thead>
    <tr>
      <th
        ><Typography type="subtext" _color="var(--primary-700)"
          >{tableHeadings.headingOne}</Typography
        ></th
      >
      {#if isExtraColumn}
        <th
          ><Typography type="subtext" _color="var(--primary-700)"
            >{tableHeadings.headingTwo}</Typography
          ></th
        >
      {/if}
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
        <td><Typography type="subtext">{data.rowDataTwo}</Typography></td>
        <td class="status" class:active={data.status === "Active"}
          ><Typography type="subtext">{data.status}</Typography></td
        >
        <td class="actions">
          <!-- svelte-ignore a11y-click-events-have-key-events -->
          <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
          <!-- <img
            on:click={data.handleWatch}
            src="/images/Table/Watch.svg"
            alt="watch"
          /> -->
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
    {/each}
  </tbody>
</table>

<style lang="scss">
  table {
    inline-size: 100%;
    display: table;
    border-collapse: collapse;
    @media screen and (width < 375px) {
      scale: 0.9;
    }
    & > thead {
      & > tr {
        & > th {
          padding-inline: 5px;
          padding-block: 20px;
          &:first-of-type {
            text-align: start;
          }
        }
      }
    }
    & > tbody {
      & > tr {
        border-bottom: 1px solid var(--secondary-500);
        &:last-of-type {
          border: 1px solid var(--transparent);
        }
        & > td {
          padding-inline: 5px;
          text-align: center;
          padding-block: 10px;
          &:first-of-type {
            text-align: start;
          }

          &.status {
            :global(.typography) {
              inline-size: 100px;
              margin-inline: auto;
              background-color: var(--secondary-500);
              padding: 5px;
              border-radius: 20px;
              @media screen and (width < 375px) {
                inline-size: 10ch;
              }
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
              -webkit-transition: opacity 0.2s ease-in-out;
              -moz-transition: opacity 0.2s ease-in-out;
              -o-transition: opacity 0.2s ease-in-out;
              transition: opacity 0.2s ease-in-out;
              margin-inline-end: 5px;
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
