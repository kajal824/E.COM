import app from './app.js'

app.listen(process.env.PORT, ()=> {
    console.log(`Server Running At Port ${process.env.PORT}`);
})