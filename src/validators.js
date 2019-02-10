export function required(rawData, rule) {
  let result = true;

  if (rule == true) {
    if (rawData == "" || rawData == undefined || Number.isNaN(rawData))
      result = false;
  }

  return result;
}

export function pattern(rawData, rule) {
  if (rawData == undefined) return false;
  if (rawData !== undefined) return rawData.search(pattern) != -1;
}

export function email(rawData, rule) {
  if (rawData == undefined) return true;
  // https://www.regular-expressions.info/email.html
  return rawData.search(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,}$/i) != -1;
}

export function min(rawData, rule) {
  if (rawData == undefined) return true;
  return rawData >= rule;
}

export function max(rawData, rule) {
  if (rawData == undefined) return true;
  return rawData <= rule;
}

export function minlength(rawData, rule) {
  if (rawData == undefined) return true;
  return rawData.length >= rule;
}

export function maxlength(rawData, rule) {
  if (rawData == undefined) return true;
  return rawData.length <= rule;
}
