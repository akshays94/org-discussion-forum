<template>
  <div class="tag">
    rhombus
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style scoped>
  .tag {
    display: inline-block;
    background: #fafafa;
    padding: 4px 12px;
    border-radius: 5px;
    border: 1px solid lightgray;
    color: gray;
    cursor: pointer;
    text-decoration: underline;
  }

  .tag:hover {
    transform: scale(1.01);
  }
</style>
