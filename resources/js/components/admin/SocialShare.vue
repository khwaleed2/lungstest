<template>
    <div
        class="tab-pane fade show mb-5"
        :class="{ active: activePage === pageName }"
        :id="`v-pills-${pageName}`"
        role="tabpanel"
        :aria-labelledby="`v-pills-${pageName}-tab`"
    >
        <h2 class="mb-4">Social List</h2>

        <ul class="social-list">
            <template v-for="(item, index) in list">
                <li :key="index">
                    <div class="title">
                        <span
                            class="icon"
                            :style="`background-color: ${item.bColor};`"
                            v-html="item.icon"
                        ></span>
                        {{ item.name }}
                    </div>
                    <label class="switch-btn">
                        <input
                            :value="item.value"
                            type="checkbox"
                            v-model="selected"
                            @change="
                                addRemove(item.value, item.icon, item.bColor)
                            "
                        />
                        <span class="switch"></span>
                    </label>
                </li>
            </template>
        </ul>
    </div>
</template>

<script>
export default {
    name: "social-share",

    data() {
        return {
            pageName: "socialShare",
            activePage: localStorage.getItem("cPage") || "disclaimer",
            list: [
                {
                    name: "Facebook",
                    bColor: "#3b5998",
                    icon: '<i class="fab fa-facebook-f"></i>',
                    value: "facebook"
                },
                {
                    name: "Twitter",
                    bColor: "#1da1f2",
                    icon: '<i class="fab fa-twitter"></i>',
                    value: "twitter"
                },
                {
                    name: "LinkedIn",
                    bColor: "#0077b5",
                    icon: '<i class="fab fa-linkedin-in"></i>',
                    value: "linkedin"
                },
                {
                    name: "Messenger",
                    bColor: "#0084ff",
                    icon: '<i class="fab fa-facebook-messenger"></i>',
                    value: "messenger"
                },
                {
                    name: "WhatsApp",
                    bColor: "#128c7e",
                    icon: '<i class="fab fa-whatsapp"></i>',
                    value: "whatsapp"
                },
                {
                    name: "Skype",
                    bColor: "#00aff0",
                    icon: '<i class="fab fa-skype"></i>',
                    value: "skype"
                },
                {
                    name: "Tumblr",
                    bColor: "#35465c",
                    icon: '<i class="fab fa-tumblr"></i>',
                    value: "tumblr"
                },
                {
                    name: "Pinterest",
                    bColor: "#e60023",
                    icon: '<i class="fab fa-pinterest"></i>',
                    value: "pinterest"
                },
                {
                    name: "Reddit",
                    bColor: "#ff4500",
                    icon: '<i class="fab fa-reddit-alien"></i>',
                    value: "reddit"
                },
                {
                    name: "Telegram",
                    bColor: "#0088cc",
                    icon: '<i class="fab fa-telegram-plane"></i>',
                    value: "telegram"
                }
            ],
            selected: []
        };
    },

    created() {
        this.getList();
    },

    methods: {
        getList() {
            axios({ url: `/socialList`, method: "GET" })
                .then(res => {
                    let list = [];
                    res.data.list.forEach(e => {
                        list.push(e.name);
                    });

                    this.selected = list;
                })
                .catch(err => {
                    this.$notify({
                        type: "error",
                        title: err.response.data.message,
                        duration: 6000
                    });
                });
        },

        addRemove(name, icon, bColor) {
            const disData = new FormData();
            disData.append("name", name);
            disData.append("icon", icon);
            disData.append("bColor", bColor);
            axios({ url: `/add-remove-social`, data: disData, method: "POST" })
                .then(res => {
                    this.getList();
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
.switch-btn {
    position: relative;
    display: flex;
    align-items: center;

    input {
        display: none;

        &:checked ~ .switch {
            background-color: #629efe;

            &::before {
                transform: translateX(21px);
            }
        }
    }

    .switch {
        position: relative;
        display: inline-block;
        width: 40px;
        height: 20px;
        background-color: #797c9b;
        border-radius: 40px;
        transition: all 0.3s;
        cursor: pointer;

        &::before {
            content: "";
            position: absolute;
            left: 0;
            top: 0;
            width: 20px;
            height: 20px;
            background-color: rgb(243, 243, 243);
            border-radius: 100%;
            transition: all 0.3s;
            box-shadow: 0px 0px 5px rgba($color: #000000, $alpha: 0.2);
        }
    }
}

.social-list {
    list-style: none;
    margin: 0px;
    padding: 0px;
    width: 100%;
    max-width: 600px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;

    li {
        background-color: #fff;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 15px;
        border-radius: 6px;
        box-shadow: 0px 2px 10px rgba($color: #000000, $alpha: 0.05);

        .title {
            font-size: 1rem;
        }

        .icon {
            display: inline-flex;
            justify-content: center;
            align-items: center;
            width: 32px;
            height: 32px;
            color: #fff;
            border-radius: 4px;
            margin-right: 5px;
        }
    }
}

@media screen and (max-width: 500px) {
    .social-list {
        grid-template-columns: 1fr;
    }
}
</style>
