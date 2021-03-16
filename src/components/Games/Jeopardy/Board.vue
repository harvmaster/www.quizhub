<template>
  <div class="board">
    <topic-list @select="select" />
    <topic-list />
    <topic-list />
    <topic-list />
    <topic-list />
    <question-dialog ref="questionDialog" :question="dialog.selected" @updated="updateQuestion" />
  </div>
</template>

<style scoped>
.board {
    display: grid;
    justify-items: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.3);
    grid-template-rows: 100%;
    grid-template-columns: repeat(5, 1fr);
    column-gap: 1em;
    padding: 1em;
}
</style>

<script>
import TopicList from './Topic'
import questionDialog from './QuestionEdit'

export default {
  name: 'JeopardyBoard',
  data () {
    return {
      dialog: {
        isOpen: false,
        selected: {}
      }
    }
  },
  methods: {
    select: function (question) {
      console.log()
      this.$refs.questionDialog.toggleVisible()
      this.dialog.selected = question
    },
    updateQuestion: function (dialog, question) {
      this.dialog.selected = question
    }
  },
  components: {
    TopicList,
    questionDialog
  }
}
</script>
