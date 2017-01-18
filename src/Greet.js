import Hello from './Hello.vue'
import Bye from './Bye.vue'

export default {
  functional: true,
  name: 'Gree',
  render(h, c) {
    if (c.props.what) {
      return h(Hello, c.data, c.children)
    } else {
      return h(Bye, c.data, c.children)
    }
  },
  props: {
    what: {
      type: Boolean,
      default: true,
    }
  }
}
