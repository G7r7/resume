export type languages = 'en' | 'fr';

export type Words = string[];

export type Lang<Words> = Record<Words, Record<languages, string>>;
