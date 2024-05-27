import React, { useState } from "react";
import { Calculator, LucideIcon, ClipboardList, LayoutDashboard, BadgePercent, ChevronDown, ChevronUp } from "lucide-react";
import { NavLink } from "react-router-dom";

type SubMenu = {
    id: string;
    name: string;
    to: string;
}

type NavProps = {
    id: string;
    name: string;
    to: string;
    icon: LucideIcon;
    subMenus?: NavProps[];
}

const menus: NavProps[] = [
    {
        id: 'dashboard',
        name: 'Tableau de bord',
        to: "/home",
        icon: LayoutDashboard,
    },
    {
        id: 'calcul',
        name: 'Calcul de taux',
        to: "/calcul_taux",
        icon: Calculator,
        subMenus: [
            {
                id: 'option1',
                name: 'Pays Tiers',
                to: '/calcul_taux/pays_tiers',
                icon: Calculator,
            },
            {
                id: 'option2',
                name: 'CEDEAO',
                to: '/calcul_taux/cedeao',
                icon: Calculator,
            },
			{
                id: 'option2',
                name: 'UEMOA',
                to: '/calcul_taux/uemoa',
                icon: Calculator,
            },
        ],
    },
    {
        id: 'tarifs',
        name: 'Liste des positions',
        to: "/tarifs",
        icon: ClipboardList,
    },
];

const NavMenu = () => {
    const [openMenu, setOpenMenu] = useState<string | null>(null);

    const handleMenuClick = (menuId: string) => {
        if (openMenu === menuId) {
            setOpenMenu(null);
        } else {
            setOpenMenu(menuId);
        }
    };

    return (
        <div className="flex flex-col h-full max-h-screen">
            <div className="flex h-14 items-center gap-4 border-b px-4 lg:h- [60px] lg:px-6">
                <BadgePercent className="size-6" />
                <span>Tarifs Douaniers</span>
            </div>

            <div className="flex-1">
                <nav>
                    <ul className="w-full">
                        {menus.map((menu) => (
                            <li key={menu.id} className="ml-2 py-3">
                                {menu.subMenus ? (
                                    <div>
                                        <div
                                            onClick={() => handleMenuClick(menu.id)}
                                            className="flex items-center justify-between gap-4 p-3 hover:text-primary hover:bg-muted cursor-pointer"
                                        >
                                            <div className="flex items-center gap-4">
                                                <menu.icon className="size-4" />
                                                <span>{menu.name}</span>
                                            </div>
                                            {openMenu === menu.id ? <ChevronUp className="size-4" /> : <ChevronDown className="size-4" />}
                                        </div>
                                        {openMenu === menu.id && (
                                            <ul>
                                                {menu.subMenus.map((subMenu) => (
                                                    <li key={subMenu.id} className="ml-8 py-2">
                                                        <NavLink
                                                            to={subMenu.to}
                                                            className="flex items-center gap-2 p-2 hover:text-primary hover:bg-muted"
                                                        >
                                                            <span>{subMenu.name}</span>
                                                        </NavLink>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                ) : (
                                    <NavLink
                                        to={menu.to}
                                        className="flex items-center gap-4 p-3 hover:text-primary hover:bg-muted"
                                    >
                                        <menu.icon className="size-4" />
                                        <span>{menu.name}</span>
                                    </NavLink>
                                )}
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default NavMenu;
