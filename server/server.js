import express from 'express'
import path from 'path'
import router from './routes/users.js';

const port = process.env.PORT || 3000;

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/users', router)


app.listen(port, ()=> console.log(`sever is running on port ${port}`))