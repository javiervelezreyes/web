const TOLERANCE = 30
const CANVAS    = 'canvas'
const CONTEXT   = '2d'
const PREFIX    = '#'
const NONE      = ''
const R         = 'r'
const G         = 'g'
const B         = 'b'

function Helper (from, to) {

  function asColor (hex) {
    hex = hex.replace (PREFIX, NONE)
    let r = parseInt (hex.substring(0, 2), 16)
    let g = parseInt (hex.substring(2, 4), 16)
    let b = parseInt (hex.substring(4, 6), 16)
    return { [R] : r, [G]: g, [B] : b }
  }

  function execute (node) {
    let image  = node
    let canvas = document.createElement (CANVAS)
    let ctx    = canvas.getContext (CONTEXT)
    let fColor = asColor (from)
    let tColor = asColor (to)
  
    image.onload = function () {
        canvas.width  = image.width
        canvas.height = image.height
        ctx.drawImage (image, 0, 0, image.width, image.height)
        let imageData = ctx.getImageData (0, 0, canvas.width, canvas.height)
        let data      = imageData.data
        for (let i = 0; i < data.length; i += 4) {
            let r = data[i]
            let g = data[i + 1]
            let b = data[i + 2]
            if (
                Math.abs (r - fColor[R]) < TOLERANCE &&
                Math.abs (g - fColor[G]) < TOLERANCE &&
                Math.abs (b - fColor[B]) < TOLERANCE
            ) {
                data[i]     = tColor[R]
                data[i + 1] = tColor[G]
                data[i + 2] = tColor[B]
            }
        }
        ctx.putImageData (imageData, 0, 0)
        node.src = canvas.toDataURL ()
    }
    image.complete && image.onload ()
  }

  return { execute }
}

export default Helper

// (function Load () {
//   const READY = 'load'
//   const NODE  = 'img'
//   const FROM  = '#2F8AE0'
//   const TO    = '#0187AE'
  
//   window.addEventListener (READY, function () {
//     let helper = Helper (FROM, TO)
//     let images = document.querySelectorAll (NODE)
//     for (let image of images) {
//       helper.execute (image)
//     }
//   })
// })()
