import { Injectable } from "@angular/core";
import * as CryptoJS from "crypto-js";

@Injectable({
  providedIn: "root",
})
export class EncryptionService {
  isEncryptionEnabled = false; 
  private secretKey = "your-secret-key"; 


  encrypt(value: String): string {
    const stringValue =
      typeof value === "string" ? value : JSON.stringify(value);
    return CryptoJS.AES.encrypt(stringValue, this.secretKey).toString();
  }


  decrypt(cipherText: string): string {
    try {
      const bytes = CryptoJS.AES.decrypt(cipherText, this.secretKey);
      return bytes.toString(CryptoJS.enc.Utf8);
    } catch (e) {
      return '';
    }
  }
}
