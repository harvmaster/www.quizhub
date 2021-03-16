<template>
  <q-page class="flex flex-center">
    <img
      alt="Quasar logo"
      src="~assets/quasar-logo-full.svg"
    >
    <q-btn @click="testButton()" />
  </q-page>
</template>

<script>
import axios from 'axios'

export default {
  name: 'PageIndex',
  methods: {
    testButton: async function () {
      const res = await axios.post('http://192.168.56.101:3000/board', {
        board: {
          name: 'test',
          increment: 100
        }
      })
      console.log(res.data)
    }
  }
}
</script>
