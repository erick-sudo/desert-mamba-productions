export function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1, str.length);
}

export function snakeCaseToTitleCase(inputString: string) {
  return inputString
    .split("_")
    .map((c, i) => capitalize(c))
    .join(" ");
}

export function joinArrays(
  inputString: string,
  delimiter: string,
  highLightClassName?: string
) {
  const result = [];

  const spanner = (str: string, idx: number) => <span key={idx}>{str}</span>;

  const highlight = (str: string, idx: number) => (
    <b key={idx} className={`${highLightClassName}`}>
      {str}
    </b>
  );

  if (!delimiter || !inputString) {
    return [inputString];
  }

  let match = inputString.match(new RegExp(delimiter, "i"));

  if (match) {
    if (!inputString.match(new RegExp(delimiter, "i"))![0]) {
      return [inputString];
    }
  } else {
    return [inputString];
  }

  let prev = 0;
  let index = 0;

  if (inputString.slice(prev, match.index)) {
    index += 1;
    result.push(spanner(inputString.slice(prev, match.index), index));
  }

  do {
    if (match) {
      index += 1;
      result.push(highlight(match[0], index));
    }

    prev += match.index! + match[0].length;

    match = inputString.slice(prev).match(new RegExp(delimiter, "i"));

    if (match) {
      index += 1;
      result.push(spanner(inputString.slice(prev, prev + match.index!), index));
    }
  } while (match);

  if (inputString.slice(prev)) {
    index += 1;
    result.push(spanner(inputString.slice(prev), index));
  }

  return result;
}
