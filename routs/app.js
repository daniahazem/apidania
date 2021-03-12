const express = require('express')
const app = express()
const sql = require('mssql')
let logs = {
    Id: 10,
    Username: 'dania',
    Password: 'ddddd',
}
function myFunc(arg) {
    logs = {
        Id: 7
    }
    console.log(`arg was => ${arg}`);
}

app.get('/test', (req, res) => {

    logs = {
        
    }
    const promiseA = new Promise( (resolutionFunc,rejectionFunc) => {
        setTimeout(myFunc, 1500, 'funky'); 
        resolutionFunc();
    }); 
    // At this point, "promiseA" is already settled.
    promiseA.then( (val) => res.json(logs) );
    console.log("immediate logging");
    
});





app.get('/', (req, res) => {
    const config = require('./dbconfig')
    let logs = {
        Id: 10,
        Username: 'dania',
        Password: 'ddddd',
    }
    console.log(config)
    sql.connect(config).then(() => {
        console.log("query")
        return sql.query`SELECT  * FROM [DB_A19465_Pro].[dbo].[users]`
    }).then(result => {
        console.dir(result)
        logs = result
    }).catch(err => {
        console.log("err ", err)
    })

    sql.on('error', err => {
        console.log("err ", err)

    });

    res.json(logs);
});







const postRoute = require('./routes/posts');
app.use('/posts', postRoute);


const userRoute = require('./routes/users');
app.use('/users', userRoute);


app.listen(3000);
