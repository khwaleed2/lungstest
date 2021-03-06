import axios from "axios";

export default {
    state: {
        status: "",
        token: localStorage.getItem("token") || "",
        user: {}
    },
    getters: {
        isLoggedIn: state => !!state.token,
        authStatus: state => state.status
    },
    mutations: {
        auth_request(state) {
            state.status = "loading";
        },
        auth_success(state, token, user) {
            state.status = "success";
            state.token = token;
            state.user = user;
        },
        auth_error(state) {
            state.status = "error";
        },
        logout(state) {
            state.status = "";
            state.token = "";
        }
    },
    actions: {
        login({ commit }, user) {
            return new Promise((resolve, reject) => {
                commit("auth_request");
                axios({ url: "login", data: user, method: "POST" })
                    .then(resp => {
                        const token = resp.data.token;
                        const user = resp.data.user;
                        localStorage.setItem("token", token);
                        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
                        commit("auth_success", token, user);
                        resolve(resp);
                    })
                    .catch(err => {
                        commit("auth_error");
                        localStorage.removeItem("token");
                        reject(err);
                    });
            });
        },

        logout({ commit }) {
            return new Promise((resolve, reject) => {
                axios({ url: "logout", method: "POST" })
                    .then(resp => {
                        commit("logout");
                        localStorage.removeItem("token");
                        delete axios.defaults.headers.common["Authorization"];
                        resolve();
                    })
                    .catch(err => {
                        console.log(err);
                    });
            });
        }
    }
};
