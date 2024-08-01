import CryptoJS from "crypto-js"

function encryptData(data:any, key:string) {
  data = JSON.stringify(data)
  const encrypted = CryptoJS.AES.encrypt(data, key)
  return encrypted.toString()
}

function decryptData(data:any, key:string) {
  const decryptedData = CryptoJS.AES.decrypt(data, key)
  return JSON.parse(decryptedData.toString(CryptoJS.enc.Utf8))
}

const functions = {
  encryptData,
  decryptData
}

export default functions