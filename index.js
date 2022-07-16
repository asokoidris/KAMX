const server = require ('./app/routes/index');
const db = require ('./app/config/db');


port = process.env.PORT || 5000;


db()
    .then(() => {
        console.log('mongo_db database is  connected');
    }).catch(error => {
        console.log(error)
    });




server.listen(port, () => {
    console.log(`server running in ${process.env.NODE_ENV} mode on port ${port}`)
})