<template>
  <div :class="{ show: isShow }" class="alert alert-info alert-dismissable">
    <button class="panel-close close" data-dismiss="alert">×</button>
    {{ message }}
  </div>
</template>

<script>
export default {
  name: "Message",
  data() {
    return {
      isShow: false
    };
  },
  watch: {
    message: function() {
      this.toggleAlert();
      setTimeout(() => {
        this.toggleAlert();
      }, this.alertTime);
    }
  },
  props: {
    message: {
      type: String,
      required: true
    },
    alertTime: {
      type: Number,
      default: 3500
    }
  },
  methods: {
    toggleAlert() {
      this.isShow = !this.isShow;
    }
  }
};
</script>

<style lang="scss">
.alert {
  opacity: 0;
  transition: opacity 0.3ms;

  &.show {
    opacity: 1;
  }
}
</style>
