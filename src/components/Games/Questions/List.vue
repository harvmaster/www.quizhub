<template>
  <div class="row question-list q-px-md q-py-sm row justify-center">
    <question v-for="question in questions" :key="question.id" :question="question" class="q-my-sm" />
    <add-button v-if="addButton" @click="addQuestion"/>
  </div>
</template>

<style scoped>
.question-list {
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 0.5em;
}
</style>

<script>
import Question from './Card'
import AddButton from '../../AddButton'

export default {
  name: 'QuestionList',
  data () {
    return {

    }
  },
  methods: {
    test: function () {
    },
    addQuestion: function () {
      this.$props.questions.push({ id: this.$props.questions.length, title: '', description: '', image: '' })
    }
  },
  components: {
    Question,
    AddButton
  },
  props: {
    questions: {
      type: Array,
      required: true
    },
    addButton: {
      type: Boolean,
      default: () => false
    }
  }
}
</script>
