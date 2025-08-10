// Base model
export { default as BaseModel } from './base_model';

// Entity models
export { default as WordModel } from './word/word_model';
export { default as WordMeaningModel } from './word_meaning/word_meaning_model';
export { default as PhrasalVerbModel } from './phrasal_verb/phrasal_verb_model';
export { default as WordFormModel } from './word_form/word_form_model';

// With relations interfaces
export type { WordModelWithRelations } from './word/word_model';
export type { WordMeaningModelWithRelations } from './word_meaning/word_meaning_model';
export type { PhrasalVerbModelWithRelations } from './phrasal_verb/phrasal_verb_model';
export type { WordFormModelWithRelations } from './word_form/word_form_model';
