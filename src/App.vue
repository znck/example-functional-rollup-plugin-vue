<template>
  <div class="app">
    <a href="#" role="button" @click.prevent="what = !what">Toggle</a>

    <greet :what="what" />
  </div>
</template>

<script>
import Greet from './Greet'

export default {
  name: 'RollupPluginVueDemoApp',
  data () {
    return {
      what: true
    }
  },
  components: { Greet }
}
</script>
