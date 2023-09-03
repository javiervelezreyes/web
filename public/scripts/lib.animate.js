function Animate (exp) {
  const ITEM  = exp
  const BEGIN = 'begin'
  const END   = 'end'
  const HIDE  = 'hide'

  function Wait (ms) {
    return new Promise (function (ok) {
      setTimeout (ok, 1000*ms)
    })
  }

  function Set (cls) {
    return function (node) {
      node.classList.remove (BEGIN, END, HIDE)
      node.classList.add    (cls)
    }
  }

  let Begin = Set (BEGIN)
  let End   = Set (END)
  let Hide  = Set (HIDE)

  async function launch (node) {
    Begin (node)
    await Wait (10)
    End   (node)
    await Wait (.9)
    Hide  (node)
  }

  async function start () {
    let items = document.querySelectorAll (ITEM)
    let max    = items.length
    let idx    = 0
    while (true) {
      let item = items[idx]
      await launch (item)
      idx = (idx + 1) % max
    }
  }

  return { start }
}

window.Animate = Animate