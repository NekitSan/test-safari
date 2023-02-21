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
    },
    generate: {
      fallback: "404.html",
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
      script: [
        {
          src: "https://www.googletagmanager.com/gtag/js?id=G-CR726YQ76L",
        },
        {
          innerHTML: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag("js", new Date());
          gtag("config", "G-CR726YQ76L");
          `,
        },
      ],
      __dangerouslyDisableSanitizers: ["script"],
    },
    plugins: [],
    modules: [],
    
    build: { extend(config, ctx) {} },
}