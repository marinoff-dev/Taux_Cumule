import { Calculator, LucideIcon, ClipboardList, LayoutDashboard, BadgePercent } from "lucide-react";
import { NavLink } from "react-router-dom";

type NavProps = {
	id: string;
	name: string;
	to: string;
	icon: LucideIcon;
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
	}, 
	{
		id: 'tarifs',
		name: 'Liste des tarifs',
		to: "/tarifs",
		icon: ClipboardList,
	},
	
	
]

const NavMenu = () => {
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
					<li key={menu.id} className="flex ml-2 gap-4 py-3 items-center cursor-pointer">
						<NavLink to={menu.to} className={({isActive}) => `flex gap-4 p-3 items-center hover:text-primary hover:bg-muted ${isActive ? "text-primary bg-muted" : undefined }`}>
							<menu.icon className="size-4" />
							<span>{menu.name}</span>
						</NavLink>
						
					</li>
				))

				}
			</ul>
		</nav>
	  </div>
	</div>
  )
}

export default NavMenu
