// import Logger from './logger.mjs' 

/* Under the hood, this is a shortcut for: */
import { default as Logger } from './logger.mjs' 

Logger.info(`${Logger.defaultMessage} printed in blue`)
Logger.error('Some error message printed in red')
