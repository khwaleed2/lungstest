<template>
    <div data-hash="begin" class="app-wrapper">
        <div class="app-container">
            <div class="app-body flex-center">
                <h3 class="title min-h-105">
                    <span v-if="start === false"
                        >Tap start and be ready to take a deep breath and don't
                        breath after that
                    </span>
                    <transition name="fade">
                        <span v-if="start === true && inhale === false">
                            Be ready to take a deep breath and don't breath
                            after that
                        </span>
                    </transition>
                    <transition name="fade">
                        <span
                            v-if="
                                inhale &&
                                    inhaleComplete === false &&
                                    holdBreath === false
                            "
                        >
                            Take a slow, <br />
                            deep breath
                        </span>
                    </transition>
                    <transition name="fade">
                        <span v-if="holdBreath && done === false">
                            Don't beathe out! Try to hold your breath as long as
                            you can
                        </span>
                    </transition>
                </h3>

                <button
                    class="play-btn"
                    v-if="holdBreath === false"
                    :class="{ inhale: inhale }"
                    :style="`animation-duration: ${inhaleDuration}s;`"
                    @click="startInhale"
                >
                    <i class="fas fa-play" v-if="start === false"></i>
                    <span
                        v-if="start === true && inhale === false"
                        class="count-dwon"
                        >{{ countDown }}</span
                    >
                    <span v-if="inhale && inhaleComplete === false" class="text"
                        >Deep Breath</span
                    >
                    <span v-if="inhaleComplete" class="text"
                        >And <br />
                        STOP</span
                    >
                </button>

                <transition name="fade">
                    <div v-if="holdBreath === true" class="hold-breath-counter">
                        <button
                            @click="stopTiming"
                            v-if="done === false"
                            class="stop-btn"
                        >
                            Tap only if you inhale again
                        </button>
                        <span v-else>Breath normally</span>
                        <svg
                            width="223"
                            id="cus"
                            :class="{ pause: stopProgress }"
                            height="223"
                            viewBox="0 0 223 223"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g id="circle">
                                <circle
                                    id="line"
                                    cx="112"
                                    cy="112"
                                    r="94.5"
                                    stroke="white"
                                />
                                <g id="circle_2" filter="url(#filter0_d)">
                                    <circle
                                        cx="111.5"
                                        cy="111.5"
                                        r="94.5"
                                        :style="
                                            `animation-duration: ${holdBreathDuration}s; animation-delay: ${1}s;`
                                        "
                                        stroke="white"
                                        stroke-width="8"
                                    />
                                </g>
                            </g>
                            <defs>
                                <filter
                                    id="filter0_d"
                                    x="0"
                                    y="0"
                                    width="221"
                                    height="221"
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
                </transition>

                <transition name="fade">
                    <div v-if="done" class="analyzing">Analyzing</div>
                </transition>

                <transition name="fade">
                    <a
                        href="#"
                        @click="tryAgain"
                        v-if="holdBreath && done === false"
                        class="retry-btn"
                        >Stop and retry</a
                    >
                </transition>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "begin",

    data() {
        return {
            countDown: 3,
            start: false,
            inhale: false,
            inhaleComplete: false,
            holdBreath: false,
            progress: 80,
            done: false,
            stopProgress: false,
            int: null,
            time: 0
        };
    },

    computed: {
        getTryAgain() {
            return this.$store.getters.getTryAgain;
        },

        inhaleDuration() {
            return this.$store.getters.getData.resultData.inhale_dura;
        },

        holdBreathDuration() {
            return this.$store.getters.getData.resultData.hold_dura;
        },

        results() {
            return this.$store.getters.getData.result;
        }
    },

    watch: {
        getTryAgain(e) {
            if (e === true) {
                this.tryAgain();
            }
        }
    },

    created() {
        if (this.getTryAgain === true) {
            this.tryAgain();
        }
    },

    methods: {
        startInhale() {
            this.start = true;
            this.countDownTimer();
        },

        stopInhale() {
            this.inhaleComplete = true;

            setTimeout(() => {
                this.holdBreath = true;
            }, 1000);

            setTimeout(() => {
                this.startTiming();
            }, 2000);
        },

        startTiming() {
            this.int = setInterval(() => {
                if (this.holdBreathDuration > this.time) {
                    this.time = ++this.time;
                } else {
                    this.stopTiming();
                }
            }, 1000);
        },

        stopTiming() {
            clearInterval(this.int);
            this.done = true;
            this.stopProgress = true;
            let res = null;

            this.results.forEach(r => {
                if (r.conditions === "before" && res === null) {
                    if (this.time <= r.seconds) {
                        res = {
                            result: r.result,
                            critical: r.critical
                        };

                        this.$store.commit("setResult", res);
                    }
                }

                if (r.conditions === "after" && res === null) {
                    if (this.time > r.seconds) {
                        res = {
                            result: r.result,
                            critical: r.critical
                        };

                        this.$store.commit("setResult", res);
                    }
                }
            });

            setTimeout(() => {
                this.$router.push({ name: "result" });
            }, 2510);
        },

        countDownTimer() {
            if (this.countDown > 0) {
                setTimeout(() => {
                    this.countDown -= 1;

                    if (this.countDown === 0) {
                        this.inhale = true;
                        setTimeout(() => {
                            this.stopInhale();
                        }, this.inhaleDuration * 1000);
                    }

                    this.countDownTimer();
                }, 1000);
            }
        },

        tryAgain() {
            clearInterval(this.int);
            this.countDown = 3;
            this.start = false;
            this.inhale = false;
            this.inhaleComplete = false;
            this.holdBreath = false;
            this.done = false;
            this.stopProgress = false;
            this.int = null;
            this.time = 0;

            setTimeout(() => {
                this.$store.commit("setTryAgain", false);
                this.$store.commit("setShowPage", 0);
            }, 1000);
        }
    }
};
</script>

<style lang="scss" scoped>
.play-btn {
    width: 115px;
    height: 115px;
    border: 0px;
    border-radius: 100%;
    margin: 90px auto 0px;
    background-color: #5f90dc;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;

    i {
        font-size: 38px;
        margin-left: 10px;
    }

    .count-dwon {
        font-size: 46px;
        font-weight: 600;
    }

    .text {
        font-size: 15px;
        font-weight: 600;
    }

    &.inhale {
        animation: inhale linear;
        transform: scale(1.65);
    }

    @keyframes inhale {
        from {
            transform: scale(0.5);
        }

        to {
            transform: scale(1.75);
        }
    }
}

.min-h-105 {
    min-height: 105px;
}

.hold-breath-counter {
    width: 100%;
    max-width: 233px;
    margin: 60px auto 0px;
    position: relative;

    .stop-btn {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-54.1%, -50%);
        width: 110px;
        height: 110px;
        background-color: #5a8bd7;
        color: #fff;
        border: 0px;
        border-radius: 100%;
        font-size: 15px;
        padding: 0px 15px;
        display: flex;
        justify-content: center;
        align-items: center;
        line-height: 18px;
        cursor: pointer;
        z-index: 9;
    }

    span {
        font-size: 21px;
        font-weight: 600;
        position: absolute;
        top: 50%;
        left: 48.5%;
        transform: translate(-50%, -50%);
        z-index: 9;
        width: 100%;
        max-width: 152px;
    }
}

.retry-btn {
    position: absolute;
    bottom: 36px;
    left: 50%;
    transform: translateX(-50%);
    color: #fff;
    text-decoration: none;
    font-size: 18px;
}

.analyzing {
    font-size: 32px;
    font-weight: 600;
    margin: 40px auto 0px;
    display: flex;
    justify-content: center;
    align-items: center;

    &::after {
        overflow: hidden;
        display: inline-block;
        letter-spacing: 10px;
        vertical-align: bottom;
        animation: ellipsis steps(4, end) 2500ms infinite;
        content: "\2026"; /* ascii code for the ellipsis character */
        width: 0px;
    }
}

svg#cus {
    transform: rotateY(-360deg) rotateZ(-90deg);

    &.pause {
        g#circle_2 circle {
            animation-play-state: paused;
        }
    }
}

svg#cus g#circle_2 circle {
    stroke-dasharray: 592px;
    stroke-dashoffset: 0px;
    stroke-linecap: round;
    stroke-width: 9px;
    animation: countdown linear forwards;
}

@keyframes countdown {
    from {
        stroke-dashoffset: 0px;
    }
    to {
        stroke-dashoffset: 592px;
    }
}

@keyframes ellipsis {
    to {
        width: 0.945em;
    }
}

@media screen and (max-width: 309px) {
    .hold-breath-counter {
        .stop-btn {
            font-size: 14px;
        }

        span {
            font-size: 18px;
            max-width: 135px;
        }
    }

    .analyzing {
        font-size: 28px;
    }
}
</style>
