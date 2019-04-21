<template>
  <header class="Header">
    <div class="Header-title">
      <h1>Haxernews</h1>
    </div>
    <nav class="Header-nav">
      <router-link :to="{ path: '/' }">Top</router-link>
      <router-link :to="{ path: '/new' }">New</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style>
h1 {
  font-size: 1.8em;
}
</style>
