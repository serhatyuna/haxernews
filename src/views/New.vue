<template>
  <main class="home">
    <div class="container">
      <item
        v-for="story in stories"
        :key="story.data.id"
        :story="story"
        :new="true"
      />
    </div>
  </main>
</template>

<script>
import axios from 'axios'
import Item from '@/components/Item.vue'

export default {
  name: 'home',
  components: {
    item: Item
  },
  data: function() {
    return {
      err: '',
      stories: []
    }
  },
  created: async function() {
    axios
      .get('https://hacker-news.firebaseio.com/v0/newstories.json')
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
