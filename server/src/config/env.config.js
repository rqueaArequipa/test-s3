import dotenv from 'dotenv'
dotenv.config()

export const PORT = process.env['PORT_SERVER'];
console.log(PORT)