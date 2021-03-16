<template>
  <v-app>
    <v-app-bar app color="blue" dense flat dark>
      <v-badge
        :value="hover"
        color="transparent"
        content="+998911221212"
        bottom
        transition="slide-x-transition"
      >
        <v-hover v-model="hover">
          <v-icon color="white" dark class="text-bold text-h5" large>Hospital</v-icon>
        </v-hover>
      </v-badge>
      <v-spacer></v-spacer>
      <v-app-bar-nav-icon @click="drawer = !drawer" class="hidden-md-and-up"></v-app-bar-nav-icon>
      <v-btn-toggle
        class="hidden-sm-and-down"
        color="black"
        background-color="transparent"
        mandatory
        v-model="value"
      >
        <v-btn
          outlined
          large
          text
          link
          v-for="([icon, text, link], i) in navbarItems"
          :to="link"
          :key="i"
          class="focus:outline-none"
        >
          <v-icon left>{{icon}}</v-icon>
          {{text}}
        </v-btn>
      </v-btn-toggle>
    </v-app-bar>

    <v-navigation-drawer app v-model="drawer" color="blue lighten-1" dark>
      <v-list>
        <v-list-item v-for="([icon, text, link], i) in navbarItems" :key="i" @click = "$router.push(link)"  :link="link">
          <v-list-item-icon>
            <v-icon>{{ icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <router-view />
    </v-main>

    <Footer />
    <v-btn
      color="pink"
      v-scroll="onScroll"
      bottom
      right
      dark
      fab
      fixed
      @click="toTop"
      class="clickable focus:outline-none"
    >
      <v-icon>mdi-chevron-up</v-icon>
    </v-btn>
  </v-app>
</template>

<script>
import Footer from "../../components/footer";
export default {
  name: "Home",
  data: () => ({
    navbarItems: [
      ["mdi-home", "Home", "/"],
      ["mdi-information", "Error Page", "/about"],
      ["mdi-toolbox", "Services", "/services"],
      ["mdi-doctor", "Doctors", "/doctors"]
    ],
    hover: false,
    drawer: false
  }),
  components: {
    Footer: Footer
  },
  methods: {
    onScroll(e) {
      if (typeof window === "undefined") return;
      const top = window.pageYOffset || e.target.scrollTop || 0;
      this.fab = top > 20;
    },

    toTop() {
      this.$vuetify.goTo(0);
    }
  }
};
</script>
