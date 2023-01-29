import config from './config/config'
import app from './config/express'

if(!module.parent){ // ?
  app.listen(config.PORT,()=>{
    console.log(`env: ${config.NODE_ENV} and dir ${__dirname}`);
  })
}

export default app
