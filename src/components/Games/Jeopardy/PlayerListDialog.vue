<template>

  <q-dialog v-model="dialog" seamless class="" position="bottom">
    <div class="playerlist-box">
      <player-card v-for="player of players" :key="player.name" :player="player" editable opaque/>
    </div>
  </q-dialog>
</template>

<style scoped>
.playerlist-box {
  display: grid;
  min-height: 5em;
  max-height: auto;
  min-width: 80vw;
  padding: 1em;
  grid-template-columns: repeat(8, auto);
  grid-template-rows: repeat(auto-fit, auto);
  place-items: center;
  gap: 1em;
}
</style>

<script>
import PlayerCard from './PlayerCard'

export default {
  name: 'PlayerList',
  data () {
    return {
      dialog: true,
      players: [
        { score: 1, name: 'belle' },
        { score: 2, name: 'jackson' },
        { score: 3, name: 'rhys' },
        { score: 4, name: 'ryan' },
        { score: 999, name: 'zac' },
        { score: 600, name: 'Oscar' },
        { score: 7, name: 'bree' },
        { score: 8, name: 'Jack' }
      ],
      topic: {
        name: 'Test'
      }
    }
  },
  methods: {
    select: function (question) {
      console.log(question)
    }
  },
  components: {
    PlayerCard
  },
  props: {
    editable: {
      type: Boolean,
      default: () => false
    }
  }
}
</script>
