const app = require('express')()
const http = require('http').createServer(app)
const io = require('socket.io')(http)
const port = 8000

io.on('connection', socket => {
    socket.on('message',({name, message}) => {
        io.emit('message', {name, message})
    })
})



http.listen(port, function() {
    console.log(`Listening intently on port ${port}.` )
})