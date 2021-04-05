<template>
  <div id="q-app">
    <router-view />
  </div>
</template>
<script>
import axios from 'axios'

export default {
  name: 'App',
  created () {
    axios.defaults.baseURL = 'http://192.168.56.101:3000'
    this.$store.commit('jeopardy/getUserFromCookie')
  }
}
</script>
