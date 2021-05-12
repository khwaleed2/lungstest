<template>
  <div data-hash="result" class="app-wrapper">
    <div class="app-container v-center">
      <div class="app-body">
        <h2>Blood Oxygen</h2>
        <span>%</span>
        <div class="vertical-bar">
          <div class="loadingio-spinner-dual-ring-nxydyhwbm7">
            <div class="ldio-5057kg2ykag">
              <div></div>
              <div><div></div></div>
            </div>
          </div>

          <i class="check-icon">
            <i class="ti ti-check"></i>
          </i>
        </div>
        <a href="#disclaimer">Measure</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "start",
};
</script>

<style lang="scss" scoped>
@keyframes ldio-5057kg2ykag {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
.ldio-5057kg2ykag div {
  box-sizing: border-box !important;
}
.ldio-5057kg2ykag > div {
  position: absolute;
  width: 91px;
  height: 91px;
  top: 4.5px;
  left: 4.5px;
  border-radius: 50%;
  border: 15px solid #ff4677;
  border-color: #ff4677 transparent #9a96ff transparent;
  animation: ldio-5057kg2ykag 1.075268817204301s linear infinite;
}
.ldio-5057kg2ykag > div:nth-child(2) {
  border-color: transparent;
}
.ldio-5057kg2ykag > div:nth-child(2) div {
  position: absolute;
  width: 100%;
  height: 100%;
  transform: rotate(45deg);
}
.ldio-5057kg2ykag > div:nth-child(2) div:before,
.ldio-5057kg2ykag > div:nth-child(2) div:after {
  content: "";
  display: block;
  position: absolute;
  width: 15px;
  height: 15px;
  top: -15px;
  left: 23px;
  background: #ff4677;
  border-radius: 50%;
  box-shadow: 0 76px 0 0 #9a96ff;
}
.ldio-5057kg2ykag > div:nth-child(2) div:after {
  left: -15px;
  top: 23px;
  box-shadow: 76px 0 0 0 #9a96ff;
}
.loadingio-spinner-dual-ring-nxydyhwbm7 {
  width: 42px;
  height: 42px;
  display: inline-block;
  overflow: hidden;
  background: rgba(0, 0, 0, 0);
}
.ldio-5057kg2ykag {
  width: 100%;
  height: 100%;
  position: relative;
  transform: translateZ(0) scale(0.42);
  backface-visibility: hidden;
  transform-origin: 0 0; /* see note above */
}
.ldio-5057kg2ykag div {
  box-sizing: content-box;
}

.app-body {
  text-align: center;
}

h2 {
  margin-bottom: 5px;
}

span {
  font-size: 18px;
  color: rgba(255, 255, 255, 0.836);
  margin-bottom: 15px;
  display: block;
}

.vertical-bar {
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 84px;
  margin: 0px auto;
  padding: 76px 18px 18px;
  border-radius: 50px;

  .check-icon {
    background-color: #bed3ff;
    width: 45px;
    height: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
    margin-top: 16px;

    i {
      font-size: 22px;
    }
  }
}

a {
  background-color: #fff;
  color: #376ccc;
  text-decoration: none;
  padding: 8px 12px 7px;
  border-radius: 30px;
  font-size: 16px;
  margin-top: 14px;
  display: inline-block;
  transition: all 0.3s;

  &:hover {
    background-color: darken(#fff, 5);
  }
}
</style>
