<template>
  <v-row class="px-2" justify-space-around align-center>
    <v-col md="6" lg="6" sm="12">
      <v-carousel hide-delimiters interval="200">
        <v-carousel-item v-for="(item, i) in items" :key="i" :src="item.src"></v-carousel-item>
      </v-carousel>
    </v-col>
    <v-col md="6" class="text-h3 pl-5">
      <v-list-item v-for="(text, i) in texts" :key="i">
        <v-list-item-content>
          <v-list-item-title class="text-h3 red--text">⚈{{text}}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item two-line class="subtitle-1 w-96">
          Obuna bo'ling va doimo dolzarb muammolaringiz uchun foydali takliflar
      </v-list-item>
    </v-col>
  </v-row>
</template>


<script>
export default {
  data: () => ({
    items: [
      {
        src: "https://hayatmed.uz/wp-content/uploads/2018/04/s_8.jpg"
      },
      {
        src: "https://hayatmed.uz/wp-content/uploads/2018/04/s_1.jpg"
      },
      {
        src: "https://hayatmed.uz/wp-content/uploads/2018/04/s_3.jpg"
      },
      {
        src: "https://hayatmed.uz/wp-content/uploads/2018/04/s_4.jpg"
      },
      {
        src: "https://hayatmed.uz/wp-content/uploads/2018/04/s_5.jpg"
      },
      {
        src: "https://hayatmed.uz/wp-content/uploads/2018/04/s_6.jpg"
      },
      {
        src: "https://hayatmed.uz/wp-content/uploads/2018/04/s_7.jpg"
      }
    ],
    texts: [
      "Diagnostika",
      "Licheniya",
      "Profilaktika",
      "Fizioterapiya",
      "Statsionar"
    ]
  })
};
</script>