<template>
    <layout-sidebar>
        <h1>LOGOUT</h1>
    </layout-sidebar>
</template>

<script>
import LayoutSidebar from "../layouts/LayoutSidebar";
import { mapActions } from "vuex";

export default {
    name: "Logout",
    components: {
        LayoutSidebar
    },
    created() {
        this.logoutUser();
        this.addNotification({
            title: "Login",
            content: "You are now disconnected"
        });
        this.$router.push({ name: "login" });
    },
    methods: mapActions(["logoutUser", "addNotification"])
};
</script>

<style scoped></style>
