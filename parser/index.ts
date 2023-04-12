import Ajv from "ajv"
import config from "../config.json"
import data from "../data.json"
import configSchema from "../schemas/config.json"
import dataSchema from "../schemas/data.json"

const parser = new Ajv({allErrors: true})

const validConfig = parser.validate(configSchema, config)
if(!validConfig) {
    console.log('Config errors:')
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    for (const error of parser.errors!) {
        console.log(error)
    }
}

const validData = parser.validate(dataSchema, data)
if(!validData) {
    console.log('Data errors:')
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    for (const error of parser.errors!) {
        console.log(error)
    }
}

if(!validConfig || !validData) {
    process.exit(1)
}