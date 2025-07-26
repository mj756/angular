import { inject, Injectable } from "@angular/core";
import { EncryptionService } from "./encryption";

@Injectable({
  providedIn: "root",
})
export class StorageService {
  private readonly encryptionService = inject(EncryptionService);

  setInt(key: string, value: number): void {
    if (this.encryptionService.isEncryptionEnabled == true) {
      localStorage.setItem(
        key,
        this.encryptionService.encrypt(value.toString())
      );
    } else {
      localStorage.setItem(key, value.toString());
    }
  }

  getInt(key: string): number {
    let value = localStorage.getItem(key) ?? "0";
    if (value === "0") {
      return 0;
    } else if (this.encryptionService.isEncryptionEnabled == true) {
      return (
        parseInt(
          this.encryptionService.decrypt((value as String).toString())
        ) ?? 0
      );
    } else {
      return value !== null ? parseInt(value, 10) : 0;
    }
  }
  setBool(key: string, value: number): void {
    if (this.encryptionService.isEncryptionEnabled == true) {
      localStorage.setItem(
        key,
        this.encryptionService.encrypt(value.toString())
      );
    } else {
      localStorage.setItem(key, value.toString());
    }
  }

  getBool(key: string): number {
    let value = localStorage.getItem(key) ?? "0";
    if (value === "0") {
      return 0;
    } else if (this.encryptionService.isEncryptionEnabled == true) {
      return (
        parseInt(
          this.encryptionService.decrypt((value as String).toString())
        ) ?? 0
      );
    } else {
      return value !== null ? parseInt(value, 10) : 0;
    }
  }

  setString(key: string, value: string): void {
    if (this.encryptionService.isEncryptionEnabled == true) {
      localStorage.setItem(key, this.encryptionService.encrypt(value));
    } else {
      localStorage.setItem(key, value);
    }
  }

  getString(key: string): string {
    let value = localStorage.getItem(key) ?? "";
    if (value === "0") {
      return "";
    } else if (this.encryptionService.isEncryptionEnabled == true) {
      return this.encryptionService.decrypt((value as String).toString()) ?? "";
    } else {
      return value ?? "";
    }
  }

  remove(key: string): void {
    localStorage.removeItem(key);
  }

  clear(): void {
    localStorage.clear();
  }
}
