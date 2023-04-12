export const encodeToBase64 = (uint8Array) => {
    const arrayBuffer = uint8Array.buffer;
    const dataView = new DataView(arrayBuffer);
    let binaryString = "";
    for (let i = 0; i < dataView.byteLength; i++) {
        binaryString += String.fromCharCode(dataView.getUint8(i));
    }
    return btoa(binaryString);
};

export const decodeFromBase64 = (base64String) => {
    const binaryString = atob(base64String);
    const uint8Array = new Uint8Array(binaryString.length);
    for (let i = 0; i < binaryString.length; i++) {
        uint8Array[i] = binaryString.charCodeAt(i);
    }
    return uint8Array;
};