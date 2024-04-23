import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table"
import { taux } from "@/utils/_constants"
import TarifSearch from "./TarifSearch";
import { useGetTarifswByNomenclatureQuery } from "@/services";

import React, { ChangeEvent, FormEvent, useState, useEffect } from "react";



export function TarifswForm() {
	const [nomenclature, setNomenclature] = useState<string>('');
    const [libelle, setLibelle] = useState<string>('');
    const [tarif, setTarifs] = useState<Tarifsw[]>([]); // Utilisez le type Tarifsw


	const [tarifswData, setTarifswData] = useState<any>(null);
	
     
	useEffect(() => {
		if (tarifswData) {
		  setTarifs(tarifswData);
		}
	  }, [tarifswData]);

 


	function handlennomenclature(event: React.ChangeEvent<HTMLFormElement>) {
		event.preventDefault();
	  
		const form = event.target as HTMLFormElement;
		const tarifInput = form.elements.namedItem('tarif') as HTMLInputElement;
	  
		const tarifValue = tarifInput.value;
		// Faites quelque chose avec tarifValue...
	  
		// Réinitialisez le formulaire si nécessaire
		form.reset();
	  }

    return (
		<>

			<div>
				<TarifSearch/>
			</div>



			
		</>
    );
}

export default TarifswForm;
