export function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1, str.length);
}

export function snakeCaseToTitleCase(inputString: string) {
  return inputString
    .split("_")
    .map((c, i) => capitalize(c))
    .join(" ");
}