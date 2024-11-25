<template>
  <div class="container">
    <table class="table is-bordered is-striped is-hoverable is-fullwidth">
      <thead>
        <tr>
          <th class="has-text-centered">ID</th>
          <th class="has-text-centered">Name</th>
          <th class="has-text-centered">Email</th>
          <th class="has-text-centered">Phone Number</th>
          <th class="has-text-centered">Address</th>
          <th class="has-text-centered">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in allUser" :key="user.id">
          <td class="has-text-centered">{{ user.id }}</td>
          <td class="has-text-centered">{{ user.name }}</td>
          <td class="has-text-centered">{{ user.email }}</td>
          <td class="has-text-centered">{{ user.address }}</td>
          <td class="has-text-centered">{{ user.phone_number }}</td>
          <td class="is-flex is-justify-content-center" style="gap: 10px">
            <b-button type="is-warning"
              ><router-link :to="`/user/update/${user.id}`">Update</router-link></b-button
            >
            <b-button @click="deleteUser(user.id)" type="is-danger"
              >Delete</b-button
            >
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  computed: {
    allUser() {
      return this.$store.getters.allUser;
    },
  },
  methods: {
    deleteUser(userId) {
      if (confirm("Bạn có chắc chắn muốn xóa??")) {
        this.$store.dispatch("deleteUser", userId);
      }
    },
  },
  created() {
    this.$store.dispatch("getUser");
  },
};
</script>
