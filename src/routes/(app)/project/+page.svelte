<script lang="ts">
  import { Typography, Button } from "$lib/ui";
  import { Table } from "$lib/project";

  let isAdmin = true;
</script>

<main>
  <Typography type="cardTitle">{isAdmin ? "Users" : "My Projects"}</Typography>
  {#if !isAdmin}
    <br />
    <br />
    <div class="btn">
      <Button
        type="secondary"
        buttonLabel="Create a new project"
        iconSrc="/images/Project/Create.svg"
        onClick={() => alert("create")}
      />
    </div>
  {/if}
  <br /><br /><br />
  {#if !isAdmin}
    <Table
      isExtraColumn={false}
      tableHeadings={{
        headingOne: "Project",
        headingTwo: "",
        headingThree: "Status",
        headingFour: "Action",
      }}
      tableData={[
        {
          rowDataOne: "Amazon",
          rowDataTwo: "",
          status: "Active",
          handleEdit: () => alert("edit"),
          handleDelete: () => alert("delete"),
        },
        {
          rowDataOne: "Amazon",
          rowDataTwo: "",
          status: "Active",
          handleEdit: () => alert("edit"),
          handleDelete: () => alert("delete"),
        },
        {
          rowDataOne: "Amazon",
          rowDataTwo: "",
          status: "Inactive",
          handleEdit: () => alert("edit"),
          handleDelete: () => alert("delete"),
        },
      ]}
    />
  {:else}
    <Table
      isExtraColumn={true}
      tableHeadings={{
        headingOne: "User Name",
        headingTwo: "Projects",
        headingThree: "Status",
        headingFour: "Action",
      }}
      tableData={[
        {
          rowDataOne: "Gourav",
          rowDataTwo: "Amazon",
          status: "Active",
          handleEdit: () => alert("edit"),
          handleDelete: () => alert("delete"),
        },
        {
          rowDataOne: "Shubhi",
          rowDataTwo: "Amazon",
          status: "Active",
          handleEdit: () => alert("edit"),
          handleDelete: () => alert("delete"),
        },
        {
          rowDataOne: "Yogendra",
          rowDataTwo: "Flipkart",
          status: "Inactive",
          handleEdit: () => alert("edit"),
          handleDelete: () => alert("delete"),
        },
      ]}
    />
  {/if}
</main>

<style lang="scss">
  main {
    inline-size: 90vw;
    max-inline-size: 1280px;
    margin-inline: auto;
    margin-block-start: 100px;
    & > .btn {
      max-inline-size: 200px;
      :global(button) {
        padding-block: 10px;
      }
    }
  }
</style>
