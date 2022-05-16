<template>
  <header>
    <header1 />
  </header>

  <RouterView />
</template>

<script>
import header1 from "./components/Header.vue"

export default {
  components: { header1 }
}
</script>