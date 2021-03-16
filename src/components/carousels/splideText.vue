<template>
  <splide :options="options" class="text-center py-12 w-screen bg-blue-400">
    <splide-slide class="text-2xl white--text">
      lorem ipsum dolar set amber dense fab-transition 4 fab-transition
    </splide-slide>
    <splide-slide class="text-2xl white--text">
      lorem ipsum dolar set amber dense fab-transition 4 fab-transition
    </splide-slide>
    <splide-slide class="text-2xl white--text">
      lorem ipsum dolar set amber dense fab-transition 4 fab-transition
    </splide-slide>
  </splide>
</template>

<script>
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
export default {
  data: () => ({
    options: {
      rewind: true,
      gap: "12rem"
    }
  }),
  components: {
    Splide,
    SplideSlide
  }
};
</script>