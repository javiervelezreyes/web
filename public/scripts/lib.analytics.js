const SCRIPT = 'script'

function Helper (config) {
  let store  = window.localStorage
  let {host} = config
  let {path} = config
  let {id}   = config
  let {key}  = config

  function ask () {
    return !(key in store)
  }

  function check () {
    let mdata = store.getItem (key)
    let ok    = JSON.parse (mdata)
    return ok
  }

  function accept () {
    store.setItem (key, true)
  }

  function reject () {
    store.setItem (key, false)
  }

  function load () {
    let script = document.createElement (SCRIPT)
    let config = document.createElement (SCRIPT)
    script.src       = `${host}${path}?id=${id}`
    script.async     = true
    config.innerHTML = `
      const JS     = 'js'
      const CONFIG = 'config'
      const ID     = '${id}'
      window.dataLayer = window.dataLayer || []
      function gtag () { dataLayer.push(arguments) }
      gtag (JS, new Date())
      gtag (CONFIG, ID)
    `
    document.head.appendChild (script)    
    document.head.appendChild (config)
  }

  return { 
    ask,
    check,
    accept,
    reject, 
    load
  }

}

export default Helper