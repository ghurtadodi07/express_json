const axios = require('axios')
const settings = require('../config/settings')

const Post2 = function(target,body){
       axios.post(target,body).then(response => {
        resolve(response.data);
      }).catch(error => {
        resolve({estatus: 'error en la peticion Post'});
      })
    ;
  }

const Post = function(target,body){
    return new Promise(resolve => {
      axios.post(target,body).then(response => {
        resolve(response.data);
      }).catch(error => {
        resolve({estatus: 'error en la peticion Post'});
      })
    });
  }