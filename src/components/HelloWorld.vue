<template>
  <div><h1>我是hello</h1></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({

  props: {
    msg: String,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
div{
  h1{
    color: blue;
  }
}
</style>
