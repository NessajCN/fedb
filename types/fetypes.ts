import type { Locale } from '../i18n-config';
import literals from '../literals/en.json';

export type Literals = typeof literals;

export type Character = {
  chname: string;
  gender: string;
};

export type FEClass = {
  clname: string;
};

export type Weapon = {
  wname: string;
};

export type Bondring = {
  bdname: string;
};

export type FEItem = {
  itemname: string;
};

export type Engraving = {
  egname: string;
};

export type Attribution = {
  title: string;
};
