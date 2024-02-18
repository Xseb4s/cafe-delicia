import menu from "@/json/menu.json";
import Link from "next/link";
import ScrollLink from "@/components/scroll-smooth/page";
import { useState } from "react";

const List = (isTop: boolean) => {
    const [selectedItem, setSelectedItem] = useState(menu[0].title);
    if (isTop) {
        return [menu[0], menu[7]].map((item, i) => (
            <li key={i} className={item.title === selectedItem ? 'text-yellow-600' : 'text-gray-400'}>
                <Link href={item.href} onClick={() => setSelectedItem(item.title)}>{item.title}</Link>
            </li>
        ));
    } else {
        return menu.map((item, i) => (
            <li key={i}><ScrollLink href={item.href}>{item.title}</ScrollLink></li>
        ));
    }
};
export default List