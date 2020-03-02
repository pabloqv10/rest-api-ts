
import * as dotenv from 'dotenv';
dotenv.config()


export default {
  jwtSecret: process.env.JWT_SECRET,
  DB: {
    URI: process.env.MONGODB_URI || 'mongodb://localhost/rest-api-ts',
    USER: process.env.MONGODB_USER,
    PASSWORD: process.env.MONGODB_PASSWORD
  }
}
