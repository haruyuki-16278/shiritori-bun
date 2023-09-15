const server = Bun.serve({
  port: 3000,
  async fetch(request) {
    const url = new URL(request.url)

    // serve files
    const file = Bun.file(`public/index.html`)
    if (await file.exists()) {
      return new Response(file)
    } else {
      return new Response('Not Found', {status: 404})
    }
  }
})

console.log(`Listening on localhost:${server.port}`)
