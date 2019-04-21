<template>
  <header class="Header">
    <div class="container">
      <div class="Header-title">
        <h1>
          <router-link :to="{ path: '/' }">Haxernews</router-link>
        </h1>
      </div>
      <nav class="Header-nav">
        |
        <router-link :to="{ path: '/' }">Top</router-link>
        <router-link :to="{ path: '/new' }">New</router-link>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style lang="scss">
h1 {
  font-size: 1.8em;
}

.Header {
  height: 60px;
  background-color: darken(#fbeaff, 5);
  border-bottom: 2px solid #845ec2;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.2);
  margin-bottom: 20px;

  .container {
    height: 100%;
    min-width: 900px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  a {
    text-decoration: none;
    color: lighten(#845ec2, 10);
    transition: color 0.2s;

    &:hover,
    &.router-link-exact-active {
      color: #845ec2;
    }
  }

  &-title {
    h1 {
      margin: 0;
    }
  }

  &-nav {
    margin-left: 20px;
    color: lighten(#845ec2, 10);
    display: flex;
    min-width: 90px;
    justify-content: space-between;
    align-items: center;

    a {
      font-weight: 700;
    }
  }
}
</style>
