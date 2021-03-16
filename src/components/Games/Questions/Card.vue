<template>
  <div class="row question-card q-pa-md">
    <image-uploader class="col"/>
    <div class="col-8 q-pa-md items-between column justify-between">
      <div class="row justify-between">
        <q-input class="col-10" v-model="question.title" filled label="Question Title" />
        <div class="col-auto row">
          <q-btn class="self-center" flat icon="settings" round color="white">
            <q-menu auto-close>
              <q-list style="min-width: 100px">
                <q-item clickable @click="deleteQuestion">
                  <q-item-section>Delete Question</q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
        </div>
      </div>
      <q-separator class="q-my-md" />
      <q-splitter
        v-model="splitterModel"
        style="height: auto; overflow: hidden"
      >

      <template v-slot:before>
        <q-tabs
          v-model="answerTab"
          vertical
          class="text-teal"
        >
          <q-tab name="question" icon="mail" label="Question" />
          <q-tab name="answers" icon="alarm" label="Answers" />
        </q-tabs>
      </template>

      <template v-slot:after>
        <q-tab-panels
          v-model="answerTab"
          animated
          swipeable
          vertical
          transition-prev="jump-up"
          transition-next="jump-up"
          style="background-color: rgba(0, 0, 0, 0)"
        >
          <q-tab-panel name="question" class="question-card">
            <q-input v-model="question.body" filled label="Question Body" type="textarea" autogrow />
          </q-tab-panel>

          <q-tab-panel name="answers" class="question-card" style="overflow: auto">
            <q-list>
              <q-item v-for="answer in question.answers" :key="answer.value" >
                <q-item-section>
                  <q-input v-model="question.body" filled label="Question Body" type="textarea" autogrow />
                </q-item-section>
              </q-item>
            </q-list>
            <add-button @click="addAnswer"/>
          </q-tab-panel>
        </q-tab-panels>
      </template>

    </q-splitter>

      <!-- <q-expansion-item expand-separator icon="assessment" label="Answers">
        <q-list>
          <q-item v-for="(answer, index) in question.answers" :key="index">
            <q-item-section>
              <q-input v-model="answer.value" />
            </q-item-section>
          </q-item>
        </q-list>
      </q-expansion-item> -->
    </div>
  </div>
</template>

<style scoped>
.question-card {
  width: 100%;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 0.5em;
  overflow: auto;
}
</style>

<script>
import ImageUploader from '../../ImageUpload'
import AddButton from '../../AddButton'

export default {
  name: 'QuestionCard',
  data () {
    return {
      splitterModel: 20,
      answerTab: 'question'
    }
  },
  methods: {
    test: function () {

    },
    deleteQuestion: function () {
      console.log('Deleted')
    },
    addAnswer: function () {
      this.$props.question.answers.push({ value: '', correct: false })
    }
  },
  components: {
    ImageUploader,
    AddButton
  },
  props: {
    question: {
      type: Object,
      required: true
    },
    showDelete: {
      type: Boolean,
      default: () => false
    }
  }
}
</script>
