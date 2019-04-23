<template>
  <router-link
    tag="div"
    class="card"
    title="Click to view"
    :to="{ name: 'Question' }">

    <div class="card--main-content">
      <div class="card--stats">
        <div class="card--stat">
          <div class="card--stat--count">
            {{ question.votes }}
          </div>
          <div class="card--stat--title">
            votes
          </div>
        </div>
        <div class="card--stat">
          <div class="card--stat--count">
            {{ question.answers }}
          </div>
          <div class="card--stat--title">
            answers
          </div>
        </div>
        <div class="card--stat">
          <div class="card--stat--count">
            {{ question.views }}
          </div>
          <div class="card--stat--title">
            views
          </div>
        </div>
      </div>
      <div class="card--content">
        <div class="card--title">
          {{ question.title }}
        </div>
        <div class="card--description">
          {{ question.content }}
        </div>
      </div>
    </div>
    <div class="card--creator" style="text-align: right">
      asked {{ question.askedBy.askedOn }} by <span class="asked-by">{{ question.askedBy.name }}</span> <span class="asked-by-score">{{ question.askedBy.score }}</span>
    </div>

  </router-link>
</template>

<script>
export default {
  props: [
    'question'
  ]
}
</script>

<style scoped>
  .card {
    /*border: 1px solid blue;*/
    background: white;
    padding: 18px;
    margin-bottom: 18px;
    box-shadow: 0 2px 3px 0 lightgray;
    cursor: pointer;
    transition: all 0.15s ease-in-out;
  }

  .card--main-content {
    display: flex;
  }

  .card--stats {
    /*border: 1px solid red;*/
    display: flex;
    justify-content: center;
    /*align-items: center;*/
  }

  .card--stat {
    /*border: 1px solid green;*/
    /*padding: 12px;*/
    width: 80px;
    text-align: center;
  }

  .card--stat--count {
    /*color: green;*/
    font-size: 1.4em;
    font-weight: bold;
  }

  .card--stat--title {
    /*color: gray;*/
  }

  .card--content {
    /*border: 1px solid green;*/
    margin-left: 12px;
    margin-bottom: 12px;
  }

  .card--title {
    /*border: 1px solid black;*/
    font-size: 1.4em;
    font-weight: regular;
    margin-bottom: 8px;
  }

  .card--description {
    /*width: 100%;*/
    /*border: 1px solid red;*/
    /*color: gray;*/
  }

  .card--creator {
    /*border: 1px solid blue;*/
  }

  .card:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 8px 0 lightgray;
  }

  .card:last-child {
    margin-bottom: 0;
  }

  .asked-by {
    /*color: darkblue;*/
  }

  .asked-by-score {
    color: gray;
    font-weight: bold;
  }

</style>
