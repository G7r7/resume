import Ajv from "ajv"
import configSchema from "../schemas/config.json"
import dataSchema from "../schemas/data.json"
import { Data } from "../types/data"
import { Config } from "../types/config"
import config from "../config/config.json"
import data from "../config/data.json"

export function parseConfig(): Config {
    return parseJSONFile(config, configSchema) as Config
}

export function parseData(): Data {
    return parseJSONFile(data, dataSchema) as Data
}

function parseJSONFile(file: object, schema: object): object {

    const parser = new Ajv({allErrors: true})

    const validfile = parser.validate(schema, file)
    if(!validfile) {
        throw new Error(JSON.stringify(parser.errors, null, 2))
    }

    return file
}
