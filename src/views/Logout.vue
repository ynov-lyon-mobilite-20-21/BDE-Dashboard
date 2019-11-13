<template>
  <layout>
    <h1>LOGOUT</h1>
  </layout>
</template>

<script>
import LayoutSidebar from "../layouts/LayoutSidebar";
import { mapActions } from "vuex";

export default {
  name: "Logout",
  components: {
    layout: LayoutSidebar,
  },
  created() {
    this.logoutUser();
    this.$router.push({ name: "login" });
  },
  methods: mapActions(["logoutUser"])
};
</script>

<style scoped></style>
