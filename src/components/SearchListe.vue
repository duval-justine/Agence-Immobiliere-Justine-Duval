<script>import flechebas from "../components/icones/FlecheBas.vue"
export default {
    components: {flechebas}
}
</script>

<template>
        <div class="flex items-center">
            <input 
            type="search"
            placeholder="Search with Search Bar"
            class=" w-full h-12 px-4 border-2 rounded-m border-indigo-100 placeholder:text-xs "/>
            <flechebas class="p-1 -ml-8"/>
        </div>
    
</template>
