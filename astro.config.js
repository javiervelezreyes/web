import { defineConfig } from 'astro/config'

export default defineConfig ({
  outDir    : './release',
  publicDir : './public',
  site      : 'https://www.javiervelezreyes.com',
  output    : 'static',
  build     : {
    format  : 'directory'
  }
})