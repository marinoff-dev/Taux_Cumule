import React, { useState , useEffect } from "react";
import { useGetTarifswByNomenclatureQuery , useGetTauxByNomenclatureQuery } from "@/services/index";
import "./SearchBar.css";
import { error } from "console";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { taux } from "@/utils/_constants"

import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
  
} from "@/components/ui/table"
import { Card, CardContent } from "@/components/ui/card";
import { TableColumnsSplit } from "lucide-react";
function UemoaForm() {
  const [value, setValue] = useState<number | undefined>(undefined);
  const [userInput, setUserInput] = useState<string>("");
  const [taux, setTaux] = useState<number>(0);
  const [tauxda, setTauxda] = useState<number>(0);
  const [tauxtva, setTauxtva] = useState<number>(0);
  const [tauxrs, setTauxrs] = useState<number>(0);
  const [tauxps, setTauxps] = useState<number>(0);
  const [tauxpcs, setTauxpcs] = useState<number>(0);
  const [tauxrau, setTauxrau] = useState<number>(0);
  const [tauxpc, setTauxpc] = useState<number>(0);
  const [tauxdd, setTauxdd] = useState<number>(0);
  const [tauxect, setTauxect] = useState<number>(0);
  const [tauxaib, setTauxaib] = useState<number>(0);

 //recupere le montant demander a calutuler et des taux
  const [simulateValue, setSimulateValue] = useState<number | undefined>(undefined);
  const [calculatedValue, setCalculatedValue] = useState<number | undefined>(undefined);
  const [calculatedValuetauxrs, setCalculatedValuetauxrs] = useState<number | undefined>(undefined);
  const [calculatedValuetauxps, setCalculatedValuetauxps] = useState<number | undefined>(undefined);
  const [calculatedValuetauxpc, setCalculatedValuetauxpc] = useState<number | undefined>(undefined);
  const [calculatedValuetauxrau, setCalculatedValuetauxrau] = useState<number | undefined>(undefined);
  const [calculatedValuetauxdd, setCalculatedValuetauxdd] = useState<number | undefined>(undefined);
  const [calculatedValuetauxect, setCalculatedValuetauxect] = useState<number | undefined>(undefined);
  const [calculatedValuetauxaib, setCalculatedValuetauxaib] = useState<number | undefined>(undefined);
  const [calculatedValuetauxtva, setCalculatedValuetauxtva] = useState<number | undefined>(undefined);
  const [calculatedValuetauxda, setCalculatedValuetauxda] = useState<number | undefined>(undefined);
  const [calculatedValuetauxpcs, setCalculatedValuetauxpcs] = useState<number | undefined>(undefined);







  const [libelle, setLibelle] = useState<string>("");
  const { data: libelleData, isLoading, refetch } = useGetTarifswByNomenclatureQuery(value !== undefined ? value : 0);

  const { data: tauxData , isError} = useGetTauxByNomenclatureQuery(value !== undefined ? value : 0);

  //console.log(useGetTarifswByNomenclatureQuery(value !== undefined ? value : 11111123))


  useEffect(() => {
	if (libelleData) {
	  console.log("Libellé récupéré :", libelleData);
	  setLibelle(libelleData.libelle);
	}
	else{
	  console.log("Libellé récupéré :", libelleData);
	}
  }, [libelleData]);


  useEffect(() => {
	if (tauxData) {
	  console.log("le taux récupéré sdcdcg:", tauxData);
	  setTauxda(tauxData.tauxda);
	  setTaux(tauxData.taux);
	  setTauxaib(tauxData.tauxaib)
	  setTauxtva(tauxData.tauxtva)
	  setTauxrs(tauxData.tauxrs)
	  setTauxps(tauxData.tauxps)
	  setTauxpc(tauxData.tauxpc)
	  setTauxpcs(tauxData.tauxpcs)
	  setTauxrau(tauxData.tauxrau)
	  setTauxect(tauxData.tauxect)
	  setTauxdd(tauxData.tauxdd)





	}
	else{
	  console.log("le taux récupéré hvdcsh:", tauxData);
	}
  }, [tauxData]);

 if(isLoading){
  return <div>chargement...</div>
 }


  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
	setUserInput(event.target.value.trim());
	  
  }

  async function handleButtonClick() {
	//const parsedValue = parseInt(userInput, 10);
	console.log("le userinput est :", userInput)
	console.log("le userinput est :", typeof userInput)

	setValue(+userInput);

	const libelle = await fetch("http://localhost:8080/api/tariflibelle/"+userInput).then(res=>res.json()).catch(error=>console.log("lerreru est ", error.message))

   // console.log("le libelle est : ", libelle);
	

   /* if (isNaN(+userInput)) {

	   setValue(+userInput);
	} else {
	  setValue(undefined);
	}*/

	
  }

  async function handleButtonClicktaux() {
	try {
	  const taux = await fetch("http://localhost:8080/api/tarif/taux/" + userInput).then(res => res.json()).catch(error => console.log("lerreru est ", error.message));
	  console.log("le taux taux taux est : ", taux);
	  setTaux(taux); // Mettre à jour l'état taux avec la valeur récupérée
	} catch (error) {
	  console.log("Une erreur s'est produite lors de la récupération du taux :", error);
	}
	
  }

  //metre a jour la valeur entrer dans le input pour calculer le montabt 
  function handleInputSimulateChange(event: React.ChangeEvent<HTMLInputElement>) {
	setSimulateValue(parseFloat(event.target.value.trim()));
  }


  function handleSimulateSubmit(event: React.FormEvent<HTMLFormElement>) {
	event.preventDefault();
	const calculatedValue = simulateValue !== undefined ? Number(((simulateValue * taux)/100).toFixed(2)) : undefined;
	const calculatedValuetauxrs = simulateValue !== undefined ? Number(((simulateValue * tauxrs)/100).toFixed(2)) : undefined;
	const calculatedValuetauxps = simulateValue !== undefined ? Number(((simulateValue * tauxps)/100).toFixed(2)) : undefined;
	const calculatedValuetauxpc = simulateValue !== undefined ? Number(((simulateValue * tauxpc)/100).toFixed(2)) : undefined;
	const calculatedValuetauxpcs = simulateValue !== undefined ? Number(((simulateValue * tauxpcs)/100).toFixed(2)) : undefined;
	const calculatedValuetauxrau = simulateValue !== undefined ? Number(((simulateValue * tauxrau)/100).toFixed(2)) : undefined;
	const calculatedValuetauxect = simulateValue !== undefined ? Number(((simulateValue * tauxect)/100).toFixed(2)) : undefined;
	const calculatedValuetauxdd = simulateValue !== undefined ? Number(((simulateValue * tauxdd)/100).toFixed(2)) : undefined;
	const calculatedValuetauxda = simulateValue !== undefined ? Number(((simulateValue * tauxda)/100).toFixed(2)) : undefined;
	const calculatedValuetauxaib = simulateValue !== undefined ? Number(((simulateValue * tauxaib)/100).toFixed(2)) : undefined;
	const calculatedValuetauxtva = simulateValue !== undefined ? Number(((simulateValue * tauxtva)/100).toFixed(2)) : undefined;
	setCalculatedValue(calculatedValue);
	setCalculatedValuetauxrs(calculatedValuetauxrs);
	setCalculatedValuetauxpc(calculatedValuetauxpc);
	setCalculatedValuetauxps(calculatedValuetauxps);
	setCalculatedValuetauxpcs(calculatedValuetauxpcs);
	setCalculatedValuetauxrau(calculatedValuetauxrau);
	setCalculatedValuetauxect(calculatedValuetauxect);
	setCalculatedValuetauxdd(calculatedValuetauxdd);
	setCalculatedValuetauxda(calculatedValuetauxda);
	setCalculatedValuetauxaib(calculatedValuetauxaib);
	setCalculatedValuetauxtva(calculatedValuetauxtva);
  
	// Faites quelque chose avec les valeurs calculées, par exemple les afficher dans la console
	console.log("Valeur calculée taux :", calculatedValue);
	console.log("Valeur calculée tauxrs :", calculatedValuetauxrs);
	console.log("Valeur calculée tauxps :", calculatedValuetauxps);
	console.log("Valeur calculée tauxpc :", calculatedValuetauxpc);
	console.log("Valeur calculée tauxpcs :", calculatedValuetauxpcs);
	console.log("Valeur calculée tauxrau :", calculatedValuetauxrau);
	console.log("Valeur calculée tauxect :", calculatedValuetauxect);
	console.log("Valeur calculée tauxdd :", calculatedValuetauxdd);
	console.log("Valeur calculée tauxda :", calculatedValuetauxda);
	console.log("Valeur calculée tauxaib :", calculatedValuetauxaib);
	console.log("Valeur calculée tauxtva :", calculatedValuetauxtva);
  }

   

  return (

									
							
	<div className="flex justify-center items-center h-full py-6">
		<div className="w-full md:w-[90%] lg:w-[75%] bg-white rounded-lg shadow-lg p-6">
			<div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-2 py-4 items-start">
				<div className="flex flex-col space-y-2">
					<label htmlFor="nomenclature" className="font-semibold">Nomenclature</label>
					<input
					type="text"
					id="nomenclature"
					value={userInput}
					onChange={handleInputChange}
					placeholder="Entrez la nomenclature"
					className="border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-400"
					/>
				</div>
				<div className="flex flex-col space-y-2">
					<button
					className="mt-8 md:mt-8 w-full bg-blue-500 text-white rounded-md py-2 px-4 hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
					onClick={handleButtonClick}
					>
					Rechercher
					</button>
				</div>
				<div className="flex flex-col space-y-3">
					<label htmlFor="libelle" className="font-semibold">Libellé</label>
					<h3 className="text-red-500 font-bold">{libelleData?.libelle || 'N/A'}</h3>
				</div>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-2 py-4 items-start">
				<div className="flex flex-col space-y-2">
					<button
					className="mt-8 md:mt-8 w-full bg-blue-500 text-white rounded-md py-2 px-4 hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
					onClick={handleButtonClicktaux}
					>
					Calculer le taux
					</button>
				</div>
				<div className="flex flex-col space-y-2">
					<label htmlFor="tauxCumule">Taux cumulé</label>
					<h3 className="text-red-500 font-bold">{taux.toFixed(2) !== undefined ? taux.toFixed(2) : 'N/A'}</h3>
				</div>
			</div>
			<form onSubmit={handleSimulateSubmit}>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-2 py-4 items-start">
					<div className="flex flex-col space-y-2">
						<label htmlFor="simulateValue" className="font-semibold">Simuler une valeur</label>
						<input
							id="simulateValue"
							type="text"
							placeholder="Entrez une valeur"
							value={simulateValue || ''}
							onChange={handleInputSimulateChange}
							className="border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-400"
						/>
					</div>
					<div className="flex flex-col space-y-2">
						<button
							type="submit"
							className="mt-8 md:mt-8 w-full bg-blue-500 text-white rounded-md py-2 px-4 hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
						>
							Calculer la valeur
						</button>
					</div>
				</div>
			</form>
			<div className="overflow-x-auto py-5">
				<Table className="table-auto w-full border-collapse border border-gray-200">
					<thead className="bg-gray-200">
						<tr>
							<th className="px-4 py-2 border border-gray-200">Droit Taxe</th>
							<th className="px-4 py-2 border border-gray-200">Taux Cumulé</th>
							<th className="px-4 py-2 border border-gray-200">Montant droit de taxe</th>
						</tr>
					</thead>
					<tbody>
						{[
							{ label: 'PC', values: [tauxpc, calculatedValuetauxpc] },
							{ label: 'PCS', values: [tauxpcs, calculatedValuetauxpcs] },
							{ label: 'RS', values: [tauxrs, calculatedValuetauxrs] },
							{ label: 'RAU', values: [tauxrau, calculatedValuetauxrau] },
							{ label: 'PS', values: [tauxps, calculatedValuetauxps] },
							{ label: 'ECT', values: [tauxect, calculatedValuetauxect] },
							{ label: 'DD', values: [tauxdd, calculatedValuetauxdd] },
							{ label: 'DA', values: [tauxda, calculatedValuetauxda] },
							{ label: 'AIB', values: [tauxaib, calculatedValuetauxaib] },
							{ label: 'TVA', values: [tauxtva, calculatedValuetauxtva] },
						].map(({ label, values }, index) => (
							<tr key={index} className={`${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}`}>
								<td className="px-4 py-2 border border-gray-200">{label}</td>
								<td className="px-4 py-2 border border-gray-200">{values[0] !== undefined ? values[0] : 'N/A'}</td>
								<td className="px-4 py-2 border border-gray-200 text-blue-500 font-bold">{values[1] !== undefined ? values[1] : 'N/A'}</td>
							</tr>
						))}
					</tbody>
				</Table>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-2 py-6">
				<div className="flex flex-col space-y-2">
					&nbsp;
				</div>
				<div className="flex flex-col space-y-2">
					<label htmlFor="totalTaux">Montant</label>
					<h3 className="text-red-500 font-bold">{calculatedValue !== undefined ? calculatedValue.toString() : 'N/A'}</h3>
				</div>
				<div className="flex flex-col space-y-2">
					&nbsp;
				</div>
			</div>
		</div>
	</div>



	

	
  );
}

export default UemoaForm;