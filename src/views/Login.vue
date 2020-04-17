<template>
  <layout-sidebar>
    <form @submit="handleLogin" class="col-lg-5 center-block">
      <div class="form-group">
        <label for="exampleInputEmail1">Adresse mail</label>
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          v-model="mail"
          aria-describedby="emailHelp"
          placeholder="Entrer votre adresse mail"
        />
        <small class="form-text text-muted"
          >We'll never share your email with anyone else.</small
        >
      </div>

      <div class="form-group">
        <label for="exampleInputPassword1">Mot de passe</label>
        <input
          v-model="password"
          type="password"
          class="form-control"
          id="exampleInputPassword1"
          placeholder="Entrer votre mot de passe"
        />
      </div>

      <button type="submit" class="btn btn-primary">Connexion</button>
    </form>
  </layout-sidebar>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import LayoutSidebar from "../layouts/LayoutSidebar";

export default {
  name: "Login",
  components: {
    LayoutSidebar
  },
  methods: {
    ...mapActions(["authenticateUser", "addNotification"]),
    async handleLogin(e) {
      e.preventDefault();
      this.authenticateUser({
        mail: this.mail,
        password: this.password
      });
    }
  },
  data() {
    return {
      mail: "",
      password: ""
    };
  },
  computed: {
    ...mapGetters(["user"])
  },
  watch: {
    user(val) {
      if (val) {
        this.$router.push({ name: "home" });
      }
    }
  }
};
</script>

<style scoped></style>
