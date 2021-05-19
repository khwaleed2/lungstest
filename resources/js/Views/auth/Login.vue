<template>
    <div class="login-page">
        <div
            class="container d-flex justify-content-center align-items-center vh-100"
        >
            <form @submit.prevent="login" class="login-form">
                <h2 class="text-bold mb-5 mt-3">Lungs Test | Admin</h2>
                <div class="form-group">
                    <label for="email">Email</label>
                    <input
                        id="email"
                        type="email"
                        class="form-control"
                        v-model="form.email"
                        required
                    />
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input
                        id="password"
                        type="password"
                        class="form-control"
                        v-model="form.password"
                        required
                    />
                </div>

                <div class="text-right mt-4">
                    <button type="submit" class="btn btn-primary w-25">
                        LOGIN
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
    name: "login",

    data() {
        return {
            form: {
                email: "",
                password: ""
            },
            showError: false
        };
    },

    methods: {
        login: function() {
            const User = new FormData();
            User.append("email", this.form.email);
            User.append("password", this.form.password);
            this.$store
                .dispatch("login", User)
                .then(() => this.$router.push({ name: "adminPanel" }))
                .catch(err => console.log(err));
        }
    }
};
</script>

<style lang="scss" scoped>
.login-form {
    background-color: #fff;
    box-shadow: 0px 10px 20px rgba($color: #000000, $alpha: 0.2);
    width: 100%;
    max-width: 500px;
    border-radius: 8px;
    padding: 20px;

    h2 {
        text-align: center;
    }
}
</style>
