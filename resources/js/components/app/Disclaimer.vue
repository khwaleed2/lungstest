<template>
    <div data-hash="disclaimer" class="app-wrapper">
        <div class="app-container">
            <div class="app-body">
                <h2 class="title">Disclaimer</h2>
                <div class="text-card">
                    {{ cardText }}
                </div>

                <ul class="disclaimer-list">
                    <template v-for="(item, index) in disclaimers">
                        <li :key="index">
                            <i class="list-icon">
                                <img :src="item.icon" />
                            </i>
                            <span>{{ item.text }}</span>
                        </li>
                    </template>
                </ul>
            </div>
            <div class="app-footer">
                <div class="footer-card">
                    <div class="card-info">
                        <i class="card-icon">
                            <i class="fas fa-smoking"></i>
                        </i>
                        <span>I'm a smoker</span>
                    </div>
                    <div class="card-actions">
                        <label class="switch-btn">
                            <input type="checkbox" />
                            <span class="switch"></span>
                        </label>
                    </div>
                </div>
                <a class="footer-btn" href="#howto">Confirm</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "disclaimer",

    data() {
        return {
            disclaimers: [],
            cardText: ""
        };
    },

    created() {
        this.getDisclaimers();
    },

    methods: {
        getDisclaimers() {
            axios({ url: "disclaimers", method: "GET" })
                .then(res => {
                    this.disclaimers = res.data.disclaimers;
                    this.cardText = res.data.DisclaimerCardText.text;
                })
                .catch(err => {
                    console.log(err);
                });
        }
    }
};
</script>

<style lang="scss" scoped>
.disclaimer-list {
    list-style: none;
    margin: 0px;
    padding: 0px;
    height: calc(100vh - 350px);
    overflow-y: auto;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none;

    &::-webkit-scrollbar {
        display: none;
    }

    li {
        display: flex;
        align-items: center;
        margin-bottom: 10px;
        color: rgba(255, 255, 255, 0.8);
        font-size: 15px;

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

.footer-card {
    width: 100%;
    background-color: #2b60b5;
    color: rgba(255, 255, 255, 0.8);
    font-size: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 12px;
    border-radius: 15px;

    .card-info {
        display: flex;
        align-items: center;

        .card-icon {
            width: 32px;
            height: 32px;
            display: inline-block;
            background-color: #fff;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 100%;
            margin-right: 10px;

            i {
                font-size: 14px;
                color: #000;
            }
        }
    }

    .card-actions {
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
                width: 45px;
                height: 25px;
                background-color: #797c9b;
                border-radius: 40px;
                transition: all 0.3s;
                cursor: pointer;

                &::before {
                    content: "";
                    position: absolute;
                    left: 0;
                    top: 0;
                    width: 25px;
                    height: 25px;
                    background-color: #fff;
                    border-radius: 100%;
                    transition: all 0.3s;
                }
            }
        }
    }
}

@media screen and (max-width: 309px) {
    .disclaimer-list {
        li {
            font-size: 14px;

            .list-icon {
                width: 30px;
                height: 30px;

                img {
                    max-width: 12px;
                }
            }
        }
    }
}
</style>
