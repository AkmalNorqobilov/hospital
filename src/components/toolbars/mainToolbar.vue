<template>
  <v-toolbar color="green" >
    <v-row align="center" justify="center">
      <v-col cols="4" offset="1">
        <v-form @submit.stop="" class="white--text">
          <v-text-field   append-icon="mdi-magnify" placeholder="Search" height="40"></v-text-field>
        </v-form>
      </v-col>
      <v-col offset="4" class="text-h5 white--text font-weight-bold">
          Hospital Logotip
      </v-col>
    </v-row>
  </v-toolbar>
</template>