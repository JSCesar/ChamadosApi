const { Pool } = require('pg');
const dotenv = require('dotenv');

dotenv.config();

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

pool.on('connect', () => { 
    console.log('Base de dados conectado com sucesso!');
});

pool.on('error', (err) => { console.log('ocorreu um erro:' + err); })

 module.exports = {
     query: (text, params) => pool.query(text, params),
 }