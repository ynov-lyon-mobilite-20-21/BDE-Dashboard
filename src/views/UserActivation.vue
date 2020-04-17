<template>
    <div>
        <message :message="alertMessage" />
        <form @submit="handleActiveUser">
            <div>
                <input
                    placeholder="Nouveau mot de passe"
                    type="password"
                    name="password"
                    v-model="password"
                />
            </div>
            <div>
                <input
                    placeholder="Confirmez le mot de passe"
                    type="password"
                    name="confirmPassword"
                    v-model="confirmPassword"
                />
            </div>

            <button>Activer mon compte</button>
        </form>
    </div>
</template>

<script>
import { activeUser } from "../services/UserService";
import Message from "../components/Message";

export default {
    name: "UserActivation",
    components: {
        Message
    },
    data() {
        return {
            password: null,
            confirmPassword: null,
            alertMessage: ""
        };
    },
    methods: {
        async handleActiveUser(e) {
            e.preventDefault();
            if (this.password !== this.confirmPassword) {
                this.alertMessage =
                    "Les champs mot de passe ne correspondent pas";
                return;
            }

            const userId = this.$route.query.u;
            const activationKey = this.$route.query.k;

            const activation = await activeUser(
                userId,
                activationKey,
                this.password
            );
            this.alertMessage = activation.success
                ? "Votre compte est désormais actif"
                : "Une erreur est survenue";
        }
    }
};
</script>

<style scoped></style>
