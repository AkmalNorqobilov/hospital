<template>
  <div>
    <h1
      class="w-screen bg-gray-200 py-8 uppercase text-gray-900 text-center text-5xl font-bold"
    >Xizmatlar</h1>
    <ul class="space-y-4 py-4">
      <li v-for="(list, index) in listItems" :key="index" class="float-left w-1/2">
        <services-list color="blue lighten-3"  :title="list.title" :list="list.list" />
      </li>
    </ul>
  </div>
</template>


<script>
import servicesList from "../../../components/lists/servicesList.vue";
export default {
  components: {
    servicesList
  },
  data: () => ({
    listItems: [
      {
        title: "Kardiologiya",
        list: [
          "Koroner yurak kasalligi",
          "Aritmiyani davolash",
          "Gipertonik kasallik",
          "Xolter monitoringi",
          "24 soat davomida qon bosimini nazorat qilish",
          "Velosiped ergometriyasi",
          "VSD yurak turi bo'yicha",
          "ЭХО-КГ Эхокардиография (УЗИ сердца)",
          "Koagulogramma",
          "Qonning lipid spektrini o'rganish"
        ]
      },
      {
        title: "Otorinolaringologiya (LOR)",
        list: [
          "LOR ni qabul qilish (otorinolaringolog)",
          "Bolalar LOR i",
          "Tonsillitni davolash",
          "Faringitni davolash",
          "Bolalardagi adenoidlarni davolashda individual yondashuv",
          "Sinusitni davolash uchun individual dastur",
          "Audiometriya",
          "Timpanometriya",
          "Horlama davolash",
          "Oltingugurt vilkasini olib tashlash",
          "Tonsillektomiya",
          "Lazer yordamida operatsiya",
          "Adenotonsilotomiya",
          "Adenotomiya",
          "Sinuslardagi kistalar uchun operatsiyalar"
        ]
      },
      {
        title: "Terapiya",
        list: [
          "Terapevt tomonidan tekshiruv",
          "Gripp va ARVI ni davolash",
          "Bronxitni davolash",
          "Pnevmoniyani davolash"
        ]
      },
      {
        title: "Gastroenterologiya",
        list: [
          "Gastroenterologni qabul qilish",
          "Laboratoriya tadqiqotlari",
          "Gastrointestinal kasalliklarni davolash",
          "Gastritni davolash",
          "GERD (gastroezofagial reflyuks) davolash",
          "Xoletsistitni davolash",
          "Irritabl ichak sindromini davolash"
        ]
      }
    ]
  })
};
</script>