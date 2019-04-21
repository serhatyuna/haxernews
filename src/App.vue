<template>
  <div id="app">
    <navbar />
    <router-view />
    <foot />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Foot from '@/components/Foot.vue'

export default {
  components: {
    navbar: Navbar,
    foot: Foot
  }
}
</script>

<style lang="scss">
@import './assets/css/global';
</style>
