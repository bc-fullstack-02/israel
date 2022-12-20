import { InputHTMLAttributes, ReactNode } from 'react';
import  Slot  from "@radix-ui/react-dialog";


interface TextInputRootProps {
    children: ReactNode
}
function TextInputRoot(props: TextInputRootProps) {
    return (
        <div className='flex items-center gap-3 h-12 py-4 px-3 rounded bg-green-300 focus-within:ring-2 ring-orange-300 w-full'>
            {props.children}
        </div>
    )
}

interface TextInputIconProps {
    children: ReactNode
}
function TextInputIcon(props: TextInputIconProps) {
    
}



interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement> {
    placeholder?: string
}
function TextInputInput(props: TextInputInputProps) {
    return (
        <input className='bg-transparent flex-1 text-green-800 text-xs placeholder:text-green-800 outline-none'
            {...props}
        />
    )
}


export const TextInput = {
    Root: TextInputRoot,
    Input: TextInputInput,
    Icon: TextInputIcon,
};