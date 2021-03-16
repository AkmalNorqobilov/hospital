<template>
    <div>
        <ul class="list-none space-y-6">
            <h1 :class = "`font-xl  font-bold ${color} py-2 px-2`">{{title}}</h1>
            <ul class="space-y-6 text-gray-600 list-disc ">
                <li v-for="(text, i) in list" :key="i">
                    {{text}}
                </li>
            </ul>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        title: String,
        list: Array,
        color: String
    }
}
</script>