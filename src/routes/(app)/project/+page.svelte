<script lang="ts">
  import { Typography, Button } from "$lib/ui";
  import { Table } from "$lib/project";
</script>

<main>
  <Typography type="cardTitle">My Projects</Typography>
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
  <br /><br /><br />
  <Table
    tableHeadings={{
      headingOne: "Project",
      headingThree: "Status",
      headingFour: "Action",
    }}
    tableData={[
      {
        rowDataOne: "Amazon",
        status: "Active",
        handleEdit: () => alert("edit"),
        handleDelete: () => alert("delete"),
      },
      {
        rowDataOne: "Amazon",
        status: "Active",
        handleEdit: () => alert("edit"),
        handleDelete: () => alert("delete"),
      },
      {
        rowDataOne: "Amazon",
        status: "Inactive",
        handleEdit: () => alert("edit"),
        handleDelete: () => alert("delete"),
      },
    ]}
  />
</main>

<style lang="scss">
  main {
    inline-size: 90vw;
    max-inline-size: 1280px;
    margin-inline: auto;
    margin-block-start: 100px;
    & > .btn {
      max-inline-size: 250px;
    }
  }
</style>
