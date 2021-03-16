<template>
  <div>
    <v-carousel hide-delimiters height="auto" class="my-1" light>
      <v-carousel-item ripple v-for="(item,i) in items" :key="i" :src="item.src"></v-carousel-item>
    </v-carousel>
    <main-toolbar class="my-1" />
    <carousel-with-text />
    <h1 class="text-center w-screen red--text text-h3 my-4 font-weight-bold">Bizning manzil</h1>
    <iframe
      class="w-screen my-2 mx-1"
      src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d95911.05971916975!2d69.13925495820314!3d41.30406400000007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2s!4v1615460682558!5m2!1sru!2s"
      width="600"
      height="450"
      style="border:0;"
      allowfullscreen
      loading="lazy"
    ></iframe>
    <div class="text-center w-screen pr-64">
      <splide-text />
    </div>
    <v-row justify="center" class="my-2" autoplay controls>
      <v-col>
        <Embed
          height="400"
          class="w-full"
          width="600"
          src="https://www.hayatmed.uz/wp-content/uploads/2018/04/Hayat.mp4"
        />
      </v-col>
      <v-col>
        <one-column-list />
        <two-column-list />
      </v-col>
    </v-row>

    <v-toolbar color="primary">
      <v-row justify="between" align="center" outline="none" class="text-center">
        <v-col class="text-3xl white--text font-bold uppercase">Uchrashuvni belgilang</v-col>
        <v-col>
          <v-avatar class="border-2 border-white" size="50">
            <v-icon size="30" class="white--text">mdi-calendar-month-outline</v-icon>
          </v-avatar>
        </v-col>

        <v-col>
          <v-btn class="h-8">Uchrashuvni belgilang</v-btn>
        </v-col>
      </v-row>
    </v-toolbar>
  </div>
</template>

<script>
import splideText from "../../../components/carousels/splideText.vue";
import mainToolbar from "../../../components/toolbars/mainToolbar.vue";
import carouselWithText from "../../../components/carousels/carouselWithText.vue";
import oneColumnList from "../../../components/lists/oneColumnList.vue";
import twoColumnList from "../../../components/lists/twoColumnList.vue";
export default {
  name: "homeMain",
  data: () => ({
    items: [
      {
        src: "imgs/hospital1.jpg"
      },
      {
        src: "imgs/hospital2.jpg"
      },
      {
        src: "imgs/hospital3.jpg"
      }
    ]
  }),
  components: {
    mainToolbar: mainToolbar,
    carouselWithText,
    splideText,
    oneColumnList,
    twoColumnList
  }
};
</script>

<style>
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 10px;
}
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>