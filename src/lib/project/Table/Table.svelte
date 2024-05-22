<script lang="ts">
  import { Typography } from "./../../ui";
</script>

<table>
  <thead>
    <th
      ><Typography type="subtext" _color="var(--primary-700)"
        >Project name</Typography
      ></th
    >
    <th
      ><Typography type="subtext" _color="var(--primary-700)">Domain</Typography
      ></th
    >
    <th
      ><Typography type="subtext" _color="var(--primary-700)">Status</Typography
      ></th
    >
    <th
      ><Typography type="subtext" _color="var(--primary-700)">Action</Typography
      ></th
    >
  </thead>
  <tbody>
    <tr>
      <td><Typography type="subtext">Amazon</Typography></td>
      <td><Typography type="subtext">https://www.amazon.in/</Typography></td>
      <td><slot name="status" /></td>
      <td><slot name="actions" /></td>
    </tr>
  </tbody>
</table>
