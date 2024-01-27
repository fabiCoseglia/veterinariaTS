import { ChangeEvent } from "react";

type InputType = 'text' | 'email' | 'password' | 'date';

export interface InputFromProps{
    name: string;
    label: string;
    type: InputType;
    placeholder?: string;
    className?: string;
    error?: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const InputForm = ({
    label,
    type,
    placeholder,
    className,
    name,
    error,
    onChange,

}: InputFromProps) => {
  return (
    <div className={`mb-5 ${className}`}>
        <label 
        htmlFor={name}
        className="block text-gray-700 uppercase font-bold"
        >
        {label}
        </label>
        <input
        id={name}
        name={name}
        type={type}
        placeholder= {placeholder}
        className={`border w-full p-2 mt-2 placeholder-gray-400`}
        onChange={onChange}
        />
       <p className={`w-full p-2 mt-2 placeholder-gray-500 ${error ? 'border-red-700' : 'border-gray'}`}>{error}</p>
    </div>
  )
}
