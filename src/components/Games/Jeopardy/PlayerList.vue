<template>
  <div class="playerlist-box">
    <player-card v-for="player of players" :key="player.name" :player="player" editable/>
  </div>
</template>

<style lang="scss" scoped>
.playerlist-box {
  display: grid;
  height: 100%;
  width: 100%;
  padding: 1em;
  grid-template-columns: repeat(auto-fit, auto);
  grid-template-rows: repeat(5, calc(20% - 0.75em));
  grid-auto-flow: column;
  place-items: center;
  gap: 1em;
  background-color: $indigo-13;
}
</style>

<script>
import PlayerCard from './PlayerCard'

export default {
  name: 'PlayerList',
  data () {
    return {
      players: [
        { score: 1, name: 'belle' },
        { score: 2, name: 'jackson' },
        { score: 3, name: 'rhys' },
        { score: 4, name: 'ryan' },
        { score: 999, name: 'zac' },
        { score: 600, name: 'Oscar' },
        { score: 7, name: 'bree' },
        { score: 8, name: 'Jack' },
        { score: 696969, name: 'Jesse' }
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
