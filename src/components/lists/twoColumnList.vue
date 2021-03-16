<template>
  <ul class="my-4 space-y-6 space-x-6">
    <h1 class="font-xl font-bold block">{{title}}</h1>
    <div class="flex justify-start gap-24">
      <li v-for="(items, index) in listItems" :key="index" style="float:left;">
        <ul class="list-disc space-y-6">
          <li v-for="(text, i) in items" :key="i">{{text}}</li>
        </ul>
      </li>
    </div>
  </ul>
</template>

<script>
export default {
  data: () => ({
    title: "KLINIKA shifokorlarni quyidagi yo'nalishlar bo'yicha qabul qiladi:",
    listItems: [
      [
        "Kardiologiya",
        "Gastroenterologiya",
        "Urologiya",
        "Ginekologiya",
        "Jarrohlik",
        "Endokrinologiya"
      ],
      [
        "Terapiya",
        "Nevrologiya",
        "LOR",
        "Oftalmologiya",
        "Pediatriya",
        "Allergologiya."
      ]
    ]
  })
};
</script>