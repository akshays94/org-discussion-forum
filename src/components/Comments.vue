<template>
  <div class="comments">
    <div class="comment" v-for="c in comments" :key="c">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, iure. Dolor adipisci magnam qui laboriosam minus, magni non impedit vitae tempore sint explicabo, quisquam numquam illum, assumenda voluptas sit vero! <span class="commentor" title="score: 120"> - <a href="">Avinash Pundhir</a> 5 mins ago</span>
    </div>
    <div class="comment" style="text-align: center;">
      <a href="#">Show more <b>8 comments</b></a>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      comments: [1, 2, 43, 44]
    }
  }
}
</script>

<style scoped>
  .comment {
    background: #fafafa;
    padding: 8px;
    font-size: 0.9em;
    border: 1px solid lightgray;
    border-bottom: 0;
  }

  .comment:last-child {
    border-bottom: 1px solid lightgray;
  }
</style>
