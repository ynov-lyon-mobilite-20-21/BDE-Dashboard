<template>
    <layout-sidebar>
        <h1>HOME</h1>
        <p>Bonjour {{ user.mail }}</p>
    </layout-sidebar>
</template>

<script>
import { mapGetters } from "vuex";
import LayoutSidebar from "../layouts/LayoutSidebar";

export default {
    name: "Home",
    components: {
        LayoutSidebar
    },
    computed: {
        ...mapGetters(["user"])
    }
};
</script>

<style scoped></style>
