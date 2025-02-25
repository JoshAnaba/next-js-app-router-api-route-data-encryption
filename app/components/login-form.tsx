'use client'
import { useState } from "react";
import { encrypt, decrypt } from "@/app/actions";
interface LoginDataType {
  email: string;
  password: string;
}
const LoginForm = () => {
  const [payload, setPayload] = useState<LoginDataType>({
  email: '',
  password: '',
  });

  const [currentStep, setCurrentStep] = useState<'ENCRYPT' | 'DECRYPT'>('ENCRYPT');
  const [encryptedData, setEncrptedData] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setPayload((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  };
  const handleSubmit = async (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const response = await encrypt(payload);
    setPayload({
      email: '',
      password: '',
    })
    setEncrptedData(response)
    setCurrentStep('DECRYPT');
  };
  const handleSubmit2 = async (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const response = await decrypt(encryptedData);
    setPayload(response)
    setCurrentStep('ENCRYPT');
  };
  return (
    <>
     {currentStep === 'ENCRYPT' ? 
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <p>Data Encryption using Crypto JS + Nextjs API routes</p>
      <input 
      type="email" 
      name="email" 
      placeholder="Email" 
      required  
      value={payload.email}
      className="text-black" 
      onChange={handleChange}
       />
      <input 
      type="password" 
      name="password" 
      placeholder="Password" 
      required
      value={payload.password}
      className="text-black" 
      onChange={handleChange} 
      />
      <button 
      type="submit" 
      className="border border-red p-2"
      >
        Encrypt Data
      </button>
    </form> :  
    <form 
    onSubmit={handleSubmit2} 
    className="flex flex-col gap-4"
    >
        <p 
        className="text-white"
        >
          EncryptedData: {encryptedData}
          </p>
        <button 
        type="submit" 
        className="border border-red p-2"
        >
          Decrypt Data
        </button>
      </form>
      }
     
    </>
  )
}

export default LoginForm
