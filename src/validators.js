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
  if (Array.isArray(rawData)) {
    for (let item of rawData) {
      if (item.search(rule) != -1) continue;
      else return false;
    }
    return true;
  } else {
    return rawData.search(rule) != -1;
  }
}

export function email(rawData, rule) {
  if (rawData == undefined) return true;
  // https://www.regular-expressions.info/email.html
  return rawData.search(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,}$/i) != -1;
}

export function min(rawData, rule) {
  if (rawData == undefined || Number.isNaN(rawData)) return true;
  return rawData >= rule;
}

export function max(rawData, rule) {
  if (rawData == undefined || Number.isNaN(rawData)) return true;
  return rawData <= rule;
}

export function minlength(rawData, rule) {
  if (rawData == undefined || rawData == "") return true;
  return rawData.length >= rule;
}

export function maxlength(rawData, rule) {
  if (rawData == undefined || rawData == "") return true;
  return rawData.length <= rule;
}
