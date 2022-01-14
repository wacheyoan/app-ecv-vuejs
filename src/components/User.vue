<template>
  <v-data-table
    :headers="headers"
    :items="users"
    :items-per-page="5"
    class="elevation-1"
  ></v-data-table>
</template>
<script>

import { mapState } from "vuex";

export default {
  name: "User",
  data() {
    return {
      headers: [
        { text: "id" },
        { text: "email" },
        { text: "name" },
        { text: "phone" },
        { text: "username" },
        { text: "website" }
      ]
    };
  },
  computed: {
    ...mapState(["users"])
  },
  created() {
    this.$store.dispatch("getUsers", { self: this });
  }

};


</script>
