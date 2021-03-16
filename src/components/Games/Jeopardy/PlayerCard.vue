<template>
  <div :class="$props.opaque ? 'opaque player-card' : 'player-card' ">
    <q-btn v-if="editable" flat round icon="more_vert" class="edit-button" color="white">
      <q-menu
        transition-show="jump-down"
        transition-hide="jump-up"
      >
          <q-list style="min-width: 100px">
            <q-item clickable v-close-popup>
              <q-item-section class="text-red">Remove</q-item-section>
            </q-item>
            <q-item clickable v-close-popup>
              <q-item-section>Leaves</q-item-section>
            </q-item>
            <q-item clickable v-close-popup>
              <q-item-section>Roots</q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-btn>
    <div class="avatar-container">
      <q-avatar >
        <img src="https://i.etsystatic.com/25272370/r/il/46df27/2632905447/il_1140xN.2632905447_e30k.jpg">
      </q-avatar>
    </div>
    <div class="text-h5" >
      {{ player.name }}
    </div>
    <div class="text-h6 player-score">
      <q-btn v-if="editable" icon="add" flat round color="white" @click.shift="incrementScore(250)" @click.left.exact="incrementScore(100)"/>
        <transition
          appear
          enter-active-class="animated bounceIn"
          leave-active-class="animated bounceOut"
        >
          <p v-if="!refreshing" @click="editingScore = !editingScore" style="margin: 0; padding: 0; grid-area: score">
            {{ player.score }}
            <q-popup-edit v-if="editable" v-model.number="player.score" @save="refresh">
                <q-input type="" v-model.number="player.score" dense autofocus color="black" borderless input-style="text-align: center;"/>
              </q-popup-edit>
          </p>
        </transition>
      <q-btn v-if="editable" icon="remove" flat round color="white" @click.shift="decrementScore(250)" @click.left.exact="decrementScore(100)"/>
    </div>
  </div>
</template>

<style scoped>
.player-card {
  display: grid;
  width: 100%;
  height: 100%;
  padding: 1em;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 1em;
  grid-template-rows: auto auto auto;
  grid-template-columns: minmax(60%, auto);
  place-items: center;
  position: relative;
}

.opaque {
  background-color: rgba(70, 50, 255, 1);;
}

.player-avatar {
}

.avatar-container {
  /* width: auto;
  min-width: 30%;
  height: auto; */
  border-radius: 1em;
}

.player-score {
  display: grid;
  width: auto;
  min-width: 50%;
  padding: 0.25em;
  border-radius: 2em;
  color: white;
  background-color: rgba(255, 255, 255, 0.2);
  grid-template-columns: auto minmax(3em, auto) auto;
  grid-template-areas: ". score .";
  place-items: center;
}

.edit-button {
  position:absolute;
  top:0.5em;
  right: 0.5em;
}
</style>

<script>
export default {
  name: 'PlayerCard',
  data () {
    return {
      editingScore: false,
      refreshing: false
    }
  },
  methods: {
    refresh: function () {
      this.refreshing = true
      this.$nextTick(() => {
        this.refreshing = false
      })
    },
    debug: function (t) {
      console.log(t)
    },
    incrementScore: function (value) {
      this.$props.player.score += value
      this.refresh()
    },
    decrementScore: function (value) {
      this.$props.player.score -= value
      this.refresh()
    },
    deletePlayer: async function () {

    }
  },
  props: {
    player: {
      type: Object,
      default: () => {
        return {
          name: '',
          id: 0,
          score: 0,
          avatar: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.etsy.com%2Fie%2Fmarket%2Fpenis_vector&psig=AOvVaw0R1PqWv2NNzcG1KdWaI9aw&ust=1613444353122000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJC5sOTy6u4CFQAAAAAdAAAAABAE'
        }
      }
    },
    score: {
      type: Boolean,
      default: () => true
    },
    editable: {
      type: Boolean,
      default: () => false
    },
    opaque: Boolean,
    default: () => false
  }
}
</script>
