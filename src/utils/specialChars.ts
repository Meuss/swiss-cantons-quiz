export function normalizeDiacritics(str: string): string {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

export function replaceSpecialChars(str: string): string {
  return str
    .replace(/\./g, "")
    .replace(/ /g, "-")
    .replace(/ô|ö/g, "o")
    .replace(/é|ê|è/g, "e")
    .replace(/ü/g, "u")
    .replace(/â|à/g, "a")
    .replace(/sankt|saint/gi, "st");
}
