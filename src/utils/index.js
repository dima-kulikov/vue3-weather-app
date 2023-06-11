const PRESSURE_UNIT = 0.750062;

export const capitaLizeFirstLetter = (str) => {
    if(!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export const getPressureMm = (hpa) => {
    return Math.round(hpa * PRESSURE_UNIT)
}

export const getTime = (sec) => {
    return new Date(sec * 1000).toLocaleTimeString("ua-UA", {timeZone: 'Atlantic/Reykjavik'})
}