export default {
  async fetchPosts({ commit }, url) {
    await this.$axios
      .get(url)
      .then((response) => {
        commit('SET_POSTS', response.data)
      })
      .catch((e) => {
        // eslint-disable-next-line no-console
        console.log(e.response.data)
      })
  },
  async fetchPost({ commit }, postId) {
    await this.$axios
      .get(`/posts/${postId}`)
      .then((response) => {
        commit('SET_POST', response.data)
      })
      .catch((e) => {
        // eslint-disable-next-line no-console
        console.log(e.response.data)
      })
  }
}
