<template>
  <div class="userinput-tabs">
    <div style="padding-left: 0.5em" class="text-h6 text-grey-2 bg-blue-10">{{ label }}</div>
    <q-tabs
      v-model="panel"
      class="text-grey-2 bg-blue-10"
    >
      <q-tab name="text" icon="mail" label="Text" />
      <q-tab name="image" icon="alarm" label="Image" />
      <q-tab name="video" icon="movie" label="Video" />
    </q-tabs>
    <q-tab-panels v-model="panel" animated class="panel" keep-alive>
      <q-tab-panel name="text">
        <q-input placeholder="Text here"/>
      </q-tab-panel>

      <q-tab-panel name="image" class="image-tab" style="padding-top: 0em">
        <image-upload class="image-upload" url="/upload/" />
        <q-input class="full-width" placeholder="Caption (Optional)" filled />
      </q-tab-panel>

      <q-tab-panel name="video">
        <q-input placeholder="Enter Video URL here" v-model="video.input" @input="getVideoId"/>
        <q-video v-if="video.url.length > 0" :src="video.url" :ratio="16/9"/>
      </q-tab-panel>
    </q-tab-panels>
  </div>
</template>

<style lang="scss" scoped>
p {
  margin: 0.25em 0 0 0.75em;
}

.userinput-tabs {
  border-radius: 1em;
  overflow: hidden;
}

.image-tab {
  display: grid;
  place-items: center;
}

.panel {
  display: grid;
}

.image-upload {
  min-width: 15em;
  min-height: 15em;
  max-height: 20em;
}
</style>

<script>
import ImageUpload from '../ImageUpload.vue'
export default {
  name: '',
  data () {
    return {
      panel: 'text',
      video: {
        url: '',
        input: ''
      },
      uploadtest: {}
    }
  },
  methods: {
    select: function (question) {
      console.log(question)
    },
    getVideoId: function (url) {
      const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
      const match = url.match(regExp)

      const id = (match && match[2].length === 11)
        ? match[2]
        : null

      this.video.url = `https://www.youtube.com/embed/${id}`
    }
  },
  components: {
    ImageUpload
  },
  props: {
    editable: {
      type: Boolean,
      default: () => false
    },
    label: {
      type: String,
      default: () => ''
    }
  }
}
</script>
