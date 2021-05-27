<template>
    <div
        class="tab-pane fade show mb-5"
        :class="{ active: activePage === pageName }"
        :id="`v-pills-${pageName}`"
        role="tabpanel"
        :aria-labelledby="`v-pills-${pageName}-tab`"
    >
        <h4>Breath settings</h4>
        <form @submit.prevent="saveTimes">
            <div class="form-row">
                <div class="col-lg-3 col-md-4 col">
                    <div class="form-group">
                        <label for="inhale">Inhale Duration</label>
                        <the-mask
                            :mask="['#s', '##s', '###s']"
                            class="form-control"
                            id="inhale"
                            placeholder="1s"
                            v-model="inhale_dura"
                        />
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col">
                    <div class="form-group">
                        <label for="holdBreath">Hold breath Duration</label>
                        <the-mask
                            :mask="['#s', '##s', '###s']"
                            class="form-control"
                            id="holdBreath"
                            placeholder="1s"
                            v-model="hold_dura"
                        />
                    </div>
                </div>
                <div class="col-12 mt-1 mb-3">
                    <button type="submit" class="btn btn-primary">
                        <span v-if="!loading1">Save</span>
                        <i v-else class="fas fa-spinner fa-spin"></i>
                    </button>
                </div>
            </div>
        </form>

        <h4>Results settings</h4>
        <form @submit.prevent="saveResults">
            <div class="form-row">
                <div class="col-lg-2 col-sm-3 col">
                    <div class="form-group">
                        <label for="condition">Condition</label>
                        <select
                            class="custom-select mr-sm-2"
                            v-model="condition"
                            id="condition"
                        >
                            <option value="befor">Befor</option>
                            <option value="after">After</option>
                        </select>
                    </div>
                </div>
                <div class="col-lg-2 col-sm-3 col">
                    <div class="form-group">
                        <label for="sec">Seconds</label>
                        <the-mask
                            :mask="['#s', '##s', '###s']"
                            class="form-control"
                            id="sec"
                            placeholder="1s"
                            v-model="seconds"
                        />
                    </div>
                </div>
                <div class="col-lg-2 col-sm-3 col">
                    <div class="form-group">
                        <label for="resu">Result</label>
                        <the-mask
                            type="text"
                            class="form-control"
                            :mask="['<##%', '≈##-##%']"
                            :masked="true"
                            id="resu"
                            placeholder="≈91-95%"
                            v-model="result"
                        />
                    </div>
                </div>
                <div class="col-lg-2 col-sm-3">
                    <div class="form-group">
                        <label for="resu" class="mb-2">Critical</label>
                        <br />
                        <div class="form-check form-check-inline">
                            <input
                                class="form-check-input"
                                type="radio"
                                name="critical"
                                id="inlineRadio1"
                                value="yes"
                                v-model="critical"
                            />
                            <label class="form-check-label" for="inlineRadio1"
                                >Yes</label
                            >
                        </div>
                        <div class="form-check form-check-inline">
                            <input
                                class="form-check-input"
                                type="radio"
                                name="critical"
                                id="inlineRadio2"
                                value="no"
                                v-model="critical"
                            />
                            <label class="form-check-label" for="inlineRadio2"
                                >No</label
                            >
                        </div>
                    </div>
                </div>
                <div class="col-12 mt-1 mb-3">
                    <button type="submit" class="btn btn-primary">
                        <span v-if="!loading2">Save</span>
                        <i v-else class="fas fa-spinner fa-spin"></i>
                    </button>
                </div>
            </div>
        </form>

        <ul class="result-list mb-3">
            <template v-for="(r, index) in results">
                <li :key="index">
                    <span
                        >If user Tap {{ r.conditions }} {{ r.seconds }}s the
                        result is {{ r.result }} &nbsp;
                        <span v-if="r.critical === 'yes'" class="text-danger"
                            >critical</span
                        ></span
                    >
                    <span>
                        <i
                            @click="deleteResult(r.id)"
                            class="fas fa-trash-alt"
                        ></i>
                    </span>
                </li>
            </template>
        </ul>

        <form @submit.prevent="saveCardText">
            <div class="form-row">
                <div class="col-12">
                    <div class="form-group">
                        <label for="cardtext">Card Text</label>
                        <textarea
                            class="form-control"
                            id="cardtext"
                            rows="3"
                            v-model="cardText"
                        ></textarea>
                    </div>
                </div>
                <div class="col-12 text-right mt-2">
                    <button type="submit" class="btn btn-primary">
                        <span v-if="!loading3">Save</span>
                        <i v-else class="fas fa-spinner fa-spin"></i>
                    </button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name: "settings",

    data() {
        return {
            pageName: "settings",
            activePage: localStorage.getItem("cPage") || "disclaimer",
            inhale_dura: "",
            hold_dura: "",
            condition: "befor",
            seconds: "",
            result: "",
            critical: "no",
            cardText: "",
            loading1: false,
            loading2: false,
            loading3: false,
            results: []
        };
    },

    mounted() {
        this.getResults();
    },

    methods: {
        saveTimes() {
            this.loading1 = true;
            const disData = new FormData();
            disData.append("inhale", this.inhale_dura);
            disData.append("hold", this.hold_dura);
            axios({ url: "save-times", data: disData, method: "POST" })
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

        saveResults() {
            this.loading2 = true;
            const disData = new FormData();
            disData.append("condition", this.condition);
            disData.append("seconds", this.seconds);
            disData.append("result", this.result);
            disData.append("critical", this.critical);
            axios({ url: "save-result", data: disData, method: "POST" })
                .then(res => {
                    this.loading2 = false;
                    this.seconds = "";
                    this.result = "";
                    this.critical = "no";
                    this.getResults();
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
                    this.loading2 = false;
                });
        },

        getResults() {
            axios({ url: "results", method: "GET" })
                .then(res => {
                    this.results = res.data.result;
                    this.cardText = res.data.resultData.card_text;
                    this.inhale_dura = res.data.resultData.inhale_dura;
                    this.hold_dura = res.data.resultData.hold_dura;
                })
                .catch(err => {
                    this.$notify({
                        type: "error",
                        title: err.response.data.message,
                        duration: 6000
                    });
                });
        },

        saveCardText() {
            this.loading3 = true;
            const disData = new FormData();
            disData.append("card_text", this.cardText);
            axios({ url: "cardText-save", data: disData, method: "POST" })
                .then(res => {
                    this.loading3 = false;
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
                    this.loading3 = false;
                });
        },

        deleteResult(id) {
            axios({ url: `del-result/${id}`, method: "DELETE" })
                .then(res => {
                    this.getResults();
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
.result-list {
    list-style: none;
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
        background-color: #fff;
        border: 1px solid #ccc;
        padding: 10px 10px 10px 20px;
        border-radius: 9px;
        color: #000;

        span {
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
    }
}
</style>
