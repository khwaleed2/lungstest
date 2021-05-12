<template>
  <div data-hash="howto" class="app-wrapper">
    <div class="app-container">
      <div class="app-body">
        <h2 class="title">How to take your blood oxygen level spread</h2>

        <ul class="steps">
          <li class="step">1. Go to the next screen and follow the prompts</li>
          <li class="step">2. take one breath</li>
          <li class="step">3. Hold your breath</li>
          <li class="step">4. Try not to inhale for as long as posible</li>
          <li class="step">5. Tap if you inhale</li>
        </ul>
      </div>
      <div class="app-footer">
        <a class="footer-btn" href="#begin">Next</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.steps {
  list-style: none;
  margin: 0px;
  padding: 0px;
  max-height: calc(100vh - 272px);
  overflow-y: auto;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  .step {
    color: #fff;
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 20px;
  }
}
</style>
