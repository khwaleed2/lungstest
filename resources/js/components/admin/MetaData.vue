<template>
    <div
        class="tab-pane fade show mb-5"
        :class="{ active: activePage === pageName }"
        :id="`v-pills-${pageName}`"
        role="tabpanel"
        :aria-labelledby="`v-pills-${pageName}-tab`"
    >
        <h2>OG Tag</h2>
        <form @submit.prevent="saveOG">
            <div class="form-group">
                <label for="title">OG:Title</label>
                <input
                    type="text"
                    class="form-control"
                    v-model="title"
                    id="title"
                />
            </div>
            <div class="form-group">
                <label for="url">OG:URL</label>
                <input
                    type="text"
                    class="form-control"
                    v-model="url"
                    id="url"
                />
            </div>
            <div class="form-group">
                <label for="description">OG:Description</label>
                <textarea
                    class="form-control"
                    rows="3"
                    id="description"
                    v-model="desc"
                ></textarea>
            </div>
            <div class="form-row">
                <div class="col">
                    <div class="form-group">
                        <label for="type">OG:Type</label>
                        <input
                            type="text"
                            class="form-control"
                            v-model="type"
                            id="type"
                        />
                    </div>
                </div>
                <div class="col">
                    <div class="form-group">
                        <label for="card">Twitter:Card</label>
                        <input
                            type="text"
                            class="form-control"
                            v-model="card"
                            id="card"
                        />
                    </div>
                </div>
            </div>
            <div class="add-img">
                <input id="image" @change="addImg" type="file" accept=".png" />
                <label class="add-image" for="image">
                    <i class="far fa-image"></i>
                    <img v-if="imgUrl" :src="imgUrl" alt="" />
                </label>
            </div>

            <button type="submit" class="btn btn-primary mt-4">
                <span v-if="!loading1">Save</span>
                <i v-else class="fas fa-spinner fa-spin"></i>
            </button>
        </form>

        <h2 class="mt-4">Google Analytics</h2>
        <form @submit.prevent="saveAnaly">
            <div class="form-group">
                <textarea
                    class="form-control"
                    rows="6"
                    v-model="analy"
                    placeholder="Palce analytics code here"
                ></textarea>
            </div>
            <button type="submit" class="btn btn-primary mt-2">
                <span v-if="!loading2">Save</span>
                <i v-else class="fas fa-spinner fa-spin"></i>
            </button>
        </form>
    </div>
</template>

<script>
export default {
    name: "meta-data",

    data() {
        return {
            pageName: "metaData",
            activePage: localStorage.getItem("cPage") || "disclaimer",
            title: "",
            url: "",
            desc: "",
            type: "",
            card: "",
            file: "",
            analy: "",
            imgUrl: "",
            loading1: false,
            loading2: false
        };
    },

    mounted() {
        this.getMetaData();
    },

    methods: {
        addImg(e) {
            const file = e.target.files[0];
            this.imgUrl = URL.createObjectURL(file);
            this.file = file;
        },

        getMetaData() {
            axios({ url: "get-metaData", method: "GET" })
                .then(res => {
                    console.log(res.data.metaData);
                    this.title = res.data.metaData.title;
                    this.url = res.data.metaData.url;
                    this.desc = res.data.metaData.description;
                    this.type = res.data.metaData.type;
                    this.card = res.data.metaData.card;
                    this.imgUrl = res.data.metaData.image;
                    this.analy = res.data.metaData.analytics;
                })
                .catch(err => {
                    console.log(err);
                });
        },

        saveOG() {
            this.loading1 = true;
            const disData = new FormData();
            disData.append("title", this.title);
            disData.append("url", this.url);
            disData.append("desc", this.desc);
            disData.append("type", this.type);
            disData.append("card", this.card);
            disData.append("file", this.file);
            axios({ url: "save-og", data: disData, method: "POST" })
                .then(res => {
                    this.loading1 = false;
                })
                .catch(err => {
                    this.loading1 = false;
                    console.log(err);
                });
        },

        saveAnaly() {
            this.loading2 = true;
            const disData = new FormData();
            disData.append("analy", this.analy);
            axios({ url: "save-analytics", data: disData, method: "POST" })
                .then(res => {
                    this.loading2 = false;
                })
                .catch(err => {
                    this.loading2 = false;
                    console.log(err);
                });
        }
    }
};
</script>

<style lang="scss" scoped>
form {
    width: 100%;
    max-width: 600px;
}

.add-img {
    position: relative;

    input {
        display: none;
    }

    .add-image {
        width: 300px;
        height: 200px;
        border: 3px dashed rgb(221, 221, 221);
        background-color: #f3f2f2;
        border-radius: 14px;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        overflow: hidden;

        i {
            font-size: 58px;
            color: rgb(221, 221, 221);
        }

        img {
            position: absolute;
            left: 0px;
            top: 0px;
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
}
</style>
