<template>
    <div class="app">
        <notifications position="bottom right" />
        <vue-page-transition>
            <router-view />
        </vue-page-transition>
    </div>
</template>

<script>
export default {
    name: "app",

    data() {
        return {};
    },

    created: function() {
        axios.interceptors.response.use(undefined, function(err) {
            return new Promise(function(resolve, reject) {
                if (
                    err.status === 401 &&
                    err.config &&
                    !err.config.__isRetryRequest
                ) {
                    this.$store.dispatch(logout);
                }
                throw err;
            });
        });

        this.getData();
    },

    methods: {
        getData() {
            axios({ url: "results", method: "GET" })
                .then(res => {
                    this.$store.commit("setData", res.data);
                })
                .catch(err => {
                    console.log(err);
                });
        }
    }
};
</script>
