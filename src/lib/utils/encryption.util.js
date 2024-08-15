import CryptoJS from "crypto-js";

export function encrypt(data) {
    const cipherText = CryptoJS.AES.encrypt(data, process.env.KEY_TO_ENCRYPT).toString();
    return cipherText;
}

export function decrypt(encryptedData) {
    try {

        const bytes = CryptoJS.AES.decrypt(encryptedData, process.env.KEY_TO_ENCRYPT);

    
        const decryptedData = bytes.toString(CryptoJS.enc.Utf8);
        return decryptedData;
       
        
    } catch (error) {
        throw new Error("Error while decrypting PAT.");
    }
}