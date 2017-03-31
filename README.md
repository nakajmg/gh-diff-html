# gh-diff-html

generate GitHub like diff 😋

## example of usage

```js
var fs = require('fs')
var ghDiffHTML = require('gh-diff-html')

var before = `import Vue from 'vue'
const vm = new Vue({
  el: '#app',
  data() {
    message: 'hello!!'
  },
  methods: {
    hello() {
      alert(this.message)
    }
  }
})`

var after = `import Vue from 'vue'
const vm = new Vue({
  el: '#app',
  data() {
    message: 'helloooooooo!!'
  },
  methods: {
    hello() {
      console.log(this.hi)
    }
  },
  computed: {
    hi() {
      return 'hiiiiii!!'
    }
  }
})`

var html = ghDiffHTML(before, after, {
  fileName: 'test.js',
  outputFormat: 'line-by-line' // or 'side-by-side'
})

var HTML = `
<head>
  <link rel="stylesheet" href="./node_modules/diff2html/dist/diff2html.min.css">
  <style>
.d2h-files-diff {
    display: flex;
    height: initial;
}
.d2h-diff-tbody tr:first-of-type {
    display: none;
}
.d2h-diff-tbody>tr>td {
    height: 22px;
}
.d2h-file-side-diff {
    margin-bottom: 0;
}
</style>
</head>
<body>
${html}
</body>
`

fs.writeFileSync('./index.html', HTML)
```

### result

#### line-by-line

![](http://imgur.com/A4fNdb9.png)

#### side-by-side

![](http://imgur.com/hFUYeTT.png)
