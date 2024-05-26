const STRING = 'string'
const OBJECT = 'object'
const NULL   = 'undefined'
const DOT    = '.'
const REF    = '@'
const ERROR  = 'Access Error - '

let isString    = x => typeof (x)  == STRING
let isObject    = x => typeof (x)  == OBJECT
let isOk        = x => typeof (x) !== NULL
let isKey       = x => !!x.key
let isArray     = x => Array.isArray (x) && !isList (x)
let isList      = x => Array.isArray (x) && x.every (isObject) && x.every (isKey) 
let isSimple    = x => !isObject (x) && !isArray (x) && !isList (x)
let isReference = x => isString (x) && x.startsWith (REF)
let error       = x => console.log (ERROR, x)

let GConfig

function Helper (config) {

  let LConfig
  define (config)

  function asArray (value) {
    return value.map (asType)
  }

  function asList (value) {
    let helper = Helper (value.reduce (function (cfg, item) {
      let {key, ...rest} = item
      let [k,   ...ks]   = Object.keys (rest)
      cfg[key] = ks.length && item || rest[k]
      return cfg
    }, {}))
    function * Iterator () { 
      for (let v of value) yield asType (v) 
    }
    helper[Symbol.iterator] = Iterator
    return helper
  }
  
  function asObject (value) {
    let helper = Helper (value)
    function * Iterator () { 
      let entries = Object.entries (value)
      for (let [key, value] of entries) yield [key, asType (value)]
    }
    helper[Symbol.iterator] = Iterator
    return helper
  }

  function asType (value) {
    return (
      isArray  (value) && asArray  (value) ||
      isList   (value) && asList   (value) ||
      isObject (value) && asObject (value) ||   
      isSimple (value) && value  
    )
  }

  function define (cfg) {
    LConfig = LConfig || {}
    GConfig = GConfig || LConfig
    for (let key in cfg) {
      let value    = cfg[key]
      LConfig[key] = asType (value)
    }
    return this
  } 

  function key (exp) {
    let value = LConfig[exp]
    if (isOk (value)) return resolve (value)
    else {
      let path   = exp.split (DOT)
      let head   = path.pop  ()
      let family = resolve (path.join (DOT))
      let cfg    = GConfig[family]
      if (cfg && head) return cfg.key (head)
      else { 
        error ({ family, head, exp })
      }
    }
  }

  function resolve (value) {
    if (isReference (value)) {
      let exp = value.substring (1)
      let out = key (exp)
      return out
    }
    if (isArray (value)) { 
      return value.map (resolve)
    }
    return value
  }

  function keys () {
    return Object.keys (LConfig)
  }

  return { 
    define, 
    key,
    keys
  }
}


export default Helper ()