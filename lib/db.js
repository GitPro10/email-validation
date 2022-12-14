import mysql from 'mysql2/promise'

export default async function query({ query, values = [] }) {
  const dbconnection = await mysql.createConnection({
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    // socketPath: "/Applications/XAMPP/xamppfiles/var/mysql/mysql.sock",
  })
  try {
    // console.log("Database", dbconnection)
    const [results] = await dbconnection.execute(query, values)
    dbconnection.end()
    return results
  } catch (error) {
    return { error }
  }
}
