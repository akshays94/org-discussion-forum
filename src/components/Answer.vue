<template>
  <div class="answer">
    <div class="answer--content">
      <div class="answer--content--vote">
        <v-icon
          class="vote-action upvote"
          title="Click to upvote">
          arrow_drop_up
        </v-icon>

        <div class="votes">
          10
        </div>

        <v-icon
          class="vote-action downvote"
          title="Click to downvote">
          arrow_drop_down
        </v-icon>

        <!-- <v-icon
          class="vote-action"
          title="Click to downvote">
          check_circle
        </v-icon> -->
      </div>

      <div class="answer--content--body">
        <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis illum eum quae ex excepturi quibusdam labore animi, molestias, totam, asperiores praesentium iure fuga cumque veritatis id dolores enim perspiciatis ratione?</div>
        <div>Perspiciatis hic maiores enim ea laborum, asperiores provident ut, magni sint, culpa nesciunt harum illum reiciendis. Alias obcaecati veritatis assumenda modi provident est accusamus reiciendis, repellendus, sed qui tenetur numquam.</div>
        <div>Quae recusandae odio nemo iste, impedit nostrum praesentium molestiae dolores saepe corporis neque, alias minima ea, tempore eius atque rem perferendis officia quo possimus. Asperiores veritatis ducimus non optio odio!</div>
        <div>Ad fuga et dignissimos hic quis, saepe voluptatum a tempora corporis deleniti, labore omnis sapiente facilis vel minima asperiores sunt laboriosam animi nobis, repudiandae reprehenderit illum? Nam, culpa minima quae.</div>
      </div>
    </div>

    <div class="answer--creator">
      <div>
        <a href="#" class="answer--action">comment</a>
        <a href="#" class="answer--action">flag</a>
      </div>
      <app-creator></app-creator>
    </div>

    <app-comments></app-comments>
  </div>
</template>

<script>
import AppCreator from '@/components/Creator'
import AppComments from '@/components/Comments'

export default {
  components: {
    AppCreator,
    AppComments
  },
  data () {
    return {

    }
  }
}
</script>

<style scoped>
  .answer {
    background: white;
    padding: 24px;
    box-shadow: 0 2px 3px 0 lightgray;
    margin-bottom: 32px;
  }

  .answer--title {
    /*border: 1px solid pink;*/
    font-size: 1.7em;
    font-weight: lighter;
    margin-bottom: 24px;
  }

  .answer--content {
    display: flex;
    margin-bottom: 24px;
  }

  .answer--content--vote {
    /*border: 1px solid red;*/
    width: 10%;
    margin-right: 12px;

    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: -22px;
  }

  .vote-action {
    /*border: 1px solid red;*/
    font-size: 5em;
    color: gray !important;
    cursor: pointer;
    transition: color .3s ease-in-out;
  }

  .vote-action.green {
    background: white !important;
    color: green !important;
  }

  .vote-action.red {
    background: white !important;
    color: red !important;
  }

  .votes {
    font-weight: bolder;
    font-size: 1.5em;
    /*color: gray;*/
  }

  .answer--content--body {
    /*border: 1px solid blue;*/
    width: 80%;
  }

  .answer--creator {
    /*border: 1px solid blue;*/
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: 24px;
  }

  .answer--action {
    margin-right: 4px;
  }
</style>
