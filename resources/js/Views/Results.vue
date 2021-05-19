<template>
    <div data-hash="result" class="app-wrapper">
        <div class="app-container">
            <div class="app-body">
                <h2 class="title min-h-70">
                    <transition name="fade">
                        <span v-if="show"
                            >Your appoximate blood oxygen level is</span
                        >
                    </transition>
                </h2>

                <div class="result">
                    <i
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Critical"
                        class="fas fa-exclamation-circle danger"
                        v-if="f_result.critical === 'yes'"
                    ></i>
                    <div class="text">
                        <span>{{ f_result.result }}</span>
                        <span class="lite">SpO2</span>
                    </div>
                    <svg
                        width="159"
                        height="159"
                        id="loader"
                        viewBox="0 0 159 159"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g id="circle_2">
                            <circle
                                id="line_2"
                                cx="79.8425"
                                cy="79.8427"
                                r="64.6015"
                                stroke="white"
                            />
                            <g id="circle_3" filter="url(#filter0_d)">
                                <circle
                                    id="c"
                                    cx="79.5"
                                    cy="79.5"
                                    r="63.5"
                                    stroke="white"
                                    stroke-width="7"
                                />
                            </g>
                        </g>
                        <defs>
                            <filter
                                id="filter0_d"
                                x="0"
                                y="0"
                                width="159"
                                height="159"
                                filterUnits="userSpaceOnUse"
                                color-interpolation-filters="sRGB"
                            >
                                <feFlood
                                    flood-opacity="0"
                                    result="BackgroundImageFix"
                                />
                                <feColorMatrix
                                    in="SourceAlpha"
                                    type="matrix"
                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                />
                                <feOffset />
                                <feGaussianBlur stdDeviation="6" />
                                <feColorMatrix
                                    type="matrix"
                                    values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.6 0"
                                />
                                <feBlend
                                    mode="normal"
                                    in2="BackgroundImageFix"
                                    result="effect1_dropShadow"
                                />
                                <feBlend
                                    mode="normal"
                                    in="SourceGraphic"
                                    in2="effect1_dropShadow"
                                    result="shape"
                                />
                            </filter>
                        </defs>
                    </svg>
                </div>
            </div>
            <transition name="fade">
                <div class="app-footer" v-if="show">
                    <div class="text-card t-sm">
                        {{ cardText }}
                    </div>
                    <div class="social-share">
                        <ShareNetwork
                            network="facebook"
                            class="fb"
                            :url="meta.url"
                            :title="meta.title"
                            :description="meta.description"
                            :quote="
                                `I took my lungs test and this my result ${f_result.result} SpO2`
                            "
                            :media="meta.media"
                        >
                            <i class="fab fa-facebook-square"></i>
                        </ShareNetwork>
                        <ShareNetwork
                            network="twitter"
                            class="tw"
                            :url="meta.url"
                            :title="meta.title"
                            :description="meta.description"
                            :quote="
                                `I took my lungs test and this my result ${f_result.result} SpO2`
                            "
                            :media="meta.media"
                        >
                            <i class="fab fa-twitter-square"></i>
                        </ShareNetwork>
                        <ShareNetwork
                            network="linkedIn"
                            class="li"
                            :url="meta.url"
                            :title="meta.title"
                            :description="meta.description"
                            :quote="
                                `I took my lungs test and this my result ${f_result.result} SpO2`
                            "
                            :media="meta.media"
                        >
                            <i class="fab fa-linkedin"></i>
                        </ShareNetwork>
                        <ShareNetwork
                            network="WhatsApp"
                            class="wa"
                            :url="meta.url"
                            :title="meta.title"
                            :description="meta.description"
                            :quote="
                                `I took my lungs test and this my result ${f_result.result} SpO2`
                            "
                            :media="meta.media"
                        >
                            <i class="fab fa-whatsapp-square"></i>
                        </ShareNetwork>
                    </div>
                    <a class="footer-btn-lite" href="#" @click="tryAgain"
                        >Try again</a
                    >
                </div>
            </transition>
        </div>
    </div>
</template>

<script>
export default {
    name: "result",

    data() {
        return {
            show: false,
            results: [],
            inhale_dura: null,
            hold_dura: null,
            meta: {
                url: "",
                title: "",
                description: "",
                media: ""
            }
        };
    },

    created() {
        setTimeout(() => {
            this.show = true;
        }, 1400);
    },

    mounted() {
        $('[data-toggle="tooltip"]').tooltip();
        this.getMetaData();
    },

    computed: {
        cardText() {
            return this.$store.getters.getData.resultData.card_text;
        },
        f_result() {
            return this.$store.getters.getResult;
        }
    },

    methods: {
        tryAgain() {
            this.$store.commit("setTryAgain", true);
            this.$store.commit("setShowPage", 3);

            setTimeout(() => {
                this.$router.push({ name: "master" });
            }, 500);
        },

        getMetaData() {
            axios({ url: "get-metaData", method: "GET" })
                .then(res => {
                    console.log(res.data.metaData);
                    this.meta.title = res.data.metaData.title;
                    this.meta.url = res.data.metaData.url;
                    this.meta.description = res.data.metaData.description;
                    this.meta.media = `${process.env.MIX_API_URL}${res.data.metaData.image}`;
                })
                .catch(err => {
                    console.log(err);
                });
        }
    }
};
</script>

<style lang="scss" scoped>
.result {
    width: 100%;
    max-width: 159px;
    margin: 10% auto 0px;
    position: relative;

    .danger {
        position: absolute;
        top: 33px;
        left: 50%;
        transform: translateX(-50%);
        color: rgb(236, 65, 65);
        font-size: 1.2rem;
        z-index: 9;
    }

    .text {
        z-index: 9;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -39%);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: 18px;
        line-height: 23px;

        .lite {
            font-size: 16px;
            color: rgba(255, 255, 255, 0.8);
        }
    }
}

.min-h-70 {
    min-height: 70px;
}

svg {
    transform: rotateY(-360deg) rotateZ(-90deg);
}

svg g#circle_3 circle {
    stroke-dasharray: 400px;
    stroke-dashoffset: 0px;
    stroke-linecap: round;
    stroke-width: 9px;
    animation: countdown 1.4s linear forwards;
}

@keyframes countdown {
    from {
        stroke-dashoffset: 400px;
    }
    to {
        stroke-dashoffset: 0px;
    }
}

.social-share {
    display: flex;
    justify-content: center;
    align-items: center;

    a {
        color: #fff;
        margin: 8px;

        i {
            font-size: 32px;
        }
    }
}

@media screen and (max-width: 309px) {
    .result {
        .danger {
            font-size: 1.1rem;
        }

        .text {
            font-size: 16px;
            line-height: 18px;

            .lite {
                font-size: 14px;
            }
        }
    }
}
</style>
