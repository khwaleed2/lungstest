<template>
  <div>
    <carousel
      :items="1"
      :rewind="false"
      :mouseDrag="false"
      :touchDrag="false"
      :pullDrag="false"
      :dots="false"
      :URLhashListener="true"
      :nav="false"
      :startPosition="page"
    >
      <start />
      <disclaimer />
      <how-to />
      <begin />
    </carousel>
  </div>
</template>

<script>
import carousel from "vue-owl-carousel";
import Begin from "../components/app/Begin.vue";
import Disclaimer from "../components/app/Disclaimer.vue";
import HowTo from "../components/app/HowTo.vue";
import Start from "../components/app/Start.vue";

export default {
  components: { carousel, Start, Disclaimer, HowTo, Begin },

  data() {
    return {
      page: 0,
    };
  },

  computed: {
    setPage() {
      return this.$store.getters.getShowPage;
    },
  },

  created() {
    this.page = this.setPage;
  },

  watch: {
    setPage(e) {
      this.page = e;
    },
  },
};
</script>
