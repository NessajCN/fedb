import type { Locale } from "../i18n-config";

// We enumerate all literals here for better linting and typescript support
// We also get the default import for cleaner types
const literals = {
  en: () => import("../literals/en.json").then((module) => module.default),
  zh: () => import("../literals/zh.json").then((module) => module.default),
  jp: () => import("../literals/jp.json").then((module) => module.default),
};

const getLiterals = async (locale: Locale) => literals[locale]();

export default getLiterals;
