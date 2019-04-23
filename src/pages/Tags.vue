<template>
  <v-layout row wrap>
    <v-flex>
      <div class="txt--main-title">
        Tags
      </div>
      <v-layout row wrap>
        <v-flex xs4 v-for="x in [1,1,1,1,1,1,1,1,1,1,1,1,1]" :key="x">
          <div class="tag--card">
            <app-tag/>
            x 120000
            <div class="description">
              884 asked today, 5278 this week
            </div>
          </div>
        </v-flex>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>
import { ListLoader } from 'vue-content-loader'
import AppTag from '@/components/Tag'

export default {
  components: {
    ListLoader,
    AppTag
  }
}
</script>

<style>
  .tag--card {
    padding: 12px;
    background: white;
    box-shadow: 0 2px 3px 0 lightgray;
    margin: 12px;
  }

  .description {
    color: gray;
    margin-top: 8px;
  }
</style>
