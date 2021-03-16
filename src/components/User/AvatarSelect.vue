<template>
  <q-dialog v-model="visible" :fullscreen="$q.platform.is.mobile" class="">
    <div class="question-dialog">
      <div class="dialog-title row justify-center full-width bg-grey-3">
        <p class="text-h3 col-12" style="margin-bottom: 0; text-align: center;" >Select Your Avatar</p>
      </div>

      <div class="search-input" filled>
        <q-input class="" v-model="search" label="search" @input="updateSearchResults"/>
      </div>
      <q-scroll-area
        :thumb-style="thumbStyle"
        :content-style="contentStyle"
        :content-active-style="contentActiveStyle"
        style="height: 100%; width: 100%"
      >
        <div class="avatar-grid">
          <q-img :class="[selected === item.itemurl ? 'selected' : '', 'avatar-img', 'shadow-1', hovered === item.itemurl ? 'saturate' : '']" v-for="item of results" :key="item.itemurl" :ref="item.itemurl" :src="item.media[0].nanogif.url" @mouseover="saturate(item.itemurl)" @mouseout="desaturate()" @click="selected = item.itemurl"/>
        </div>
      </q-scroll-area>
      <div class="navigation">
        <q-btn label="Cancel" class="fit" flat color="negative" @click="toggleVisible" />
        <q-btn label="Confirm" class="fit" flat color="positive" />
      </div>
    </div>
  </q-dialog>
</template>

<style lang="stylus" scoped>
.question-dialog {
  display: grid;
  min-height: 80vh;
  min-width: 40em;
  max-width: 70vw;
  grid-template-rows: 7em 7em auto minmax(0, 10em);
  background-color: $grey-2
  border: 1em;
  border-radius: 4em;
}

.search-input {
  height: auto;
  padding: 1em;
  background-color: $grey-4;
  border-bottom: solid silver 1px;
}

.avatar-grid {
  display: grid;
  height: 100%;
  place-items: center;
  padding: 1em 1.5em 1em 1.5em;
  grid-auto-rows: 7em;
  grid-template-columns: repeat(auto-fill, 7em);
  gap: 0.5em;
}

.question-input {
  padding: 1em;
}

.navigation {
  display: grid;
  height: 100%;
  width: 100%;
  grid-template-columns: auto auto;
  place-items: center
}

.dialog-title {
  padding-top: 1em;
  border-bottom: solid silver 1px;
}

.saturate {
  transform: scale(1.1)
  z-index: 1;
  transition: all 0.1s ease !important;
}

.selected {
  grid-column-end: span 5 !important;
  grid-row-end: span 5 !important;

}

.avatar-img {
  height: 7em;
  width: 7em;
  transition: all 0.5s ease;
}

</style>

<script>
import axios from 'axios'

export default {
  name: 'QuestionDialog',
  data () {
    return {
      search: '',
      results: [],
      visible: false,
      hovered: '',
      selected: '',
      contentStyle: {
        backgroundColor: 'rgba(0,0,0,0.02)',
        color: '#555'
      },

      contentActiveStyle: {
        backgroundColor: '#eee',
        color: 'black'
      },

      thumbStyle: {
        right: '2px',
        borderRadius: '5px',
        backgroundColor: '#027be3',
        width: '5px',
        opacity: 0.75
      }
    }
  },
  methods: {
    saturate: function (ref) {
      this.hovered = ref
      console.log(ref)
    },
    desaturate: function () {
      this.hovered = ''
    },
    select: function (topic, question) {
      if (this.$props.editing) {
        // Open the dialog to create the question
      } else {
        // Bring up the preview page
      }
    },
    toggleVisible: function () {
      this.visible = !this.visible
    },
    updateSearchResults: async function (q) {
      const url = this.search !== '' ? `https://g.tenor.com/v1/search?key=P552PEFH7S3G&q=${this.search}&limit=50` : 'https://g.tenor.com/v1/trending?key=P552PEFH7S3G&limit=50'
      this.results = await axios.get(url).then(res => res.data.results)
    }
  },
  components: {
  },
  props: {
  },
  created () {
    this.updateSearchResults()
  }
}
</script>
