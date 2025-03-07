const app = require('express')()
const basicAuth = require('express-basic-auth')

app.use(basicAuth({
    users: { admin: '123456' }
}))

app.get("/helloWorld", async (req, res) => {
    res.send(
        "Hello World!"
    )
    
})


app.listen(3000)