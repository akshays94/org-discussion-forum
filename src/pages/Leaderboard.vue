<template>
  <v-layout>
    <v-flex row wrap>
      <div class="txt--main-title">
        Leaderboard
      </div>
      <v-data-table
        :headers="headers"
        :items="values"
        class="elevation-1"
        :hide-actions="true">
        <template v-slot:items="props">
          <td>
            <a href="">{{ props.item.name }}</a>
          </td>
          <td>{{ props.item.score }}</td>
        </template>
      </v-data-table>
    </v-flex>
  </v-layout>

</template>

<script>
import { ListLoader } from 'vue-content-loader'

export default {
  components: {
    ListLoader
  },
  data () {
    return {
      headers: [
        {
          text: 'Name',
          align: 'left',
          sortable: false,
          value: 'name'
        },
        {
          text: 'Score',
          value: 'score',
          align: 'left',
          sortable: false
        }
      ],
      values: [
        { name: 'Akshay Suresh', score: 1 },
        { name: 'Rajat Bubna', score: 2 },
        { name: 'Sukant Priyadarshi', score: 3 },
        { name: 'Avinash Pundhir', score: 4 },
        { name: 'Rajesh Yogeshwar', score: 5 },
        { name: 'Harshil Jain', score: 6 },
        { name: 'Shashank Yaduvanshi', score: 7 },
        { name: 'Yogendra Pitale', score: 8 },
        { name: 'Kiran Kudale', score: 9 },
        { name: 'Rohit Choudhary', score: 10 },
        { name: 'You', score: 23 }
      ]
    }
  }
}
</script>
