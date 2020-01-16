<template>
  <layout>
    <div class="row m-y-2">
      <div class="col-lg-4 text-lg-center row">
        <backButtonComponenent v-if="backButton" />
        <h2>{{ title }}</h2>
      </div>
    </div>
    <div v-if="!data" class="loading">
      Loading...
    </div>
    <div v-else>
      <slot />
    </div>
  </layout>
</template>

<script>
import LayoutSidebar from "./LayoutSidebar";
import BackButton from "../components/BackButton";

export default {
  name: "DataTemplate",
  components: {
    backButtonComponenent: BackButton,
    layout: LayoutSidebar
  },
  props: {
    title: {
      type: String,
      required: true
    },
    data: {
      required: true
    },
    backButton: {
      type: Boolean,
      defaultValue: false
    }
  }
};
</script>

<style scoped></style>
