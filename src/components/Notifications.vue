<template>
  <div class="notifications">
    <notification-item v-for="notification in notifications" :content="notification.content" :title="notification.title"/>
  </div>
</template>

<script>
import NotificationItem from "./NotificationItem";
import { mapGetters } from "vuex";

export default {
  name: "Notifications",
  components: {
    NotificationItem
  },
  computed: {
    ...mapGetters(["notifications"])
  }
};
</script>

<style scoped lang="scss">
.notifications {
  position: absolute;
  bottom: 30px;
  left: 10px;
  z-index: 999;
}
</style>
