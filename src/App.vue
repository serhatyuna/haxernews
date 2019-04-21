<template>
  <div id="app">
    <headerSec />
    <router-view />
  </div>
</template>

<script>
import HeaderSec from '@/components/HeaderSec.vue'

export default {
  components: {
    headerSec: HeaderSec
  }
}
</script>

<style>
body {
  font-family: 'Source Sans Pro', sans-serif;
}
</style>
