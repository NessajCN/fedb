import { NumberLiteralType } from "typescript";
import type { Locale } from "../i18n-config";
import literals from "../literals/en.json";
import { Dispatch, SetStateAction } from "react";


export type Literals = typeof literals;

export type CharProps = {
  literals: Literals;
  generalStats?: GeneralStats;
  basicStats?: BasicStats;
  combatStats?: CombatStats;
  setGeneralStats?: Dispatch<SetStateAction<GeneralStats | undefined>>;
  setBasicStats?: Dispatch<SetStateAction<BasicStats | undefined>>;
  setCombatStats?: Dispatch<SetStateAction<CombatStats | undefined>>;
  setCharStatBase?: Dispatch<SetStateAction<GeneralStats & BasicStats | undefined>>;
  setClassModifier?: Dispatch<SetStateAction<GeneralStats & BasicStats | undefined>>;
}

export type GeneralStats = {
  lvl: number;
  intnllvl: number;
  hp: number;
  bld: number;
  sp: number;
  mov: number;
};
export type BasicStats = {
  str: number;
  mag: number;
  dex: number;
  spd: number;
  def: number;
  res: number;
  lck: number;
  rating: number;
};
export type CombatStats = {
  phatk: number;
  magatk: number;
  hit: number;
  avo: number;
  crit: number;
  dge: number;
  rng: number;
};

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
