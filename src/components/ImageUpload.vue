<template>
  <q-uploader class="uploader" url="https://httpbin.org/post" method="POST" flat accept="image/*" auto-upload @uploaded="debug" >
    <template v-slot:header="" />
    <template v-slot:list="scope" style="padding: 0">
      <div class="uploader-add-fix fit">
          <q-img class="fit" :src="scope.queuedFiles.length == 0 ? '/Placeholders/UploadPlaceholder.png' : scope.files[0].__img.src" :ratio="4/3" contain/>
          <q-uploader-add-trigger />
      </div>
    </template>
  </q-uploader>
</template>

<style scoped>
.uploader {
  background-color:transparent;
  border: none;
  box-shadow: none;
}
.uploader-add-fix {
  position: relative;
  margin: 0px;
  padding: 0px;
}
</style>

<script>
export default {
  name: 'ImageUpload',
  data () {
    return {
      image: {}
    }
  },
  methods: {
    debug: function (e) {
      console.log(e)
    }
  }
}
</script>
