<template>
  <q-page class="flex flex-center q-pa-md row">
    <game-header :game="game" class="col-xl-5 col-sm-8 row"/>
    <div class="row justify-center col-sm-10 col-md-12 q-mt-md">
      <q-btn class="col-md-2 col-sm-4" label="Cancel" unelevated rounded color="flat" />
      <q-separator class="q-mx-md" vertical />
      <q-btn class="col-md-2 col-sm-4" label="Save" unelevated rounded color="flat" />
    </div>
    <q-separator class="q-my-md" />
    <div class="col-xl-4 col-sm-9 justify-center row">
      <question-list :questions="questions" :addButton="true" class="" />
    </div>
  </q-page>
</template>

<style scoped>

body {
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
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
import GameHeader from '../../../components/Games/Manage/GameHeader'
import QuestionList from '../../../components/Games/Questions/List'

export default {
  name: 'PageIndex',
  data () {
    return {
      game: {
        name: '',
        description: '',
        image: ''
      },
      questions: [
        { title: 'test 1', id: '0', body: 'Jessica is a young arabian woman', answers: [] },
        { title: 'test 2', id: '1', body: 'Samatha is a young arabian woman', answers: [] },
        { title: 'test 3', id: '2', body: 'June is a young arabian woman', answers: [] }
      ]
    }
  },
  methods: {
    test: function () {
      console.log(this.game.description)
    }
  },
  components: {
    GameHeader,
    QuestionList
  }
}
/*
  Types of questions
  - Boolean questions: Yes or no / Trap or Fap
  - Answer with a number
  - Select option (a ,b ,c, d)
  -
*/
</script>
