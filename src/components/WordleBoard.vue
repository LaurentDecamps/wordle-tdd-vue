<script setup lang="ts">
import { VICTORY_MESSAGE, DEFEAT_MESSAGE } from '@/settings'
import { ref } from 'vue'

defineProps<{
  wordOfTheDay: string
}>()

const guessInProgress = ref('')
const guessSubmitted = ref('')
</script>

<template>
  <input type="text" v-model="guessInProgress" @keydown.enter="guessSubmitted = guessInProgress" />
  <p
    v-if="guessSubmitted.length > 0"
    v-text="guessSubmitted == wordOfTheDay ? VICTORY_MESSAGE : DEFEAT_MESSAGE"
  />
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
