# v-debounce

Debounce directive for Vue2 to debounce input typing. Forked originally from https://github.com/vuejs-tips/v-debounce
Updated to include support for IE.

## Usage

**Template:**

Add an input in your template that uses the directive. For example a search field like this:

```
<input v-model.lazy="term" v-debounce="delay" placeholder="Search for something" />
```

In your script section, customize delay and keep track of when term changes, which in this case is 1 second after input has stopped.

**Script:**

```
<script>
export default {
  name: 'example',
  data () {
    return {
      delay: 1000,
      term: '',
    }
  },
  watch: {
    term () {
      // Do something with search term after it debounced
      console.log(`Search term changed to ${this.term}`)
    }
  },
  directives: {
    debounce
  }
}
</script>
```
