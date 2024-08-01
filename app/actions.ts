'use server'
import functions from "@/utils/functions"

const {encryptData, decryptData} = functions

const secretKey = process.env.SECRET_KEY

export async function encrypt (val:any) {
  return encryptData(val, secretKey as string)
}

export async function decrypt (val:any) {
  return decryptData(val, secretKey as string)
}