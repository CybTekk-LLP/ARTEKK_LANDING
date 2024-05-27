const hashStringToInt = (str: string) => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash);
        hash = hash & hash; // Convert to 32bit integer
    }
    return hash;
}

const intToRGB = (i: number) => {
    // Extract the RGB components
    let r = (i >> 16) & 0xFF;
    let g = (i >> 8) & 0xFF;
    let b = i & 0xFF;

    // Adjust the values to ensure the colors are light
    r = Math.floor((r + 255) / 2);
    g = Math.floor((g + 255) / 2);
    b = Math.floor((b + 255) / 2);

    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase();
}

export const stringToColor = (str: string) => {
    const hash = hashStringToInt(str);
    return intToRGB(hash);
}

