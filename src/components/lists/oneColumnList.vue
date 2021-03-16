<template>
    <div>
        <ul class="list-none space-y-6">
            <h1 class="font-xl  font-bold">{{title}}</h1>
            <ul class="space-y-6 text-gray-600 list-disc ">
                <li v-for="(text, i) in listItems" :key="i">
                    {{text}}
                </li>
            </ul>
        </ul>
    </div>
</template>


<script>
export default {
    data: () => ({
        title: "Klinika 5 ta asosiy bo'limdan iborat:",
        listItems: [
            "Poliklinika",
            "Diagnostika bo'limi",
            "Jarrohlik",
            " Statsionar",
            "Fizioterapiya va reabilitatsiya"
        ]
    })
}
</script>