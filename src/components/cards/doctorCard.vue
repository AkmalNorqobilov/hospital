<template>
  <v-card
    class="mx-auto"
    max-width="400"
  >
    <v-img
      class="white--text align-end h-64 object-fit"
      :src="doctor.src"
    >
      <v-card-title class="text-gray-900">{{doctor.fio}}</v-card-title>
    </v-img>

    

    <v-card-text class="text--primary h-16">
      <v-toolbar-title>{{doctor.job}}</v-toolbar-title>
    </v-card-text>

  </v-card>
</template>

<script>
export default {
    props: {
        doctor: Object
    }
}
</script>