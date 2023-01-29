import express from 'express'
import index from '../server/routes/index.route'
import bodyParser from 'body-parser'
import cors from 'cors'
import morgan from 'morgan'
import path from 'path'

const app = express()
app.use(express.static(path.join(__dirname, '/public')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())
app.use(morgan('dev'))


app.get('/',(req,res)=>{
  res.status(200).sendFile(path.join(__dirname,'public/index.html'))
})

app.use('/api',index)

export default app
