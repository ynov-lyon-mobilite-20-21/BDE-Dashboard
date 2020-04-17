<template>
    <div
        ref="toast"
        class="toast fade hide"
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
    >
        <div class="toast-header">
            <strong class="mr-auto">{{ title }}</strong>
            <small class="text-muted"></small>
        </div>
        <div class="toast-body">
            {{ content }}
        </div>
    </div>
</template>

<script>
export default {
    name: "NotificationItem",
    props: {
        title: {
            type: String,
            required: true
        },
        content: {
            type: String,
            required: true
        }
    },
    mounted() {
        this.showToast();
        setTimeout(this.hideToast, 4000);
    },
    methods: {
        showToast() {
            this.$refs.toast.classList.remove("hide");
            this.$refs.toast.classList.add("show");
        },
        hideToast() {
            this.$refs.toast.classList.add("hide");
            this.$refs.toast.classList.remove("show");
        }
    }
};
</script>

<style scoped>
.toast {
    width: 250px;
}
</style>
