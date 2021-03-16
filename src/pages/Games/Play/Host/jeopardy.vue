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
import Board from '../../../../components/Games/Jeopardy/Board'
import PlayerList from '../../../../components/Games/Jeopardy/PlayerList'
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
    // Make sure the user has selected a name, if not: redirect
    if (!this.$store.state.jeopardy.user.username) {
      this.$router.push('/username')
    }

    // Create web sockets
    console.log(this.$store.state.jeopardy)
    console.log('Creating Websocket to join game')
    socketio.sendEvent('join', {
      uuid: this.$store.state.jeopardy.user.uuid,
      username: this.$store.state.jeopardy.user.username,
      lobbyId: 'abcdefg'
    })
    console.log('Joined Game')
    socketio.addEventListener({
      type: 'player-join',
      callback: (msg) => {
        console.log(msg)
      }
    })
    socketio.addEventListener({
      type: 'error',
      callback: (msg) => {
        console.log(msg)
      }
    })
    console.log('Created event listener for other players')
  }
}
</script>
