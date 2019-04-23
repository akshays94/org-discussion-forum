<template>
  <v-layout row wrap>
    <v-flex>
      <app-question/>

      <div class="answers">
        <div class="answers-no">
          {{ answers.length }} Answers
        </div>

        <app-answer v-for="a in answers" :key="a" />
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import AppQuestion from '@/components/Question'
import AppAnswer from '@/components/Answer'

export default {
  components: {
    AppQuestion,
    AppAnswer
  },
  data () {
    return {
      answers: [11, 1, 1, 11]
    }
  }
}
</script>

<style>
  .answers {
    width: 90%;
    margin: auto;
    margin-top: 24px;
  }

  .answers-no {
    font-size: 1.5em;
    margin-bottom: 24px;
  }
</style>
