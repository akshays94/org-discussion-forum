<template>
  <v-layout row wrap>
    <v-flex>
      <div class="txt--main-title">
        Starred
      </div>
      <app-question-card
        v-for="(question, questionIndex) in questions"
        :key="questionIndex"
        :question="question">
      </app-question-card>
    </v-flex>
  </v-layout>
</template>

<script>
import { ListLoader } from 'vue-content-loader'
import AppQuestionCard from '@/components/QuestionCard'

export default {
  components: {
    ListLoader,
    AppQuestionCard
  },
  data () {
    return {
      questions: [
      ]
    }
  },
  created () {
    let questionsCount = 12
    for (var i = 0; i < questionsCount; i++) {
      this.questions.push({
        title: `Question ${i + 1}`,
        content: 'Hello! Welcome to the discussion forum for Vue.js. This is a great place to introduce a project you\'re working on, get help with something, discuss a plugin or particular technical topic, or just get to know other users . . .',
        votes: 25,
        answers: 1,
        views: 12,
        askedBy: {
          name: 'Akshay Suresh',
          score: 35,
          askedOn: '5 mins ago'
        }
      })
    }
  }
}
</script>

<style>
</style>
