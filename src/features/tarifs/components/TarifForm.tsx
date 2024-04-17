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
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
  } from "@/components/ui/table"
import  { taux } from "@/utils/_constants"

export function TarifForm() {
    return (

		<>
			<div className="flex justify-center items-center h-full py-6">
				<Card className="w-[1024px]">
					<CardContent>
						<form>
							<div className="grid grid-cols-3 gap-4 px-2 py-4">
								<div className="flex flex-col space-y-2">
									<Label htmlFor="nomenclature">Nomenclature</Label>
									<Input id="nomenclature" placeholder="Entrez la nomenclature" />
								</div>
								<div className="flex flex-col space-y-2">
									<Label htmlFor="libelle">Libellé</Label>
									<Input id="libelle" className="bg-gray-200" disabled />
								</div>
								<div className="flex flex-col space-y-2">
									<Button className="mt-4 w-full" type="submit">Rechercher</Button>
								</div>
							</div>
							<div className="grid grid-cols-3 gap-4 px-2 py-4">
								<div className="flex flex-col space-y-2">
									<Label htmlFor="tauxCumule">Taux cumulé</Label>
									<Input id="tauxCumule" className="bg-gray-200" disabled />
								</div>
								<div className="flex flex-col space-y-2">
									<Label htmlFor="simulateValue">Simuler une valeur</Label>
									<Input id="simulateValue" placeholder="Entrez une valeur" />
								</div>
								<div className="flex flex-col space-y-2">
									<Button className="mt-4 w-full" type="submit">Calculer</Button>
								</div>
							</div>
							<div className="grid grid-cols-3 gap-4 px-2 py-4">
								<div className="flex flex-col space-y-2">
									&nbsp;
								</div>
								<div className="flex flex-col space-y-2">
									<Label htmlFor="totalTaux">Total Taux</Label>
									<Input id="totalTaux" className="bg-gray-200" disabled />
								</div>
								<div className="flex flex-col space-y-2">
									&nbsp;
								</div>
							</div>
						</form>
					</CardContent>
					<Table>
						<TableHeader>
							<TableRow>
							<TableHead className="w-[100px]">Invoice</TableHead>
							<TableHead>&nbsp;</TableHead>
							<TableHead>&nbsp;</TableHead>
							<TableHead className="text-right">Amount</TableHead>
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
					
					<div className="grid grid-cols-3 gap-4 px-2 py-6">
						<div className="flex flex-col space-y-2">
							&nbsp;
						</div>
						<div className="flex flex-col space-y-2">
							<Label htmlFor="totalTaux">Total Taux</Label>
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

export default TarifForm;
