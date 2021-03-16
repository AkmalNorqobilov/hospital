<template>
    <div>
        <v-row justify="between" justify-sm="12" class="px-2 py-2">
            <v-col md="3" lg="3" sm="12" v-for="(doctor, index) in doctorLists"  :key="index">
                <doctor-card :doctor = "doctor" />
            </v-col>
        </v-row>
    </div>
</template>

<script>
import doctorCard from "../../../components/cards/doctorCard.vue";
export default {
    data: ()=> ({
        doctorLists: [
            {
                fio: 'Akbarxodjaeva Munira Raxmatovna',
                src: 'https://www.hayatmed.uz/wp-content/uploads/2019/09/Мунира-Р.jpg',
                job: "Pediatr - kardio-revmatolog"
            },
            {
            fio: "Alimov Sherzod Ganievich",
            src: "https://hayatmed.uz/wp-content/uploads/2019/09/шерзод-г-960x720.jpg",
            job: "Shifokor - dermatolog"
            },
            {
                fio: "Mardiev Shavkat Nuritdinovich",
                src: "https://hayatmed.uz/wp-content/uploads/2019/02/Без-имени-2-960x720.png",
                job: "HAYAT TIBBIY MARKAZI radiologiya bo'limining rentgenologi"
            },
            {
                fio: "Nigmanov Murodjon Sodiqjonovich",
                src: "https://hayatmed.uz/wp-content/uploads/2019/01/Без-имени-22-1-960x720.jpg",
                job: "Otorinolaringolog, plastik jarroh"
            },
            {
                fio: "Umarov Nurillo",
                src: "/imgs/nurullo.jpg",
                job: "Nevro Jarroh"
            }
        ]
    }),
    components: {
        doctorCard
    }
}
</script>