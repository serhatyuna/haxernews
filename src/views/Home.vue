<template>
  <main class="home">
    <div class="story" v-for="story in stories" :key="story">
      <h2>{{ story.data.title }}</h2>
      <p>{{ story.data.url }}</p>
      <p>Comments: {{ story.data.descendants }}</p>
      <p>Score: {{ story.data.score }}</p>
      {{ story }}
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
    // https://hacker-news.firebaseio.com/v0/topstories.json
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

<style scoped></style>
