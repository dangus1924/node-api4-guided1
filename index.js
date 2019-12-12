const express = require("express")
// const dontenv = require('dotenv')

// dontenv.config()

const app = express()
const host = "127.0.0.1"
const port = 8080

app.use((req, res, next) => {
	console.log(`[${new Date().toLocaleString()}] ${req.ip} ${req.method} ${req.url}`)
	next()
})

app.get("/", (req, res) => {
	res.json({
		message: "Welcome to our API",
		// this value is now extracted into out enviorment variable,
		// so we can keep it out of or code and our repository
		cohort: process.env.LAMDA_COHORT,
		secret: process.env.SUPER_SECRET_API_KEY
		
	})
})

app.listen(port, host, () => {
	console.log(`Running at http://${host}:${port}`)
})