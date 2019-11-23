<template>
  <div class="userContainer">
    <tr>
      <td>name</td>
      <td>{{ userData.name }}</td>
    </tr>
    <tr>
      <td>email</td>
      <td>{{ userData.email }}</td>
    </tr>
  </div>
</template>

<script>
export default {
  props: ["userData"]
};
</script>

<style></style>
