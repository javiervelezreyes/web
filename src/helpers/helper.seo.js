const BR    = '\n'
const NL    = ''
const BD    = '  '
const ANY   = '*'
const ALL   = '[^/]*'
const START = '^'
const END   = '$'
const SEP   = '/'

function Helper () {

  function When (...exps) {
    return function (path) {
      path = Resolve (path)
      return exps.map (function (exp) {
        return RegExp (START + exp.split (ANY).join (ALL) + END)
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

  function Resolve (path) {
    let ok = !path.endsWith (SEP)
    return (
      !ok && path.slice (0, -1) ||
       ok && path
    )
  }

  function Slug (path) {
    return Resolve (path).split (SEP).pop ()
  }

  return { 
    When,
    Json,
    Text,
    Resolve,
    Slug
  }
}

export default Helper ()