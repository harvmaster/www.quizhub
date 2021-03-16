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
import * as socketio from '../../../../services/sockets'

export default {
  name: 'PageIndex',
  data () {
    return {

    }
  },
  components: {
    Board,
    PlayerList
  },
  created () {
    // Create web sockets
    console.log('Creating Websocket to join game')
    socketio.sendEvent({
      type: 'join-game',
      data: {
        uuid: this.$store.user.uuid,
        username: this.$store.user.username
      }
    })
    console.log('Joined Game')
    socketio.addEventListener({
      type: 'player-join',
      callback: (msg) => {
        console.log(msg)
      }
    })
    console.log('Created event listener for other players')
  }
}
</script>
