<template>
  <div>
    <router-view />
    <notifications />
  </div>
</template>

<script>
import Notifications from "./components/Notifications";

export default {
  name: "App",
  components: {
    Notifications
  }
};
</script>

<style lang="scss">
@import "node_modules/bootstrap/scss/bootstrap";
@import "node_modules/bootstrap-vue/src/index.scss";
@import "assets/sidebar.css";

.btn {
  color: white;
}
</style>
