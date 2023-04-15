import { compileFromFile } from 'json-schema-to-typescript'
import fs from 'fs'

const usage = 'usage: type-maker <config-schema-path> <data-schema-path>'

if (process.argv.length != 4) {
    console.log(usage)
    process.exit(1)
}

const configSchemaPath = process.argv[2]
const dataSchemaPath = process.argv[3]

// compile from file
compileFromFile(configSchemaPath)
  .then(ts => fs.writeFileSync('types/config.d.ts', ts))

  // compile from file
compileFromFile(dataSchemaPath)
.then(ts => fs.writeFileSync('types/data.d.ts', ts))
