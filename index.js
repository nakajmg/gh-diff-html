var diff2html = require('diff2html').Diff2Html
var difflib = require('difflib')
var format = require('util').format

/* https://github.com/rtfpessoa/diff2html#configuration */
var defaultOptions = {
  fileName: '',
  inputFormat: 'diff', // diff || json
  outputFormat: 'line-by-line', // line-by-line || side-by-side
  showFiles: false,
  matching: 'none', // lines || words || none
  synchronisedScroll: false,
  matchWordsThreshold: 0.25,
  matchingMaxComparisons: 2500
}

function ghDiffHTML (beforeString, afterString, options) {
  options = Object.assign({}, defaultOptions, options)
  
  var beforeArray = beforeString.split(/\r\n|\r|\n/)
  var afterArray = afterString.split(/\r\n|\r|\n/)
  var diffArray = difflib.unifiedDiff(beforeArray, afterArray, {
    fromFile: options.fileName,
    toFile: options.fileName
  })

  var diffString = format('diff --git %s %s\n%s',
    options.fileName,
    options.fileName,
    diffArray.join('\n')
  )

  var html = diff2html.getPrettyHtml(diffString, options)
  return html
}

module.exports = ghDiffHTML
