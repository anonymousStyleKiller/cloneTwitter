import crypto from "crypto";

export const generateMD5 = (value: string):string =>{
    return crypto.createHash("MD5").update(value).digest("hex");
}