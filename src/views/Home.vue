<template>
  <main class="home">
    <div class="container">
      <div class="story" v-for="(story, id) in stories" :key="id">
        <h2>{{ story.data.title }}</h2>
        <p>
          <router-link :to="{ path: '/story/' + story.data.id }">{{
            story.data.url
          }}</router-link>
        </p>
        <p>Comments: {{ story.data.descendants }}</p>
        <p>Score: {{ story.data.score }}</p>
      </div>
    </div>
  </main>
</template>

<script>
import axios from 'axios'

export default {
  name: 'home',
  data: function() {
    return {
      err: '',
      stories: []
    }
  },
  created: async function() {
    axios
      .get('https://hacker-news.firebaseio.com/v0/topstories.json')
      .then(response => {
        let limitedResponse = response.data.slice(0, 15)
        limitedResponse.forEach(id => {
          axios
            .get('https://hacker-news.firebaseio.com/v0/item/' + id + '.json')
            .then(response => {
              this.stories.push(response)
            })
            .catch(err => {
              this.err = err
            })
        })
      })
      .catch(err => {
        this.err = err
      })
  }
}
</script>

<style scoped>
.container {
  width: 900px;
  margin-left: auto;
  margin-right: auto;
}
</style>
