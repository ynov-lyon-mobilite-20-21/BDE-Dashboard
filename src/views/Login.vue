<template>
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
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Login",
  methods: {
    ...mapActions(["authenticateUser"]),
    async handleLogin(e) {
      e.preventDefault();
      await this.authenticateUser({
        mail: this.mail,
        password: this.password
      });

      await this.$router.push({ name: "home" });
    }
  },
  data() {
    return {
      mail: "",
      password: ""
    };
  }
};
</script>

<style scoped></style>
