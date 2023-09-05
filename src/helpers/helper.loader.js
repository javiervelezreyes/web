
let Resolve = x => x ()
let With    = x => y => y.file === x
let Start   = x => y => y.file.startsWith (x)

function LHelper () {

  async function get () {
    let response = await import.meta.glob ('/**/*.md')
    let handlers = Object.values (response)
    let promises = Promise.all   (handlers.map (Resolve))
    let mdata    = await promises
    return mdata
  }

  async function load (path) {
    let response = await get ()
    let mdata    = response.find (With (path))
    return mdata
  }

  async function loadAll (path) {
    let response = await get ()
    let mdata    = response.filter (Start (path))
    return mdata
  }

  return { 
    load,
    loadAll
  }

}

export default LHelper ()