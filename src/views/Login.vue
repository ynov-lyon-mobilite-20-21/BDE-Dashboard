<template>
  <form @submit="handleLogin" class="col-lg-5 center-block">
    <div class="form-group">
      <label for="exampleInputEmail1">Adresse mail</label>
      <input type="email" class="form-control" id="exampleInputEmail1" v-model="mail" aria-describedby="emailHelp" placeholder="Entrer votre adresse mail">
      <small class="form-text text-muted">We'll never share your email with anyone else.</small>
    </div>

    <div class="form-group">
      <label for="exampleInputPassword1">Mot de passe</label>
      <input v-model="password"  type="password" class="form-control" id="exampleInputPassword1" placeholder="Entrer votre mot de passe">
    </div>

    <button type="submit" class="btn btn-primary">Connexion</button>
  </form>
</template>

<script>
import { authenticateUser } from "../Services/AuthenticationService";

export default {
  name: "Login",
  methods: {
    async handleLogin(e) {
      e.preventDefault();
      console.log('TEST')
      const tokens = await authenticateUser(this.mail, this.password);

      console.log('là', tokens)
      if (!tokens) {
        return;
      }

      const { token, refreshToken } = tokens;
      this.$store.state.auth.token = token;
      this.$store.state.auth.refreshToken = refreshToken;
      console.log('TEST')
      this.$router.push({ name: "home" });
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
