import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, User } from "lucide-react"
import NavMenu from "./NavMenu"

const Header = () => {
  return (
    <header className="flex h-14 items-center border-b bg-muted/40 px-4 lg:h- [60px] lg:px-6">
      	<Sheet>
			<SheetTrigger asChild>
				<Button variant="outline" className="md:hidden">
					<Menu className="size-5" />
				</Button>
			</SheetTrigger>
			<SheetContent side="left">
				<NavMenu />
			</SheetContent>
		</Sheet>

		<div className="ml-auto">
			<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="outline" size="icon" className="rounded-full">
					<User className="size-5"/>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="w-56" align="end">
				<DropdownMenuItem>My Account</DropdownMenuItem>
				<DropdownMenuSeparator />
				<DropdownMenuItem>Settings</DropdownMenuItem>
				<DropdownMenuSeparator />
				<DropdownMenuItem>Logout</DropdownMenuItem>
				<DropdownMenuSeparator />
			</DropdownMenuContent>
			</DropdownMenu>
		</div>
    </header>
  )
}

export default Header
