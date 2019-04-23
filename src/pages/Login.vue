<template>
  <div>
    <div class="box" v-if="toLoadLoginBox">
      <v-form>
        <v-text-field
          label="Email"
          v-model="email"
          outline>
        </v-text-field>
        <v-text-field
          label="Password"
          type="password"
          v-model="password"
          outline>
        </v-text-field>
        <v-btn color="primary" @click="login()">Login</v-btn>
      </v-form>
    </div>
    <vue-particles
      color="#dedede"
      :particleOpacity="0.7"
      :particlesNumber="80"
      shapeType="circle"
      :particleSize="4"
      linesColor="#dedede"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="150"
      :moveSpeed="3"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
    >
    </vue-particles>

  </div>
</template>
<script>

import { EventBus } from '../main.js'
import { HTTP } from '../axios.js'

export default {
  data () {
    return {
      email: '',
      password: '',
      toLoadLoginBox: false,
      toStartLoader: false,
      toNavigateToHomePage: false
    }
  },
  watch: {
    toNavigateToHomePage (val) {
      if (val) {
        this.$router.replace(this.$route.query.redirect || '/home')
      }
    },
    toStartLoader (val) {
      if (val) {
        EventBus.$emit('progress-bar-utilities', {
          message: 'Authenticating...',
          color: 'blue',
          toShow: true
        })
        setTimeout(function () {
          EventBus.$emit('progress-bar-utilities', {
            message: 'Authenticating...',
            color: 'blue',
            toShow: false
          })
          this.$router.replace(this.$route.query.redirect || '/home')
        }.bind(this), 2000)
      }
    }
  },
  created () {
    if (localStorage.token) {
      this.toStartLoader = true
    } else {
      this.toStartLoader = false
      this.toLoadLoginBox = true
    }
  },
  methods: {
    login () {
      let domainName = location.host
      let domainUrl = domainName.split('.')
      let currentTenant = domainUrl[0]
      const formData = new FormData()
      formData.append('email', this.email)
      formData.append('password', this.password)
      formData.append('tenant', currentTenant)

      HTTP
        .post('administrator/login/', formData)
        .then((response) => {
          localStorage.token = response.data.token
          HTTP.defaults.headers.common['Authorization'] = `JWT ${localStorage.token}`
          this.toNavigateToHomePage = true
        })
        .catch((error) => {
          alert(error)
        })
    }
  }
}

</script>
<style>
  .box {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    /*transform: translateY(-50%);*/
    padding: 24px;
    /*border: 1px solid;*/
    width: 30%;
    margin: auto;
    background: white;
    border: 1px solid lightgray;
    /*box-shadow: 0 2px 3px 0 gray;*/
  }
</style>
