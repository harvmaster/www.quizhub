<template>
  <q-page class="flex flex-center my-body">
    <div class="user-div">
      <div class="inner-container">
        <q-img style="max-width: 75%;" src="https://compote.slate.com/images/697b023b-64a5-49a0-8059-27b963453fb1.gif" img-class="my-img" @click="openAvatarSelect" />
        <q-input class="full-width" label="Username" v-model="$store.state.jeopardy.user.username"/>
      </div>
      <q-btn flat label="save" class="fit dark-button" color="black" rounded />
    </div>
    <avatar-select ref="avatarSelect"/>
  </q-page>
</template>

<style scoped>
.my-body {
background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
background-size: 400% 400%;
animation: gradient 15s ease infinite;
}

.user-div {
width: 30em;
height: 50em;
margin: auto;
padding: 10em 5em 10em 5em;
display: grid;
background-color: rgba(255, 255, 255, 0.2);
border-radius: 2em;
}

.my-img {
  border-radius: 50%;
}

.inner-container {
  display: grid;
  width: 100%;
  place-items: center;
}

.dark-button {
  background-color: rgba(0, 0, 0, 0.1)
}

@keyframes gradient {
0% {
  background-position: 0% 50%;
}
50% {
  background-position: 100% 50%;
}
100% {
  background-position: 0% 50%;
}
}
</style>

<script>
import AvatarSelect from 'src/components/User/AvatarSelect.vue'

export default {
  name: 'UsernameMaker',
  components: {
    AvatarSelect
  },
  methods: {

    openAvatarSelect: function () {
      this.$refs.avatarSelect.toggleVisible()
    }
  }
}
</script>
