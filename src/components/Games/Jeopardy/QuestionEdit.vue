<template>
  <q-dialog v-model="isOpen" :fullscreen="!editable" class="">
    <div class="question-dialog">
      <div class="dialog-title row justify-center full-width bg-grey-3">
        <p class="text-h3 col-12" style="margin-bottom: 0; text-align: center;" >{{ question.topic }}</p>
        <p class="text-h6 col-12" style="margin-top: -1em; margin-bottom: 0em; text-align: center;" >{{ question.price }}</p>
      </div>

      <div class="question-input">
        <user-input label="Answer" />
        <q-separator class="q-my-md" />
        <user-input label="Question" />
      </div>
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
  grid-template-rows: 7em auto minmax(0, 10em);
  // background-color: rgb(51, 102, 204);
  background-color: $grey-2
  border: 1em;
  border-radius: 4em;
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
</style>

<script>
import UserInput from './UserInput/UserInput.vue'
export default {
  name: 'QuestionDialog',
  data () {
    return {
      isOpen: false
    }
  },
  methods: {
    select: function (topic, question) {
      if (this.$props.editing) {
        // Open the dialog to create the question
      } else {
        // Bring up the preview page
      }
    },
    toggleVisible: function () {
      this.isOpen = !this.isOpen
    }
  },
  components: {
    UserInput
  },
  props: {
    editable: {
      type: Boolean,
      default: () => false
    },
    host: {
      type: Boolean,
      default: () => false
    },
    question: {
      type: Object,
      default: () => {
        return {
          topic: 'undefined',
          price: 0,
          id: 0
        }
      }
    }
  }
}
</script>
