function mix(a: any, b: any, v: any) {
    return (1 - v) * a + v * b;
}

export function HSVtoRGB(H: any, S: any, V: any) {
    const V2 = V * (1 - S);
    const r = ((H >= 0 && H <= 60) || (H >= 300 && H <= 360)) ? V : ((H >= 120 && H <= 240) ? V2 : ((H >= 60 && H <= 120) ? mix(V, V2, (H - 60) / 60) : ((H >= 240 && H <= 300) ? mix(V2, V, (H - 240) / 60) : 0)));
    const g = (H >= 60 && H <= 180) ? V : ((H >= 240 && H <= 360) ? V2 : ((H >= 0 && H <= 60) ? mix(V2, V, H / 60) : ((H >= 180 && H <= 240) ? mix(V, V2, (H - 180) / 60) : 0)));
    const b = (H >= 0 && H <= 120) ? V2 : ((H >= 180 && H <= 300) ? V : ((H >= 120 && H <= 180) ? mix(V2, V, (H - 120) / 60) : ((H >= 300 && H <= 360) ? mix(V, V2, (H - 300) / 60) : 0)));

    return {
        r: Math.round(r * 255),
        g: Math.round(g * 255),
        b: Math.round(b * 255)
    };
}

/**
 * 
 * @param v1 [0, 0, 0],
 * @param v2 
 * @returns 
 */
export function colorDistance(v1: any, v2: any) {
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

export function hashToRGB(string: any) {
    const hash = string.getHashCode();
    const r = (hash & 0xFF0000) >> 16;
    const g = (hash & 0x00FF00) >> 8;
    const b = hash & 0x0000FF;
    return { r, g, b }
}