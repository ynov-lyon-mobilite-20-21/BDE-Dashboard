<template>
  <div id="app">
    <h1>HOME</h1>
    <p>Bonjour {{ user.mail }}</p>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Home",
  computed: {
    ...mapState(["user"])
  }
};
</script>

<style scoped></style>
