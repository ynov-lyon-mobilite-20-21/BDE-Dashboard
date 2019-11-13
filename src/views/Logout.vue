<template>
  <h1>LOGOUT</h1>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: "Logout",
  created() {
    this.logoutUser();
    this.$router.push({ name: "login" });
  },
  methods: mapActions(["logoutUser"])
};
</script>

<style scoped></style>
