import { ReactNode } from "react"
import { Slot } from "@radix-ui/react-slot"
import Text from "../Text"

interface MenuItemProps {
    menuTitle: string;
    children?: ReactNode;
}

function MenuItem(props: MenuItemProps) {
    return (
        <li className="mt-5">
            <div className="flex items-center px-4 rounded-full hover:bg-orange-300 ml-2">
                <Slot className="text-green-400">{props.children}</Slot>
                <Text className="text-green-400 font-extrabold">{props.menuTitle}</Text>
            </div>
        </li>
    );
}

export default MenuItem