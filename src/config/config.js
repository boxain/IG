import Joi from 'joi'

// will load vars in .env in PROCESS.ENV
require('dotenv').config()

const envVarSchema = Joi.object().keys({
  NODE_ENV: Joi.string().default('development').valid('development','production'),
  PORT: Joi.number().default(8080),
  VERSION: Joi.string(),
  MYSQL_HOST: Joi.string().default('127.0.0.1'),
  MYSQL_PORT: Joi.number().default(3306) ,
  MYSQL_USER: Joi.string(), 
  MYSQL_PASS: Joi.string(),
  MYSQL_DATABASE : Joi.string()
}).unknown().required()

const {error,value} = envVarSchema.validate(process.env)

if(error){
  throw new Error(`Config validation error: ${error.message}`)
}

const config = {
  NODE_ENV: value.NODE_ENV,
  VERSION: value.VERSION,
  PORT: value.PORT ,
  MYSQL_HOST: value.MYSQL_HOST,
  MYSQL_PORT: value.MYSQL_PORT,
  MYSQL_USER: value.MYSQL_USER,
  MYSQL_PASS: value.MYSQL_PASS,
  MYSQL_DATABASE: value.MYSQL_DATABASE

}

export default config

