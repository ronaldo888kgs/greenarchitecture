/*
Project : Cryptotrades
FileName :  config.js
Author : LinkWell
File Created : 21/07/2021
CopyRights : LinkWell
Purpose : This is the file which maintain globl variable for the application
db: {
      host: 'localhost',
      port: 27017,
      username: '',
      password: '',
      name: 'nftmarketplace',
      prefix:'linkwell_'
    },
*/
const config = {
    app: {
      port: 5002
    },
    db: {
      host: 'uqmajkwtyshxo0hm7t0v:OfRAuw0s1dpAZflI7wHi@bdwugk1hgf3pnda-mongodb.services.clever-cloud.com',
      port: 27017,
      username: '',
      password: '',
      name: 'bdwugk1hgf3pnda',
      prefix:'linkwell_'
    },
    mail: {
      type:"",
      smtp: {
        host: 'smtpout.secureserver.net',
        port: 465,
        secure:false,
        username:'',
        password:''
      }

    },
    site_name:'Cryptotrades',
    site_link:'#',
    site_email: 'trustbusiness2021@gmail.com',
    secret_key:'jfVRtwN7xBl7LjRucIUdPnrh1UVUhzhZ',
    public_key:'6gluXXunc77uukLJbSmlQ31ckSlLq8Qi',
    eth_http: "https://rinkeby.infura.io/v3/64fa77a39b9a4c31b186fb2148edff70",
   };
   
   
module.exports = config;