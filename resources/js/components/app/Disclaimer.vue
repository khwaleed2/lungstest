<template>
  <div data-hash="disclaimer" class="app-wrapper">
    <div class="app-container">
      <div class="app-body">
        <h2 class="title">Disclaimer</h2>
        <div class="text-card">
          To ensure that your mesurements are as accurate as possible, we need
          to make sure that you:
        </div>

        <ul class="disclaimer-list">
          <li>
            <i class="list-icon"></i>
            <span>have not smoked or drank alcohol</span>
          </li>
          <li>
            <i class="list-icon"></i>
            <span>don't have any lung conditions</span>
          </li>
          <li>
            <i class="list-icon"></i>
            <span>don't have any diseases of the blood</span>
          </li>
          <li>
            <i class="list-icon"></i>
            <span>don't have astama</span>
          </li>
          <li>
            <i class="list-icon"></i>
            <span>don't have any chronic diseases</span>
          </li>
          <li>
            <i class="list-icon"></i>
            <span>didn't play sports in the past 1 hour</span>
          </li>
          <li>
            <i class="list-icon"></i>
            <span>feel no stess right now</span>
          </li>
        </ul>
      </div>
      <div class="app-footer">
        <div class="footer-card">
          <div class="card-info">
            <i class="card-icon"></i>
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
</style>
