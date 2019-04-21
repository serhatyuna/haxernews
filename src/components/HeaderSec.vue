<template>
  <header class="Header">
    <div class="container">
      <div class="Header-title">
        <h1>Haxernews</h1>
      </div>
      <nav class="Header-nav">
        <router-link :to="{ path: '/' }">Top</router-link>
        <router-link :to="{ path: '/new' }">New</router-link>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="scss">
h1 {
  font-size: 1.8em;
}

.Header {
  height: 60px;
  background-color: #fbeaff;

  .container {
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
    width: 900px;
  }

  &-title {
    h1 {
      margin: 0;
    }
  }
}
</style>
