<template>
  <v-footer dark app absolute paddless color="blue lighten-1" class="py-12">
    <v-row justify="space-around">
      <v-col md="4" lg="4" xl="4" sm="12" class="space-y-6">
        <h1 class="white--text">Hospital Logotip</h1>
        <div class="space-y-4">
          <div>Jahon standartlariga muvofiq diagnostik, ambulator va statsionar yordam.</div>
          <div>Biz sizning sog'lig'ingiz uchun eng yaxshisini birlashtirdik.</div>
          <div class="flex justify-center w-full space-x-2">
            <v-btn v-for="(messenger, index ) in messengers" class="focus:outline-none" color="transparent" elevation="0" :key="index" fab>
              <v-icon>{{messenger.icon}}</v-icon>
            </v-btn>
          </div>
        </div>
      </v-col>
      <v-col class="flex flex-row" md="4" lg="4" xl="4" sm="12">
        <div></div>
        <div>
          <v-list color="transparent">
            <v-list-item v-for="([icon, text, link], i) in navbarItems" class="h-8" :key="i" :link="link">
              <v-list-item-icon>
                <v-icon>{{ icon }}</v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>{{ text }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </div>
      </v-col>
    </v-row>
    <hr class="w-full mt-4"/>
  </v-footer>
</template>

<script>
export default {
  name: "Footer",
  data: () => ({
      navbarItems: [
      ["mdi-home", "Home", "/"],
      ["mdi-information", "About Company", "/about"],
      ["mdi-toolbox", "Services", "/services"],
      ["mdi-doctor", "Doctors", "/doctors"]
    ],
    messengers: [
      {
        icon: "mdi-telegram"
      },
      {
        icon: "mdi-facebook"
      },
      {
        icon: "mdi-instagram"
      },
      {
        icon: "mdi-twitter"
      }
    ]
  })
};
</script>