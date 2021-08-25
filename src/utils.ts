import COLORS from './colors'

export function findColorByName(catalog: string, name: any){
    if(!COLORS[catalog]) return
    if(!name) return COLORS[catalog]
    return COLORS[catalog][name]
}

export function findByColor(catalog: string, color: any){
    if(!COLORS[catalog]) return
    const catalogFound: any = COLORS[catalog]
    const colorRGB = HEXtoRGB(color) 
    let minValue, minColor: any
    for(const color in catalogFound){
        const value = catalogFound[color]
        const rgb = HEXtoRGB(value) 
        const distance = colorDistance(rgb, colorRGB)
        if(!minValue || (distance && minValue > distance)){
            minValue = distance
            minColor = color
        }
    }
    return { name: minColor, value: catalogFound[minColor] }
}

function mix(a: any, b: any, v: any) {
    return (1 - v) * a + v * b;
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
    if(!v1 || !v2) return null
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
