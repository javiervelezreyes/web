import { defineConfig } from 'astro/config'

export default defineConfig ({
  outDir   : './release',
  site     : 'https://www.javiervelezreyes.com',
  output   : 'static',
  build    : {
    format : 'file'
  }
})