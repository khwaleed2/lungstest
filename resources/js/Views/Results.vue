<template>
  <div data-hash="result" class="app-wrapper">
    <div class="app-container">
      <div class="app-body">
        <h2 class="title min-h-70">
          <transition name="fade">
            <span v-if="show">Your appoximate blood oxygen level is</span>
          </transition>
        </h2>

        <div class="result">
          <div class="text">
            <span>≈95-99%</span>
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
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
            The app's measurements are just recommendations and can't be used to
            diagnose the exact spO2 value. the test can only indentify patients
            at risk of severe shortness of breath. The most accurate way to
            measure spO2 is to buy a pulse oximeter or Apple Watch s6.
          </div>
          <a class="footer-btn-lite" href="#" @click="tryAgain">Try again</a>
          <a class="footer-btn" href="#">Save</a>
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
    };
  },

  created() {
    setTimeout(() => {
      this.show = true;
    }, 1400);
  },

  methods: {
    tryAgain() {
      this.$store.commit("setTryAgain", true);
      this.$store.commit("setShowPage", 3);

      setTimeout(() => {
        this.$router.push({ name: "master" });
      }, 500);
    },
  },
};
</script>

<style lang="scss" scoped>
.result {
  width: 100%;
  max-width: 159px;
  margin: 10% auto 0px;
  position: relative;

  .text {
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
</style>
