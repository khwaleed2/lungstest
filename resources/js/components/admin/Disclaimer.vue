<template>
    <div
        class="tab-pane fade show mb-5"
        :class="{ active: activePage === pageName }"
        :id="`v-pills-${pageName}`"
        role="tabpanel"
        :aria-labelledby="`v-pills-${pageName}-tab`"
    >
        <form @submit.prevent="saveDisCardText">
            <div class="form-row">
                <div class="col-12">
                    <div class="form-group">
                        <label for="cardtexta">Card Text</label>
                        <textarea
                            class="form-control"
                            id="cardtexta"
                            rows="3"
                            v-model="cardText"
                        ></textarea>
                    </div>
                </div>
                <div class="col-12 text-right mt-2">
                    <button type="submit" class="btn btn-primary">
                        <span v-if="!loading1">Save</span>
                        <i v-else class="fas fa-spinner fa-spin"></i>
                    </button>
                </div>
            </div>
        </form>

        <form @submit.prevent="saveDisclaimers">
            <div class="form-row">
                <div class="col-12">
                    <h4 class="mb-4">Disclaimers</h4>

                    <div class="row align-items-center mb-3">
                        <div class="col-lg-1 col-sm-2 col-2 position-relative">
                            <div class="add-icon-btn">
                                <input
                                    :id="`icon`"
                                    @change="addIcon"
                                    type="file"
                                    accept=".svg"
                                />
                                <label
                                    class="add-icon"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title="Add Icon SVG(only)"
                                    :for="`icon`"
                                >
                                    <i
                                        v-if="!disclaimersInputs.preview"
                                        class="far fa-smile"
                                    ></i>
                                    <img
                                        v-else
                                        :src="disclaimersInputs.preview"
                                        alt=""
                                    />
                                </label>
                            </div>
                        </div>
                        <div class="col pl-0">
                            <input
                                type="text"
                                placeholder="disclaimer"
                                class="form-control"
                                v-model="disclaimersInputs.text"
                                required
                            />
                        </div>
                    </div>
                </div>

                <div class="col-12 text-right mt-2">
                    <button type="submit" class="btn btn-primary">
                        <span v-if="!loading2">
                            <i class="fas fa-plus"></i> Add More</span
                        >
                        <i v-else class="fas fa-spinner fa-spin"></i>
                    </button>
                </div>
            </div>
        </form>

        <ul class="disclaimer-list">
            <template v-for="(item, index) in disclaimers">
                <li :key="index">
                    <div>
                        <i class="list-icon">
                            <img :src="item.icon" />
                        </i>
                        <span>{{ item.text }}</span>
                    </div>
                    <div>
                        <i
                            @click="deleteDis(item.id)"
                            class="fas fa-trash-alt"
                        ></i>
                    </div>
                </li>
            </template>
        </ul>
    </div>
</template>

<script>
export default {
    name: "disclaimer",

    data() {
        return {
            pageName: "disclaimer",
            activePage: localStorage.getItem("cPage") || "disclaimer",
            cardText: "",
            disclaimersInputs: {
                icon: "",
                text: "",
                preview: ""
            },
            disclaimers: [],
            loading1: false,
            loading2: false
        };
    },

    mounted() {
        $('[data-toggle="tooltip"]').tooltip();
    },

    created() {
        this.getDisclaimers();
    },

    methods: {
        addIcon(e) {
            const file = e.target.files[0];
            this.disclaimersInputs.preview = URL.createObjectURL(file);
            this.disclaimersInputs.icon = file;
        },

        getDisclaimers() {
            axios({ url: "disclaimers", method: "GET" })
                .then(res => {
                    this.disclaimers = res.data.disclaimers;
                    this.cardText = res.data.DisclaimerCardText.text;
                })
                .catch(err => {
                    this.$notify({
                        type: "error",
                        title: err.response.data.message,
                        duration: 6000
                    });
                });
        },

        saveDisCardText() {
            this.loading1 = true;
            const disData = new FormData();
            disData.append("text", this.cardText);
            axios({ url: "disCardText-save", data: disData, method: "POST" })
                .then(res => {
                    this.loading1 = false;
                    this.$notify({
                        type: "success",
                        title: res.data.success,
                        duration: 6000
                    });
                })
                .catch(err => {
                    this.loading1 = false;
                    this.$notify({
                        type: "error",
                        title: err.response.data.message,
                        duration: 6000
                    });
                });
        },

        saveDisclaimers() {
            this.loading2 = true;
            const disData = new FormData();
            disData.append("file", this.disclaimersInputs.icon);
            disData.append("text", this.disclaimersInputs.text);
            axios({ url: "dis-save", data: disData, method: "POST" })
                .then(res => {
                    this.disclaimersInputs = {
                        icon: "",
                        text: "",
                        preview: ""
                    };

                    this.loading2 = false;
                    this.getDisclaimers();
                    this.$notify({
                        type: "success",
                        title: res.data.success,
                        duration: 6000
                    });
                })
                .catch(err => {
                    this.loading2 = false;
                    console.log(err);
                });
        },

        deleteDis(id) {
            axios({ url: `dis-delete/${id}`, method: "DELETE" })
                .then(res => {
                    this.getDisclaimers();
                    this.$notify({
                        type: "success",
                        title: res.data.success,
                        duration: 6000
                    });
                })
                .catch(err => {
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
.add-icon-btn input {
    display: none;
}
.add-icon {
    width: 32px;
    height: 32px;
    display: inline-block;
    background-color: #fff;
    border: 1px solid #ccc;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
    margin-right: 10px;
    margin: auto;
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
        background-color: darken(#fff, 2);
    }

    i {
        color: #ccc;
        margin-left: 1px;
    }

    img {
        width: 100%;
        max-width: 15px;
    }
}

form {
    width: 100%;
    max-width: 600px;
    margin-right: auto;
}

.disclaimer-list {
    list-style: none;
    margin: 0px;
    padding: 0px;
    overflow-y: auto;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none;
    width: 100%;
    max-width: 600px;
    margin: 20px auto 0px 0px;

    &::-webkit-scrollbar {
        display: none;
    }

    li {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 10px;
        color: rgba(255, 255, 255, 0.8);
        font-size: 15px;
        background-color: #ececec;
        padding: 10px;
        border-radius: 9px;
        color: #000;

        div {
            display: flex;
            align-items: center;

            &:last-child {
                margin-right: 10px;

                i {
                    cursor: pointer;
                    transition: all 0.3s;

                    &:hover {
                        color: rgb(197, 51, 51);
                    }
                }
            }
        }

        .list-icon {
            width: 32px;
            height: 32px;
            display: inline-block;
            background-color: #fff;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 100%;
            margin-right: 10px;

            img {
                width: 100%;
                max-width: 15px;
            }
        }
    }
}
</style>
