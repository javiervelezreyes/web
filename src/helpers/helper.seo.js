const BR    = '\n'
const NL    = ''
const BD    = '  '
const ANY   = '*'
const ALL   = '[^/]*'
const START = '^'
const END   = '$'
const SLASH = '/'

function Helper () {

  function When (...exps) {
    return function (path) {
      return exps.map (function (exp) {
        path.endsWith (SLASH) && (path.length > 1) && (path = path.slice (0, -1))
        return RegExp (START + exp.split(ANY).join(ALL) + END)
      }).some (function (exp) {
        return exp.test (path)
      }) 
    }
  }

  function Json (mdata) {
    return JSON.stringify (mdata)
  }

  function Text (text) {
    return text
      .trim ()
      .replaceAll (BR, NL)
      .replaceAll (BD, NL)
  }

  return { 
    When,
    Json,
    Text
  }
}

export default Helper ()