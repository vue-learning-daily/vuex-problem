<template>
</template>

<script>
import { mapGetters } from 'vuex'
import Banner from '@/components/home/Banner.vue'

export default {
  components: {
    Banner
  },
  async fetch({ store }) {
    await store.dispatch('post/fetchPosts', '/posts')
  },
  computed: {
    ...mapGetters({
      posts: 'post/fetchPosts'
    })
  }
}
</script>
