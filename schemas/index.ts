import { compileFromFile } from 'json-schema-to-typescript'
import fs from 'fs'

const usage = 'usage: type-maker <config-schema-path> <data-schema-path> <out-dir-path>'

if (process.argv.length != 5) {
    console.log(usage)
    process.exit(1)
}

const configSchemaPath = process.argv[2]
const dataSchemaPath = process.argv[3]
const outDirPath = process.argv[4]

// compile from file
compileFromFile(configSchemaPath)
  .then(ts => fs.writeFileSync(`${outDirPath}/config.d.ts`, ts))

  // compile from file
compileFromFile(dataSchemaPath)
.then(ts => fs.writeFileSync(`${outDirPath}/data.d.ts`, ts))
