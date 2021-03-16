<template>
  <div class="q-pa-md">
    <q-btn flat icon="add" size="lg" round @click="clicked"/>
  </div>
</template>

<style scoped>

</style>

<script>
export default {
  name: 'AddButton',
  data () {
    return {

    }
  },
  methods: {
    clicked: function () {
      this.$emit('click')
    }
  }
}
</script>
