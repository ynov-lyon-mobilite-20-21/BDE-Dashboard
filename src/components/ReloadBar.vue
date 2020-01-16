<template>
  <div class="row m-y-2">
    <div class="col-lg-4 my-2">
      <button type="button" class="btn btn-dark" @click="fetchDataFunction">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M19 8l-4 4h3c0 3.31-2.69 6-6 6-1.01 0-1.97-.25-2.8-.7l-1.46 1.46C8.97 19.54 10.43 20 12 20c4.42 0 8-3.58 8-8h3l-4-4zM6 12c0-3.31 2.69-6 6-6 1.01 0 1.97.25 2.8.7l1.46-1.46C15.03 4.46 13.57 4 12 4c-4.42 0-8 3.58-8 8H1l4 4 4-4H6z"
          />
        </svg>
      </button>
    </div>
    <div class="col-lg-8 my-2 text-right">
      <button
        v-if="handleAddFunction"
        type="button"
        class="btn btn-success"
        @click="handleAddFunction"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path fill="currentColor" d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ReloadBar",
  props: {
    fetchDataFunction: {
      type: Function,
      required: true
    },
    handleAddFunction: {
      type: Function,
      required: false,
      defaultValue: null
    }
  }
};
</script>

<style scoped></style>
