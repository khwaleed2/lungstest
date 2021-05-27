<template>
    <div
        class="tab-pane fade show mb-5"
        :class="{ active: activePage === pageName }"
        :id="`v-pills-${pageName}`"
        role="tabpanel"
        :aria-labelledby="`v-pills-${pageName}-tab`"
    >
        <h4>Updade Email</h4>
        <form @submit.prevent="updateEmail" class="mb-5">
            <div class="form-group">
                <label for="email">New email</label>
                <input
                    type="email"
                    class="form-control"
                    placeholder="Email"
                    v-model="email"
                    id="email"
                />
            </div>
            <div class="form-group">
                <label for="password">Current password</label>
                <input
                    type="password"
                    class="form-control"
                    placeholder="Password"
                    v-model="ePassword"
                    id="password"
                />
            </div>
            <button type="submit" class="btn btn-primary mt-2">
                <span v-if="!loading1">Update</span>
                <i v-else class="fas fa-spinner fa-spin"></i>
            </button>
        </form>

        <h4>Updade Password</h4>
        <form @submit.prevent="updatePassword">
            <div class="form-group">
                <label for="cPassword">Current password</label>
                <input
                    type="password"
                    class="form-control"
                    placeholder="Password"
                    v-model="pPassword"
                    id="cPassword"
                />
            </div>
            <div class="form-group">
                <label for="newPassword">New password</label>
                <input
                    type="password"
                    class="form-control"
                    placeholder="Password"
                    v-model="newPassword"
                    id="newPassword"
                />
            </div>
            <div class="form-group">
                <label for="conPassword">Confirm Password</label>
                <input
                    type="password"
                    class="form-control"
                    placeholder="Password"
                    v-model="conPassword"
                    id="conPassword"
                />
            </div>
            <button type="submit" class="btn btn-primary mt-2">
                <span v-if="!loading2">Update</span>
                <i v-else class="fas fa-spinner fa-spin"></i>
            </button>
        </form>
    </div>
</template>

<script>
export default {
    name: "admin-settings",

    data() {
        return {
            pageName: "adminSettings",
            activePage: localStorage.getItem("cPage") || "disclaimer",
            loading1: false,
            loading2: false,
            email: "",
            ePassword: "",
            pPassword: "",
            newPassword: "",
            conPassword: ""
        };
    },

    methods: {
        updateEmail() {
            this.loading1 = true;
            const disData = new FormData();
            disData.append("email", this.email);
            disData.append("password", this.ePassword);
            axios({ url: "/update/email", data: disData, method: "POST" })
                .then(res => {
                    this.loading1 = false;
                    this.email = "";
                    this.ePassword = "";
                    this.$notify({
                        type: "success",
                        title: res.data.message,
                        duration: 6000
                    });
                })
                .catch(err => {
                    this.ePassword = "";
                    this.loading1 = false;
                    this.$notify({
                        type: "error",
                        title: err.response.data.message,
                        duration: 6000
                    });
                });
        },

        updatePassword() {
            this.loading2 = true;
            const disData = new FormData();
            disData.append("password", this.pPassword);
            disData.append("new_password", this.newPassword);
            disData.append("new_password_confirmation", this.conPassword);
            axios({ url: "/update/password", data: disData, method: "POST" })
                .then(res => {
                    this.loading2 = false;
                    this.pPassword = "";
                    this.newPassword = "";
                    this.conPassword = "";
                    this.$notify({
                        type: "success",
                        title: res.data.message,
                        duration: 6000
                    });
                })
                .catch(err => {
                    this.loading2 = false;
                    this.pPassword = "";
                    this.newPassword = "";
                    this.conPassword = "";
                    this.$notify({
                        type: "error",
                        title: err.response.data.message,
                        duration: 6000
                    });
                });
        }
    }
};
</script>

<style lang="scss" scoped>
form {
    width: 100%;
    max-width: 500px;
}
</style>
