import { Config } from "./config"

export type Words = string[]

export type Lang<Words> = Record<Words, Record<Config["language"], string>>