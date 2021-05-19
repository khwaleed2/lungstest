<template>
    <nav class="navbar navbar-expand navbar-dark bg-dark">
        <div class="container">
            <a class="navbar-brand" href="#">{{ appName }} | Admin</a>

            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <a class="nav-link" @click="logout" href="#">Logout</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: "navbar",

    data() {
        return {
            appName: process.env.APP_NAME || "LungsTest"
        };
    },

    methods: {
        logout: function() {
            this.$store.dispatch("logout").then(() => {
                this.$router.push({ name: "login" });
            });
        }
    }
};
</script>
