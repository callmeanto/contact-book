import mysql from 'mysql2/promise';
import keys from './keys';


const pool = mysql.createPool(keys.database);

pool.getConnection()
    .then(connection => {
        console.log('DB is connected');
    });
    export default pool;