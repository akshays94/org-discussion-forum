<template>
  <div class="question">
    <div class="question--title">
      How do I check whether a file exists without exceptions, do I check whether a file exists without exceptions?
    </div>
    <div class="question--content">
      <div class="question--content--vote">
        <v-icon
          class="vote-action upvote"
          title="Click to upvote">
          arrow_drop_up
        </v-icon>

        <div class="votes">
          230
        </div>

        <v-icon
          class="vote-action downvote"
          title="Click to downvote">
          arrow_drop_down
        </v-icon>

        <v-icon
          class=""
          title="Click to star this question">
          star
        </v-icon>
      </div>

      <div class="question--content--body">
        <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis illum eum quae ex excepturi quibusdam labore animi, molestias, totam, asperiores praesentium iure fuga cumque veritatis id dolores enim perspiciatis ratione?</div>
        <div>Perspiciatis hic maiores enim ea laborum, asperiores provident ut, magni sint, culpa nesciunt harum illum reiciendis. Alias obcaecati veritatis assumenda modi provident est accusamus reiciendis, repellendus, sed qui tenetur numquam.</div>
        <div>Quae recusandae odio nemo iste, impedit nostrum praesentium molestiae dolores saepe corporis neque, alias minima ea, tempore eius atque rem perferendis officia quo possimus. Asperiores veritatis ducimus non optio odio!</div>
        <div>Ad fuga et dignissimos hic quis, saepe voluptatum a tempora corporis deleniti, labore omnis sapiente facilis vel minima asperiores sunt laboriosam animi nobis, repudiandae reprehenderit illum? Nam, culpa minima quae.</div>
      </div>
    </div>

    <div class="question--tags">
      <app-tag/>
      <app-tag/>
      <app-tag/>
      <app-tag/>
      <app-tag/>
    </div>

    <div class="question--creator">
      <div>
        <a href="#" class="question--action">comment</a>
        <a href="#" class="question--action">share</a>
        <a href="#" class="question--action">flag</a>
      </div>
      <app-creator/>
    </div>

    <app-comments></app-comments>

  </div>
</template>

<script>
import AppTag from '@/components/Tag'
import AppCreator from '@/components/Creator'
import AppComments from '@/components/Comments'

export default {
  components: {
    AppCreator,
    AppComments,
    AppTag
  },
  data () {
    return {

    }
  }
}
</script>

<style scoped>
  .question {
    background: white;
    padding: 24px;
    box-shadow: 0 2px 3px 0 lightgray;
  }

  .question--title {
    /*border: 1px solid pink;*/
    font-size: 1.7em;
    font-weight: lighter;
    margin-bottom: 24px;
  }

  .question--content {
    display: flex;
    margin-bottom: 24px;
  }

  .question--content--vote {
    /*border: 1px solid red;*/
    width: 10%;
    margin-right: 12px;

    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: -22px;
  }

  .question--tags {
    margin-left: 10%;
    margin-bottom: 12px;
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

  .question--content--body {
    /*border: 1px solid blue;*/
    width: 80%;
  }

  .question--creator {
    /*border: 1px solid blue;*/
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    /*flex-direction: row-reverse;*/
    margin-bottom: 24px;
  }

  .question--action {
    margin-right: 4px;
  }
</style>
