<template>
    <button
        @click="handleBack"
        type="button"
        class="btn btn-info align-self-start mr-4"
    >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                fill="currentColor"
                d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"
            />
        </svg>
    </button>
</template>

<script>
export default {
    name: "BackButton",
    methods: {
        handleBack() {
            this.$router.go(-1);
        }
    }
};
</script>

<style scoped></style>
