function getTimeStr(
  seconds: number,
  unitInSecs: number,
  subunitInSecs: number,
  unitStr: string,
  subunitStr: string
) {
  const quotient = Math.floor(seconds / unitInSecs);

  if (quotient < 1) return null;

  const result = `${quotient}${unitStr}`;
  const timer = seconds % unitInSecs;

  const subUnitTimer =
    subunitInSecs > 0 ? Math.floor(timer / subunitInSecs) : timer;

  if (subUnitTimer > 0) return `${result} ${subUnitTimer}${subunitStr}`;
  return result;
}

export function timeDiffByDates(date1: Date, date2: Date) {
  return timeDiff(
    Math.floor(Math.abs(date2.valueOf() - date1.valueOf()) / 1000)
  );
}

export function timeDiff(seconds: number) {
  seconds = Math.abs(seconds);

  const yearInSecs = 31536000;
  const monthInSecs = 2592000;
  const dayInSecs = 86400;
  const hourInSecs = 3600;
  const minuteInSecs = 60;

  let result = getTimeStr(seconds, yearInSecs, monthInSecs, 'y', 'mo');
  if (result) return result;

  result = getTimeStr(seconds, monthInSecs, dayInSecs, 'mo', 'd');
  if (result) return result;

  result = getTimeStr(seconds, dayInSecs, hourInSecs, 'd', 'h');
  if (result) return result;

  result = getTimeStr(seconds, hourInSecs, minuteInSecs, 'h', 'm');
  if (result) return result;

  result = getTimeStr(seconds, minuteInSecs, 0, 'm', 's');
  if (result) return result;

  return `${seconds}s`;
}

export function getHoursMinsInfo(str: string) {
  const regRes = str.match(/^([\d]+):?([\d]{2})(am|pm)?$/i);
  let hours;
  let mins;
  let amPm;

  if (regRes) {
    hours = Number(regRes[1]);
    mins = Number(regRes[2]);
    amPm = regRes[3]?.toUpperCase();
  } else {
    const regRes = str.match(/^([\d]{1,2})(am|pm)$/i);
    if (!regRes) return null;

    hours = Number(regRes[1]);
    mins = 0;
    amPm = regRes[2].toUpperCase();
  }

  if (hours > 23 || mins > 59) return null;
  if (amPm && (hours === 0 || hours > 12)) return null;

  const hr24 =
    amPm === 'AM'
      ? hours === 12
        ? 0
        : hours
      : amPm === 'PM'
      ? hours === 12
        ? hours
        : hours + 12
      : hours;

  const hr12 = amPm ? hours : hours === 0 || hours === 12 ? 12 : hr24 % 12;
  const amPmFinal = amPm ? amPm : hours >= 12 ? 'PM' : 'AM';

  return {
    hours: hr24,
    minutes: mins,
    hrsMinsFormatted: `${hr12}:${`${mins}`.padStart(2, '0')}${amPmFinal}`,
  };
}

/**
 * Get time in seconds
 * @param timeStr by default, the time passed is in minutes.
 * You can also use different units. Eg. 30s, 30m, 0.5h, 2d
 */
export function getSeconds(timeStr: string) {
  const parsedNumber = Number(timeStr);

  if (!timeStr) return null;

  if (!isNaN(parsedNumber)) return parsedNumber * 60;

  const result = timeStr.match(/(.+)([s|m|h|d])/);
  const number = Number(result?.[1]);
  const symbol = result?.[2];

  if (isNaN(number) || !symbol) return null;

  if (symbol === 's') return number;
  if (symbol === 'm') return number * 60;
  if (symbol === 'h') return number * 3600;
  if (symbol === 'd') return number * 3600 * 24;

  return null;
}
