<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      fixed
      app
      width="350"
      class="nav">
      <app-sidebar></app-sidebar>
    </v-navigation-drawer>

    <v-content>
      <v-container fluid fill-height>
        <router-view />
      </v-container>
    </v-content>

  </div>
</template>

<script>
import AppSidebar from '@/pages/Sidebar'

export default {
  components: {
    AppSidebar
  },
  data () {
    return {
      drawer: null
    }
  }
}
</script>

<style>
</style>
