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
      game: {
        players: {
        },
        board: {
          id: '',
          questions: {}
        },
        buzzer: {
          buzzed: [],
          unlocked: false
        },
        state: {
          question: {}
        }
      }

    }
  },
  methods: {
    newPlayer: function (player) {
      this.game.players[player] = {
        score: 0,
        avatar: '',
        connected: true
      }
      this.refreshPlayer(player)
    },
    refreshPlayer: function (player) {
      console.log('Sending request to refresh ' + player)

      // Send request to the server
      // Player = the username of the player being refreshed
      socketio.sendEvent({
        type: 'refresh-player',
        data: {
          uuid: this.$stpre.user.uuid,
          player: player
        }
      })
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

    // Another player joins the game
    socketio.addEventListener({
      type: 'player-join',
      callback: (msg) => {
        if (!this.game.players[msg.player]) this.newPlayer(msg.player)
        else this.reconnectPlayer(msg.player)
      }
    })

    // Another player leaves the game
    socketio.addEventListener({
      type: 'player-leave',
      callback: (msg) => {

      }
    })

    // Another player is updated on the server
    socketio.addEventListener({
      type: 'player-updated',
      callback: (msg) => {
        if (!this.game.players[msg.player.username]) this.newPlayer(msg.player.username)
        this.game.players[msg.player.username] = msg.player
      }
    })

    socketio.addEventListener({
      type: '',
      callback: (msg) => {

      }
    })
    console.log('Created event listener for other players')
  }
}
</script>
