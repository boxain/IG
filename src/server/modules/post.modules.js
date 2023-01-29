import mysql from 'mysql'
import config from '../../config/config'


const connectionPool = mysql.createPool({
  connectionLimit: 10,
  host: config.MYSQL_HOST,
  user: config.MYSQL_USER,
  password: config.MYSQL_PASS,
  database: config.MYSQL_DATABASE,
  port: config.MYSQL_PORT
})


/* GET selectPosts */
const selectPosts = () => {
  return new Promise((resolve, reject) => {
    connectionPool.getConnection((err, connection) => {
      if (err) {
        console.log('connection err', err)
        reject(err)
      } else {
        connection.query('SELECT * FROM igposts', (err, res) => {
          if (err) {
            console.log('mysql err', err)
            reject(err)
          } else {
            console.log('sucess')
            resolve(res)
          }
          connection.release()
        })
      }
    })
  })
}


/* POST insertPosts */
const insertPosts = (insertValues) => {
  return new Promise((resolve, reject) => {
    connectionPool.getConnection((err, connection) => {
      if (err) {
        console.log('connection err', err)
        reject(err)
      } else {
        insertValues.map((item)=>{
          connection.query('INSERT INTO igposts SET?', insertValues, (err, res) => {
            if (err) {
              console.log('mysql err', err)
              reject(err)
            } else {
              console.log('sucess')
              resolve(res)
            }
          })
        })
        connection.release()
      }
    })
  })
}

export default {selectPosts , insertPosts}
