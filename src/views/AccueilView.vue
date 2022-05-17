<script>
import card from "../components/Card.vue"
import footer1 from "../components/Footer.vue"
import searchliste from "../components/SearchListe.vue"
export default {
    name:"App",
    components: { card, footer1, searchliste },
}
</script>

<template >
    <main class="bg-indigo-25 pt-14 px-4 font-inter">
        <h2 class="text-4xl font-bold text-indigo-1000 text-center pt-[3.625rem] mb-8">Search properties to rent</h2>
        <searchliste />
        <div class="grid grid-flow-row-dense grid-cols-[repeat(auto-fit,minmax(343px,1fr))]">
            <card class="p-4" 
            titre="Beverly Springfield"
            image="/images-maison/maison1.jpg" 
            lieu="2821 Lake Sevilla, Palm Harbor, TX"
            nbrSDB="2"/>
            <card class="p-4"
            :price="2095" 
            titre="Palm Harbor"
            image="/images-maison/maison2.jpg" 
            lieu="2699 Green Valley, Highland Lake"
            nbrSDB="2"/>
            <card class="p-4"
            :price="4550" 
            titre="Faulkner Ave" 
            image="/images-maison/maison3.jpg"
            lieu="909 Woodland St, Michigan, IN"
            nbrSDB="3"/>
            <card class="p-4"
            :price="4650" 
            titre="St. Christal"
            image="/images-maison/maison4.jpg" 
            lieu="210 US Highway, HighlandLake, FL"
            :favoris="true"
            nbrSDB="2"/>
            <card class="p-4"
            :price="3100" 
            titre="Cover Red" 
            image="/images-maison/maison5.jpg"
            lieu="243 CurlewRoad, PalmHarbor, TX"
            nbrSDB="2"/>
            <card class="p-4"
            :price="4800" 
            titre="Tarpon Bay" 
            image="/images-maison/maison6.jpg"
            lieu="103 Lake Shores, Michigan, IN"
            :favoris="true" 
            nbrSDB="3"/>
        </div>
    </main>
    <footer1 />

</template>

