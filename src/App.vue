<template>
  <div id="app">
    <navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'

export default {
  components: {
    navbar: Navbar
  }
}
</script>

<style>
body {
  font-family: 'Source Sans Pro', sans-serif;
}
</style>
