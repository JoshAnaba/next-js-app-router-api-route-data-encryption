'use server'
import functions from "@/utils/functions"

const {encryptData, decryptData} = functions

const encryptionKey = process.env.ENCRYPTION_KEY

export async function encrypt (val:any) {
  return encryptData(val, encryptionKey as string)
}

export async function decrypt (val:any) {
  return decryptData(val, encryptionKey as string)
}