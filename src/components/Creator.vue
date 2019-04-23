<template>
  <div class="creator-box">
    <div class="creator-box--timestamp">
      asked 2 mins ago
    </div>
    <div class="creator-box--meta">
      <img class="creator-dp" src="http://sunrift.com/wp-content/uploads/2014/12/Blake-profile-photo-square.jpg" alt="">
      <div class="creator-details">
        <div class="creator-name">
          <a href="">
            Akshay Suresh
          </a>
        </div>
        <div class="creator-score">
          12
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
  .creator-box {
    border: 1px solid lightgray;
    /*background: lightgray;*/
    padding: 8px;
    padding-right: 32px;
  }

  .creator-box--meta {
    display: flex;
    /*align-items: center;*/
  }

  .creator-dp {
    width: 40px;
    height: 40px;
    margin-right: 8px;
    /*border-radius: 50%;*/
    box-shadow: 0 2px 3px 0 lightgray;
  }

  .creator-box--timestamp {
    margin-bottom: 8px;
  }

  .creator-name {
  }

  .creator-score {
    font-weight: bold;
    color: gray;
  }
</style>
