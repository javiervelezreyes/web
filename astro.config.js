import { defineConfig } from 'astro/config'
import Helper           from './src/config/config.js'

function Redirects () {
  let refs      = Helper.key ('site.redirects')
  let redirects = {}
  for (let ref of refs) {
    let key  = ref.key ('key')
    let path = ref.key ('path')
    redirects[key] = path
  }
  return redirects
}

export default defineConfig ({
  outDir    : './release',
  publicDir : './public',
  site      : 'https://www.javiervelezreyes.com',
  output    : 'static',
  build     : {
    format  : 'directory'
  },
  markdown: {
    shikiConfig: {
      theme: 'light-plus',
      langs: [],
      wrap: true,
    },
  },
  redirects : Redirects ()
})
