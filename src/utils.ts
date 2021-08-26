import COLORS from './colors'

export function findByName(catalog: string, name: any) {
    if (!COLORS[catalog]) return
    if (!name) return COLORS[catalog]
    return COLORS[catalog][name]
}

export function findByColor(catalog: string, color: any) {
    if (!COLORS[catalog]) return
    const catalogFound: any = COLORS[catalog]
    const colorRGB = HEXtoRGB(color)
    let minValue, minColor: any
    for (const color in catalogFound) {
        const value = catalogFound[color]
        const rgb = HEXtoRGB(value)
        const distance = colorDistance(rgb, colorRGB)
        if (!minValue || (distance && minValue > distance)) {
            minValue = distance
            minColor = color
        }
    }
    return { name: minColor, value: catalogFound[minColor] }
}

export function HEXtoRGB(hex: string) {
    hex = hex.replace(/#/g, '');
    if (hex.length === 3) {
        hex = hex.split('').map(function (hex) {
            return hex + hex;
        }).join('');
    }
    var result = /^([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})[\da-z]{0,0}$/i.exec(hex);
    if (result) {
        var red = parseInt(result[1], 16);
        var green = parseInt(result[2], 16);
        var blue = parseInt(result[3], 16);

        return [red, green, blue];
    } else {
        return null;
    }
}

/**
 * 
 * @param v1 [0, 0, 0],
 * @param v2 
 * @returns 
 */
export function colorDistance(v1: any, v2: any) {
    if (!v1 || !v2) return null

    // If colors is a are string, convert to RGB array
    if (typeof v1 === 'string') v1 = HEXtoRGB(v1)
    if (typeof v2 === 'string') v2 = HEXtoRGB(v2)

    // If colors are {r,g,b}, convert o array
    if (v1.r) v1 = [v1.r, v1.g, v1.b]
    if (v2.r) v2 = [v2.r, v2.g, v2.b]

    var i,
        d = 0;

    for (i = 0; i < v1.length; i++) {
        d += (v1[i] - v2[i]) * (v1[i] - v2[i]);
    }
    return Math.sqrt(d);
};

export function groupColors(colors: Array<string>, rangeNumber?: number) {
    
    // Auto calculates size based on colors length
    if (!rangeNumber) {
        const defaultRange = 10
        for (let i = 20; i >= defaultRange; i--) {
            if (colors.length % i === 0) {
                rangeNumber = i
                break
            }
        }
        if (!rangeNumber) {
            rangeNumber = defaultRange
        }
    }
    let distances = []
    const first = colors[0]
    let min, max
    for (let i = 1; i < colors.length; i++) {
        const color = colors[i]
        const distance = colorDistance(first, color)
        if (!distance) continue
        const data: any = { distance, color }
        if (!min || min.distance < distance) min = data
        if (!max || max.distance > distance) max = data
        distances.push(data)
    }

    distances = distances.sort((a, b) => a.distance > b.distance ? 1 : -1).map(a => a.color)

    const range = distances.length / rangeNumber

    const groupedColors = []
    for (let i = 0; i < rangeNumber; i++) {
        const rangeColors = distances.slice(i * range, (i + 1) * range)
        groupedColors.push(rangeColors)
    }
    const total = groupedColors.reduce((acc, val) => acc + val.length, 0)
    if (total !== distances.length) return false
    return groupedColors
}