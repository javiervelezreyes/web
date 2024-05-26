const BR    = '\n'
const NL    = ''
const BS    = ' '
const BD    = '  '
const ANY   = '*'
const ALL   = '[^/]*'
const START = '^'
const END   = '$'

function Helper () {

  function When (...paths) {
    return function (path) {
      return paths.map (function (path) {
        return RegExp (START + path.split(ANY).join(ALL) + END)
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