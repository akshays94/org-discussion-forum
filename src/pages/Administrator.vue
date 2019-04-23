<template>
  <v-layout row wrap>
    <v-flex>
    <div class="txt--main-title">
      Administrator
    </div>
    <v-layout row wrap>
      <v-flex xs4>
        <v-card style="margin: 12px; text-align: center; cursor: pointer; color: gray">
          <v-card-text class="px-3">Users</v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs4>
        <v-card style="margin: 12px; text-align: center; cursor: pointer; color: gray">
          <v-card-text class="px-3">Moderators</v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs4>
        <v-card style="margin: 12px; text-align: center; cursor: pointer; color: gray">
          <v-card-text class="px-3">Permissions</v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs4>
        <v-card style="margin: 12px; text-align: center; cursor: pointer; color: gray">
          <v-card-text class="px-3">Flagged items</v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>
import { ListLoader } from 'vue-content-loader'

export default {
  components: {
    ListLoader
  }
}
</script>
