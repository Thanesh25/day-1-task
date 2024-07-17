import express from 'express'
import cors from 'cors'
import fs from 'fs'
import {format} from 'date-fns'

const app = express()
app.use = cors()
const PORT = 4000;

app.get('/write', (req,res) => {
    const today = format(new Date(), 'dd-MM-yyyy-HH-mm-ss')
    const filepath =`TimeStamp/${today}`
    fs.writeFileSync(filepath, `${today}`, 'utf8')
     res.status(200).send('File created')
    
})

app.get('/read', (req, res) => {
    const today = format(new Date(), "dd-MM-yyyy-HH-mm-ss");
    const filepath = `TimeStamp/${today}`;
     fs.writeFileSync(filepath, `${today}`, "utf8");
    const data = fs.readFileSync(filepath, 'utf8');
    res.status(200).send(data)
})



app.listen(PORT, () =>{
    console.log('Server is running on port ${PORT}')
})