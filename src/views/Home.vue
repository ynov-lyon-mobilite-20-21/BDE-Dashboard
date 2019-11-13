<template>
  <layout>
    <h1>HOME</h1>
    <p>Bonjour {{ user.mail }}</p>
  </layout>
</template>

<script>
import { mapState } from "vuex";
import LayoutSidebar from "../layouts/LayoutSidebar";

export default {
  name: "Home",
  components: {
    layout: LayoutSidebar
  },
  computed: {
    ...mapState(["user"])
  }
};
</script>

<style scoped></style>
