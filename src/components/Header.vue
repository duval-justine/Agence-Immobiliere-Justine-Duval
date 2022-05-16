<script>
import Logo from './icones/Logo.vue'
import Navigation from './icones/Navbar.vue'

export default {
    data() {
        return {
            menuOuvert : false,
        };
    },
    components: { Logo, Navigation },
}

</script>

<template>
    <header class=" border-b-2 border-indigo-100 bg-white">
        <div class=" flex justify-between m-6 ">
            <Logo/>
            <button
                class="relative z-50 text-xl"
                aria-haspopup="true"
                aria-controls="menu"
                :aria-expanded="menuOuvert"
                @click="menuOuvert = !menuOuvert">
                <Navigation class="h-5 w-5" />
                <span class="sr-only">Menu</span>
            </button>
        </div>
        <div id="menu" class="fixed inset-0 translate-x-full bg-indigo-200 motion-safe:duration-1000" :class="{'translate-x-0': menuOuvert}">
            <ul class="hidden flex-auto justify-center gap-2 sm:flex">
                <li><router-link to="/">Home</router-link></li>
                <li><router-link to="/">House</router-link></li>
                <li><router-link to="/">Appartements</router-link></li>
            </ul>
        </div>
        
    </header>

</template>
