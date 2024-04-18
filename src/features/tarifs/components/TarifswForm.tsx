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
import React, { ChangeEvent, FormEvent, useState } from "react";

export function TarifswForm() {
	const [nomenclature, setNomenclature] = useState<string>('');
    const [libelle, setLibelle] = useState<string>('');
    const [tarif, setTarifs] = useState<Tarifsw[]>([]); // Utilisez le type Tarifsw

    

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
			<div className="flex justify-center items-center h-full py-6">
				<Card className="w-full md:w-[90%] lg:w-[75%]">
					<CardContent>
						<form>
							<div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-2 py-4 items-start">
								<div className="flex flex-col space-y-2">
									<Label htmlFor="nomenclature">Nomenclature</Label>
									<Input id="nomenclature" placeholder="Entrez la nomenclature" value={tarif} onChange={handlennomenclature} />
								</div>
								<div className="flex flex-col space-y-2">
									<Label htmlFor="libelle">Libellé</Label>
									<Input id="libelle" className="bg-gray-200" value={libelle} disabled />
								</div>
								<div className="flex flex-col space-y-2">
									<Button className="mt-4 w-full" type="submit">Rechercher</Button>
								</div>
							</div>
						</form>
						<form>
							<div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-2 py-4 items-start">
								<div className="flex flex-col space-y-2">
									<Button className="mt-4 w-full" type="submit">Calculer le taux</Button>
								</div>
								<div className="flex flex-col space-y-2">
									<Label htmlFor="tauxCumule">Taux cumulé</Label>
									<Input id="tauxCumule" className="bg-gray-200" disabled />
								</div>
							</div>
						</form>
						<form>
							<div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-2 py-4 items-start">
								<div className="flex flex-col space-y-2">
									<Label htmlFor="simulateValue">Simuler une valeur</Label>
									<Input id="simulateValue" placeholder="Entrez une valeur" />
								</div>
								<div className="flex flex-col space-y-2">
									<Button className="mt-4 w-full" type="submit">Calculer la valeur</Button>
								</div>
								<div className="flex flex-col space-y-2">
									&nbsp;
								</div>
							</div>
						</form>
					</CardContent>
					<Table className="w-full">
						<TableHeader>
							<TableRow>
								<TableHead className="w-[100px]">Libellé</TableHead>
								<TableHead>&nbsp;</TableHead>
								<TableHead>&nbsp;</TableHead>
								<TableHead className="text-right">Valeur</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							{taux.map((taxe) => (
								<TableRow key={taxe.libelle}>
									<TableCell className="font-medium">{taxe.libelle}</TableCell>
									<TableCell>&nbsp;</TableCell>
									<TableCell>&nbsp;</TableCell>
									<TableCell className="text-right">{taxe.valeur}</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-2 py-6">
						<div className="flex flex-col space-y-2">
							&nbsp;
						</div>
						<div className="flex flex-col space-y-2">
							<Label htmlFor="totalTaux">Montant</Label>
							<Input id="totalTaux" className="bg-gray-200" disabled />
						</div>
						<div className="flex flex-col space-y-2">
							&nbsp;
						</div>
					</div>
				</Card>
			</div>
		</>
    );
}

export default TarifswForm;
