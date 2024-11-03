// @ts-ignore
import crypto from "crypto";
// @ts-ignore
import multer from "multer";

import {extname, resolve} from "path";

export default{
    upload(folder: string){
        return{
            storage: multer.diskStorage({
                destination: resolve(__dirname, '..', '..', folder),
                filename: (request: any, file: { originalname: any; }, callback: (arg0: null, arg1: string) => any) => {
                    const fileHash = crypto.randomBytes(16).toString("hex");
                    const fileName = `${fileHash}-${file.originalname}`

                    return callback(null, fileName)
                }
            })
        }
    }
}