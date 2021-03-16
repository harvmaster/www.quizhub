<template>

  <div class="topic-box">
    <div class="topic-header shadow-1">
      <div style=" font-size: 3em;" >
        {{ topic.name }}
      </div>
    </div>

    <div class="topic-list">
      <div v-for="question of topic.questions" :key="question.id" class="topic-option shadow-2" @click="select(question)" >
        <div class="topic-price" >
          {{ question.price }}
        </div>
      </div>
    </div>

    <question-dialog v-model="dialog.isOpen" :question="dialog.selected" />
  </div>
</template>

<style lang="scss" scoped>
.topic-box {
  display: grid;
  height: 100%;
  width: 100%;
  grid-template-columns: 100%;
  grid-template-rows: 1fr 5fr;
  row-gap: 1.5em;
}

.topic-header {
  display: grid;
  justify-items: center;
  align-items: center;
  border-radius: 1em;
  font-family: cursive;
  color: white;
  background-color: $indigo-14;
  opacity: 0.75;
}

.topic-header:hover {
  background-color: rgba(255, 255, 255, 1);
  opacity: 1;
  color: black;
  transition: all 0.2s;
}

.topic-list {
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: 100%;
  row-gap: 1em;
}

.topic-option {
  width: 100%;
  height: 100%;
  padding: 1em;
  border-radius: 1em;
  border: black 0.3em;
  background-color: $indigo-13;
  display: grid;
  align-items: center;
  justify-items: center;
}

.topic-option:hover {
  opacity: 1;
  background-color: $grey-4;
  transition: all 0.2s;
}

.topic-price {
  font-size: 5em;
  color: rgb(224,223,36);
  font-family: cursive;
}
</style>

<script>
import questionDialog from './QuestionEdit'

export default {
  name: 'TopicList',
  data () {
    return {
      topic: {
        name: 'Test',
        questions: [
          { id: 1, price: 20 },
          { id: 2, price: 40 },
          { id: 3, price: 60 },
          { id: 4, price: 80 },
          { id: 5, price: 100 }
        ]
      },
      dialog: {
        isOpen: false,
        selected: {}
      }
    }
  },
  methods: {
    select: function (question) {
      if (this.$props.editing) {
        console.log(question)
        const q = {
          price: question.price,
          id: question.id,
          topic: this.topic.name
        }
        this.$emit('select', q)
        // Open the dialog to create the question
      } else {
        // Bring up the preview page
      }
    }
  },
  components: {
    questionDialog
  },
  props: {
    editing: {
      type: Boolean,
      default: () => true
    }
  }
}
</script>
