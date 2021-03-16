<template>
  <v-app>
    <div class="w-screen bg-gray-900 h-screen flex justify-center align-center">
      <v-card
        class="w-64 h-2/3 flex flex-col justify-center text-center"
        color="red--text black"
        elevation="24"
      >
        <div class="text-h1 ">
          <v-icon color="red" class="w-full" size="200">mdi-alert</v-icon>
          <h1 class="text-8xl font-extrabold">
            404
          </h1>
          <h1>This page is not found!!!</h1>
          <v-btn
            color="red"
            outlined
            @click="$router.go(-1)"
            class="focus:outline-none bg-yellow-100 w-1/2"
          >go back</v-btn>
        </div>
      </v-card>
    </div>
  </v-app>
</template>