import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs'
import { App } from './App';

createServer({

  models: {
    transaction: Model,
  },

  seeds(server){
    server.db.loadData({
      transactions:[
        {
          id:1,
          title:'freelanche website',
          type:'deposit',
          category:'dev',
          amount:600,
          createAt: new Date(2019,1,20)
        },
        {
          id:2,
          title:'Aluguel',
          type:'withDraw',
          category:'casa',
          amount:1200,
          createAt: new Date(2019,10,2)
        },
        {
          id:3,
          title:'Leilão do bixo',
          type:'deposit',
          category:'bixo',
          amount:300,
          createAt: new Date(2020,10,20)
        },
        {
          id:4,
          title:'Conta de luz',
          type:'withDraw',
          category:'casa',
          amount:170.90,
          createAt: new Date(2020,1,4)
        }
      ]
    })
  },

  routes() {
    this.namespace = 'api'

    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })

    this.post('/transactions', (schema, request) => {

      const data = JSON.parse(request.requestBody);

      return schema.create('transaction',data)
    })

  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
