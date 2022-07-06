# Introduction
Debounce directive for Vue2 to debounce input typing. Forked originally from https://github.com/vuejs-tips/v-debounce
Updated to include support for IE.

# Update
Thanks for all the downloads and we hope v-debounce is useful in your project(s)! The next release of v-debounce has finally arrived, and introduces some changes.

## Version changes and potential breaking changes
v-debounce has a slightly changed code markup compared to earlier. The change is to allow for installing the component globally. See below for how usage has changed.


### 0.12 (Previously)
```
// In your component
import debounce from 'v-debounce'

export default {
  name: 'List',
  directives: {
    debounce
  }
}
```

### 0.2.0 (Current)
```
// In your component
import { directive } from 'v-debounce'

export default {
  name: 'List',
  directives: {
    debounce: directive
  }
}
```

## Install
Install the NPM package:
```
yarn add v-debounce

# or if you prefer to use npm

npm install --save v-debounce
```

And then register the directive in your Vue instance, either globally or locally in a component.

```js
/* --- Install the directive globally --- */
import Vue from 'Vue'
import debounce from 'v-debounce'

Vue.use(debounce)

/* --- Import the directive directly in the component --- */
// In single file component

import { directive } from 'v-debounce'

export default {
  directives: {
    debounce: directive
  }
}
```

## Usage

**Template:**

Add an input in your template that uses the directive. For example a search field like this:

```
<input
  v-model.lazy="term"
  v-debounce="delay"
  placeholder="Search for something"
/>
```

In your script section, customize delay and keep track of when term changes, which in this case is 1 second after input has stopped.

**Script:**

```html
<template>
  <input
    v-model.lazy="term"
    v-debounce="delay"
    placeholder="Search for something"
  />
</template>

<script>
import { directive } from 'v-debounce'

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
    debounce: directive
  }
}
</script>
```

**Report issues:**

https://github.com/coreusa/v-debounce/issues

### License
This repository is licensed under a [MIT license](https://github.com/git/git-scm.com/blob/main/MIT-LICENSE.txt).
