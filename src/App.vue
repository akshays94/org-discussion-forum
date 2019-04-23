<template>
  <v-app>
    <router-view />
    <div class="global-progress" v-if="toShowGlobalProgress">
      <v-progress-circular
        indeterminate
        :color="progressColor"
        :size="100">
      </v-progress-circular>
      {{ progressMessage }}
    </div>
  </v-app>
</template>
<script>

import { EventBus } from './main.js'
export default {
  data () {
    return {
      toShowGlobalProgress: false,
      progressColor: 'blue',
      progressMessage: ''
    }
  },
  created () {
    EventBus.$on('progress-bar-utilities', data => {
      this.progressColor = data.color
      this.toShowGlobalProgress = data.toShow
      this.progressMessage = data.message
    })
  }
}
</script>
<style>
.global-progress {
  position: absolute;
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
#app {
  font-family: 'Ubuntu', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
}

.txt--main-title {
  font-weight: lighter;
  font-size: 2.3em;
  margin-bottom: 36px;
}

.pri-bg {
  background: #38369A !important;
}

.pri-txt {
  color: white;
}
</style>
