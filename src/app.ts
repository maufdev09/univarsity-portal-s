import express from 'express'
import globalErrorHandler from './middleware/globalErrorHandler'
import notFound from './middleware/notFound'
import router from './routes'
export const app = express()


app.use(express.json())


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/api/v1', router );


app.use(globalErrorHandler)

app.use(notFound)

