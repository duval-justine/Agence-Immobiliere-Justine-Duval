<template>
    <div class="flex items-center lg:hidden mt-8">
        <input class="w-full h-16 px-4 border-2 rounded-lg border-indigo-100 placeholder:text-xs lg:" 
        type="=search" 
        placeholder="Search Location"/>
        <Search class="p-1 -ml-14"/>
    </div>
    <div class="w-full h-24 px-4 gap-4 hidden items-center border-2 rounded-lg border-indigo-100 lg:flex mt-8 bg-white">
        <div class="w-1/2 min-w-max px-4 border-gray-300 border-r-2">
            <span class="font-inter text-base text-gray-900">Location</span>
            <p class="font-inter text-lg font-bold">New York, USA</p>
        </div>
         <div class="w-1/2 min-w-max px-4 border-gray-300 border-r-2">
            <span class="font-inter text-base text-gray-900">When</span>
            <p class="font-inter text-lg font-bold">Select Move-in Date</p>
        </div>
         <div class="w-1/2 min-w-max px-4 border-gray-300 border-r-2">
            <span class="font-inter text-base text-gray-900">Price</span>
            <p class="font-inter text-lg font-bold">$500-$2,500</p>
        </div>
        <div class="flex items-center justify-center w-1/2">
            <p class="px-6 py-3 font-inter text-center text-indigo-100 bg-indigo-600 rounded-lg">Search</p>
        </div>
    </div>
</template>
<script>
import Search from './icones/Search.vue'
export default {
    components : { Search }
}
</script>
