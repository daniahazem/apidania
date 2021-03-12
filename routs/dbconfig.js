const sql = require('mssql')
console.log("-----------------------")
const config = {
    user: 'DB_A19465_Pro_admin',
    password: 'Ahmed@123',
    server: 'SQL5101.site4now.net',
    database: 'DB_A19465_Pro',
    "pool": {
        "max": 10,
        "min": 0,
        "idleTimeoutMillis": 6000000
    },
    Options: {  
        encrypt: true,
        enableArithAbort: true,
       instancname:"SQL5101.site4now.net",
      }, 

      port : 1433
    }
    
 


    module.exports=config;
    
    