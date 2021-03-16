<template>
  <q-page class="flex flex-center board-container">
    <player-list />
    <board class="fit" style="grid-area: board"/>
  </q-page>
</template>

<style scoped>
.board-container {
  display: grid;
  grid-template-rows: 100%;
  grid-template-columns: auto 4fr;
  grid-template-areas: '. board';
  align-items: center;
  justify-items: center;
}
</style>

<script>
import Board from '../../components/Games/Jeopardy/Board'
import PlayerList from '../../components/Games/Jeopardy/PlayerList'

export default {
  name: 'PageIndex',
  components: {
    Board,
    PlayerList
  }
}

// ANGEL_SR_1606#9654
// a💗#6104
</script>
