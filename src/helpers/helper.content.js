import Path     from 'node:path'
import * as Web from 'cheerio'
import HLoader  from './helper.loader.js'


const BASE     = 'src/articles/'
const LINE     = '\n'
const WORD     = ' '
const LETTER   = ''
const LINES    = 'p'
const PWD      = '.'

function CHelper () {

  async function MData (resource) {
    let path     = resource.file
    let head     = resource.frontmatter
    let Render   = resource.Content
    let html     = await Html (Render)
    let text     = Text  (html)
    let stats    = Stats (text)
    let short    = Short (text)
    let mdata    = { ...head, stats }
    let content  = { html, text, short }
    return {
      path,
      mdata,
      content,
      head
    }
  }

  async function Html (render) {
    let content = await render ()
    return String (content.props.children)
  }

  function Text (html) {
    let Query = Web.load (html)
    let nodes = Query (LINES)
    let text  = nodes.text ()
    return text
  }

  function Short (text) {
    return function (max) {
      let lines = text
        .substring (0, max)
        .split (WORD)
      lines.pop () 
      return lines.join (WORD)
    }
  }

  function Stats (text) {
    let lines   = text.split (LINE)   .length
    let words   = text.split (WORD)   .length
    let letters = text.split (LETTER) .length
    let time    = (words / 200) | 0 + 1
    return {
      lines,
      words,
      letters,
      time
    }
  }

  async function find (slug) {
    let mdatas = await getAll ()
    let mdata  = mdatas.find (file => file.mdata.slug == slug)
    return mdata
  }

  async function get (path) {
    let rpath    = Path.resolve (BASE, path)
    let resource = await HLoader.load (rpath)
    let mdata    = await MData (resource)
    return mdata
  }

  async function getAll (path) {
    let base      = Path.resolve (BASE, path || PWD)
    let resources = await HLoader.loadAll (base)
    let mdata     = await Promise.all (resources.map (MData))
    return mdata
  }

  return {
    find,
    get,
    getAll
  }

}

export default CHelper ()