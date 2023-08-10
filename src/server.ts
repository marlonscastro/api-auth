import app from './app'

const server = app.listen(8080, () => {
    console.log("server is running..");
})

process.on('SIGINT', (err) => {
    console.log('o server foi finalizado')
    server.close()
    process.exit(err ? 1: 0)
})
