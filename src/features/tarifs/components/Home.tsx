import { Avatar } from "@/components/ui/avatar";
import { Card, CardContent} from "@/components/ui/card";
import { User, Globe, BadgePercent, Plus } from "lucide-react";

import React, { useState , useEffect } from "react";


import { useGetTarifswByNomenclatureQuery , useGetTauxByNomenclatureQuery, useGetTauxLineaireByNomenclatureQuery } from "@/services/index";


const Home = () => {

	const [value, setValue] = useState<number | undefined>(undefined);
	const [userInput, setUserInput] = useState<string>("");


	const [counter, setCounter] = useState<number>(0);

	const { data: tauxData , isError} = useGetTauxByNomenclatureQuery(value !== undefined ? value : 0);

	useEffect(() => {
		if (tauxData) {
		  console.log("le taux récupéré sdcdcg:", tauxData);
		  setCounter(tauxData.counter);
	
	
		}
		else{
		  console.log("le taux récupéré hvdcsh:", tauxData);
		}
	  }, [tauxData]);
	


	  async function handleButtonClicktaux() {
		try {
		  const counter = await fetch("http://localhost:8080/api/tarif/taux/" + userInput).then(res => res.json()).catch(error => console.log("lerreru est ", error.message));
		  console.log("la valeur du compter est : ", counter);
		  setCounter(counter); // Mettre à jour l'état taux avec la valeur récupérée
		} catch (error) {
		  console.log("Une erreur s'est produite lors de la récupération du taux :", error);
		}
		
	  }









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
							<h3 className="text-red-500 font-bold">{tauxData?.counter || 'N/A'}</h3>
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