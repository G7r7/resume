import Ajv from "ajv"
import configSchema from "../schemas/config.json"
import dataSchema from "../schemas/data.json"
import fs from "fs"

const usage = 'usage: parser <config-path> <data-path>'

if (process.argv.length != 4) {
    console.log(usage)
    process.exit(1)
}

console.log(process.cwd())

const configPath = process.argv[2]
const dataPath = process.argv[3]

// We read the configuration and data files
let configRaw: string
let dataRaw: string

try {
    configRaw = fs.readFileSync(configPath).toString()
} catch (err) {
    console.log("Can't read config file")
    console.log(err.message)
    process.exit(1)
}

try {
    dataRaw = fs.readFileSync(dataPath).toString()
} catch (err) {
    console.log("Can't read data file")
    console.log(err.message)
    process.exit(1)
}

let config: JSON
let data: JSON

try {
    config = JSON.parse(configRaw)
} catch (error) {
    console.log("Can't parse config file as JSON")
    console.log(error.message)
    process.exit(1)
}

try {
    data = JSON.parse(dataRaw)
} catch (error) {
    console.log("Can't parse data file as JSON")
    console.log(error.message)
    process.exit(1)
}

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