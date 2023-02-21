export default {
    mode: "universal",
    experimental: {
      payloadExtraction: false
    },
    process: {
      static: true,
    },
    router: {
      trailingSlash: true,
      base: './',
      mode: 'hash'
    },
    publicPath: 'https://nekitsan.github.io/test-safari/',
    build: {
      publicPath: 'https://nekitsan.github.io/test-safari/',
    },
    generate: {
      fallback: "404.html",
      publicPath: 'https://nekitsan.github.io/test-safari/',
    },
    head: {
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width,initial-scale=1.0" },
      ],
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          sizes: "16x16",
          href: "/favicon.ico",
        },
      ],
    },
    plugins: [],
    modules: [],
}