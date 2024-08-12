//mongodb+srv://umesh:<password>@login.18nh6.mongodb.net/?retryWrites=true&w=majority&appName=login

const express = require('express')
const connectDB = require('./db.js')
const itemModel = require('./models/Item.js')
const cors = require('cors')


const app = express()
app.use(express.json())
app.use(cors())
connectDB()

app.get('/', async (req, res) => {
    const response = await itemModel.find()
    return res.json({items : response})

})


app.listen(3000, () => {
    console.log("app is running");
})