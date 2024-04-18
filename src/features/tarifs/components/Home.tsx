import { Avatar } from "@/components/ui/avatar";
import { Card, CardContent} from "@/components/ui/card";
import { User, Globe, BadgePercent, Plus } from "lucide-react";

const Home = () => {
  return (
    <>
		<div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-4">
	 
			<Card className="shadow-sm max-w-sm cursor-pointer hover:scale-105">
				<CardContent className="p-4">
					<div className="flex items-center gap-4">
						<Avatar className="size-6">
							<User />
						</Avatar>
						<div className="grid gap-1">
							<p className="text-lg font-medium">Nombre de personnes enregistrés</p>
							<p className="text-sm text-muted-foreground">01</p>
						</div>
					</div>
			
				</CardContent>
			</Card>
			<Card className="shadow-sm max-w-sm cursor-pointer hover:scale-105">
				<CardContent className="p-4">
					<div className="flex items-center gap-4">
						<Avatar className="size-6">
							<Globe />
						</Avatar>
						<div className="grid gap-1">
							<p className="text-lg font-medium">Nombre d'utilisation de l'application</p>
							<p className="text-sm text-muted-foreground">01</p>
						</div>
					</div>
			
				</CardContent>
			</Card>
			<Card className="shadow-sm max-w-sm cursor-pointer hover:scale-105">
				<CardContent className="p-4">
					<div className="flex items-center gap-4">
						<Avatar className="size-6">
							<BadgePercent />
						</Avatar>
						<div className="grid gap-1">
							<p className="text-lg font-medium">Nombre de tarifs enregistrés</p>
							<p className="text-sm text-muted-foreground">00</p>
						</div>
					</div>
			
				</CardContent>
			</Card>
			<Card className="shadow-sm max-w-sm cursor-pointer hover:scale-105">
				<CardContent className="p-4">
					<div className="flex items-center gap-4">
						<Avatar className="size-6">
							<Plus />
						</Avatar>
						<div className="grid gap-1">
							<p className="text-lg font-medium">Nombre de calculs effectués</p>
							<p className="text-sm text-muted-foreground">00</p>
						</div>
					</div>
			
				</CardContent>
			</Card>
		</div>
  
	</>
  );
};

export default Home;