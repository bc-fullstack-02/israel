import { ButtonHTMLAttributes, ReactNode } from 'react';
import { Slot } from "@radix-ui/react-slot";
import { clsx } from 'clsx';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    asChild?: boolean;
    className?: string;
}

function Button({
    children,
    asChild,
    className,
    ...props
}: ButtonProps) {
    const Comp = asChild ? Slot : 'button';
    return (
        <Comp
            className={clsx(
                'py-3 px-4 bg-green-500 rounded font-semibold text-green-800 text-sm w-full transition-colors hover:bg-orange-400 focus:ring-2 ring-white',
                className
            )}
            {...props}
        >
            {children}
        </Comp>);
}

export default Button;