<template>
  <h1 class="hello">{{ msg }}</h1>
</template>

<script>
export default {
  name: 'Hello',
  data () {
    return {
      msg: 'Hello World!'
    }
  }
}
</script>

<style>
h1.hello {
  color: blue;
}
</style>
