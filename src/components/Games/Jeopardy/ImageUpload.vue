<template>
  <div :class="[containerClass, 'uploader']" @drop.prevent="addFiles" @dragover.prevent @dragenter="toggleDragEffect" @dragleave="toggleDragEffect">
    <q-img contain :src="image.url ? image.url : 'https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?format=jpg&quality=90&v=1530129081'" ratio="1"/>
  </div>
</template>

<style scoped>
.uploader {
  margin: 1em;
}
.highlight-on-drag {
  outline: dashed grey 0.5em;
}
</style>

<script>
import axios from 'axios'

export default {
  name: 'ImageUpload',
  data () {
    return {
      containerClass: {
        'highlight-on-drag': false
      },
      image: {
        file: {},
        url: ''
      }
    }
  },
  methods: {
    debug: function (d) {
      console.log(d)
      console.log(d.dataTransfer.files)
    },
    toggleDragEffect: function (e) {
      this.containerClass['highlight-on-drag'] = !this.containerClass['highlight-on-drag']
    },
    addFiles: function (event) {
      this.toggleDragEffect()
      console.log(event)
      const files = event.dataTransfer.files
      console.log(files)
      if (files.length > 1) {
        this.$q.notify('You can only add a sinlge image')
        console.error('User trying to add too many files')
        return false
      }

      this.image.file = files[0]
      this.image.url = URL.createObjectURL(files[0])

      this.upload()

      // const test1 = {
      //   name: 'test1'
      // }
      // const test2 = test1
      // console.log(test1)
      // test2.name = 'test2'
      // console.log(test1)
      // console.log(test2)
    },
    // Client Side
    upload: async function (files = this.image.file) {
      console.log('uploading')
      console.log(files)
      const form = new FormData()
      form.append('file', files)
      console.log(form)

      if (!files) {
        return false
      }
      console.log('firest error check')

      const res = await axios.post(this.$props.url, form, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).catch(error => {
        console.error(error)
      })
      if (res.status !== 200) {
        console.log()
        return false
      }
    },
    isValidFile: function (file) {
      const regex = new RegExp(this.accepts)
      regex.test(file.type)
    }
  },
  props: {
    accepts: {
      type: String,
      default: () => 'images\/*'
    },
    'auto-upload': {
      type: Boolean,
      default: () => false
    },
    url: {
      type: String,
      default: () => 'https://httpbin.org/post'
    }
  }
}
</script>
