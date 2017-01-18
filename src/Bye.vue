<script lang="babel">
export default {
  name: 'Bye',
  data () {
    return {
      msg: 'Bye World!'
    }
  },
  render(h) {
    return <h1 class="bye">{{ msg }}</h1>
  }
}
</script>

<style>
h1.bye {
  color: red;
}
</style>
