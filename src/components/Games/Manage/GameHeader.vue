<template>
  <div class="row game-header q-pa-md">
    <div class="col-8 q-pa-md items-between column justify-between">
      <q-input v-model="game.name" filled label="Gameshow Name" />
      <q-separator class="q-my-md" />
      <q-input v-model="game.description" type="textarea" filled label="Gameshow Description" />
    </div>
    <image-uploader class="col"/>
  </div>
</template>

<style scoped>
.game-header {
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 0.5em;
}
</style>

<script>
import ImageUploader from '../../ImageUpload'

export default {
  name: 'GameHeader',
  data () {
    return {

    }
  },
  methods: {
    test: function () {
      this.$props.game.description = 'test'
    }
  },
  components: {
    ImageUploader
  },
  props: {
    game: {
      type: Object,
      required: true
    }
  }
}
</script>
