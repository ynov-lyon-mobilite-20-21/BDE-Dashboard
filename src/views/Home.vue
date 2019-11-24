<template>
  <layout-sidebar>
    <h1>HOME</h1>
    <p>Bonjour {{ user.mail }}</p>
  </layout-sidebar>
</template>

<script>
import { mapState } from "vuex";
import LayoutSidebar from "../layouts/LayoutSidebar";

export default {
  name: "Home",
  components: {
    LayoutSidebar
  },
  computed: {
    ...mapState(["user"])
  }
};
</script>

<style scoped></style>
