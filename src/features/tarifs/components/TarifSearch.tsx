/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState , useEffect, ChangeEvent } from "react";
import { useGetTarifswByNomenclatureQuery , useGetTauxByNomenclatureQuery, useGetTauxLineaireByNomenclatureQuery } from "@/services/index";
import "./SearchBar.css";
import Notification from "./Notification";


import {
	Table,
  
} from "@/components/ui/table"

function TarifSearch() {
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
 const [simulateValue, setSimulateValue] = useState<string>('');
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

  const [notification, setNotification] = useState<string>("");
// Recuperation des taux Linéaire 

			const [da, setda] = useState<number>(0);
			const [tva, settva] = useState<number>(0);
			const [rs, setrs] = useState<number>(0);
			const [ps, setps] = useState<number>(0);
			const [pcs, setpcs] = useState<number>(0);
			const [rau, setrau] = useState<number>(0);
			const [pc, setpc] = useState<number>(0);
			const [dd, setdd] = useState<number>(0);
			const [ect, setect] = useState<number>(0);
			const [aib, setaib] = useState<number>(0);




  const [libelle, setLibelle] = useState<string>("");
  const [statut, setStatut] = useState<string>("");
  const { data: libelleData, isLoading, refetch } = useGetTarifswByNomenclatureQuery(value !== undefined ? value : 0);
  const [isChecked, setIsChecked] = useState(false);

  const { data: tauxData , isError} = useGetTauxByNomenclatureQuery([(value !== undefined ? value : 0), (isChecked ? 1 : 0)]);
  const { data: tauxLineaireData } = useGetTauxLineaireByNomenclatureQuery(value !== undefined ? value : 0);

// initialisé l'etat qui stock la devise 
const [selectedCurrency, setSelectedCurrency] = useState<string>('XOF');

const handleCurrencyChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
	setSelectedCurrency(event.target.value);
};

 const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
};

  useEffect(() => {
	if (libelleData) {
	  console.log("Libellé récupéré :", libelleData);
	  setLibelle(libelleData.libelle);
	  setStatut(libelleData.statut);
	   
	}
	else{
	  console.log("Libellé récupéré :", libelleData);
	}
  }, [libelleData]);


  useEffect(() => {
	if (tauxData) {
	  console.log("le taux récupéré sdcdcg:", tauxData);
	  setTauxda(tauxData.tauxda);
	 // setTaux(tauxData.taux);
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



  useEffect(() => {
	if (tauxLineaireData) {
	  console.log("le taux récupéré sdcdcg:", tauxLineaireData);
	  setda(tauxLineaireData.da);
	  setaib(tauxLineaireData.aib)
	  settva(tauxLineaireData.tva)
	  setrs(tauxLineaireData.rs)
	  setps(tauxLineaireData.ps)
	  setpc(tauxLineaireData.pc)
	  setpcs(tauxLineaireData.pcs)
	  setrau(tauxLineaireData.rau)
	  setect(tauxLineaireData.ect)
	  setdd(tauxLineaireData.dd)

	}
	else{
	  console.log("le taux récupéré hvdcsh:", tauxData);
	}
  }, [tauxLineaireData]);

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

	if (!userInput) {
		setNotification("Veuillez entrer une nomenclature avant de rechercher.");
		setTimeout(() => setNotification(""), 5000); // Fermeture automatique après 3 secondes
		return;
	}

	if (isNaN(+userInput) || userInput.length !== 10) {
		setNotification("Nomenclature invalide! Veuillez entrer un nombre de 10 chiffres.");
		setValue(undefined);
		setTimeout(() => setNotification(""), 5000); // Auto close after 3 seconds
	  } else {
		setValue(+userInput);
  
		const libelle = await fetch("http://localhost:8080/api/tariflibelle/" + userInput)
		  .then((res) => res.json())
		  .catch((error) => console.log("l'erreur est ", error.message));
	  }
  

	
  }


 // Fonction qui renvoie le taux 
  async function handleButtonClicktaux() {
	if(tauxData){

		setTaux(tauxData.taux);

	}

 	/* try {
	  const taux = await fetch("http://localhost:8080/api/tarif/taux/" + userInput).then(res => res.json()).catch(error => console.log("lerreru est ", error.message));
	  console.log("le taux taux taux est : ", taux);
	  setTaux(taux); // Mettre à jour l'état taux avec la valeur récupérée
	  
	} catch (error) {
	  console.log("Une erreur s'est produite lors de la récupération du taux :", error);
	}*/
	
  }


  /*async function handleButtonClicktaux() {
    if (isChecked) {
        try {
            const response = await fetch('http://localhost:8080/api/tarif/checkbox', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ isChecked })
            });

            if (response.ok) {
                const data = await response.json();
                const message = data.message; // Extraire le message de la réponse JSON

                let tauxData: number = 0; // Initialiser tauxData avec une valeur par défaut de type number

                if (typeof data.taux !== 'undefined') {
                    tauxData = data.taux;
                }

                // Traiter le message renvoyé par le backend
                if (message === "Checkbox coché" || message === "Checkbox non coché") {
                    setTaux(tauxData); // Utiliser tauxData pour définir le taux
                } else {
                    // Gérer d'autres cas si nécessaire
                }
            } else {
                console.error('Erreur lors de la requête au backend');
            }
        } catch (error) {
            console.error('Erreur lors de la requête au backend:', error);
        }
    } else {
        console.log('Le checkbox n\'est pas coché');
    }
	}*/

  //metre a jour la valeur entrer dans le input pour calculer le montant 
 
  const handleInputSimulateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSimulateValue(event.target.value);
  };

  function handleSimulateSubmit(event: React.FormEvent<HTMLFormElement>) {
	event.preventDefault();
 
	
	// Taux de change par rapport à USD
				const exchangeRates: {
					[key: string]: number;
				} = {
					XOF: 1, // Exemple de taux de change
					EUR: 655.957,  // Exemple de taux de change
					USD: 606.690 ,   // Exemple de taux de change
					JPY: 650,// Exemple de taux de change
					CHF: 1, // Exemple de taux de change
					CAD: 600,   // Exemple de taux de change
					CNY: 650 ,
					INR: 1, // Exemple de taux de change
					DTS: 600,   // Exemple de taux de change
					NGN: 650,
					GHS: 1, // Exemple de taux de change
					GMD: 600,   // Exemple de taux de change
					GNF: 650,//exemple de taux de change 
					PHP: 1 // Exemple de taux de change
					   
				};
				
 	
			// Vérifier si simulateValue est défini
			
			

			const simulateValueAsString: string = simulateValue.toString(); // Convertir simulateValue en une chaîne de caractères
			
			const simulateValueNumber: number = parseFloat(simulateValue);
				
			
			if (isNaN(simulateValueNumber)) {
				console.error('La valeur saisie n\'est pas un nombre valide.');
				return;
			}
				
			// Convertir le montant saisi dans la devise sélectionnée
			const exchangeRate = exchangeRates[selectedCurrency];
			const amountInSelectedCurrency = simulateValueNumber ;
			console.log("Valeur du simulateValue est  :", simulateValue);
			console.log("Valeur du exchangeRate est  :", exchangeRate);


			console.log("Valeur du amountInSelectedCurrency est  :", amountInSelectedCurrency);

			// Calcul des droits et taxes en fonction de la devise sélectionnée
			let calculatedValue1;

			switch (selectedCurrency) {
				case 'XOF':
					calculatedValue1 = amountInSelectedCurrency * 1; // Exemple de calcul pour XOF
					break;
				case 'EUR':
					calculatedValue1 = amountInSelectedCurrency * 655.957; // Exemple de calcul pour Euro
					break;
				case 'USD':
					calculatedValue1 = amountInSelectedCurrency * 606.690; // Exemple de calcul pour Dollar us
					break;
				case 'GBP':
					calculatedValue1 = amountInSelectedCurrency * 766.660; // Exemple de calcul pour livre steling
					break;
				case 'JPY':
					calculatedValue1 = amountInSelectedCurrency * 3.890; // Exemple de calcul pour Yen japonais
					break;
				case 'CHF':
						calculatedValue1 = amountInSelectedCurrency * 667.300 ; // Exemple de calcul pour Franc suisse
						break;
				case 'CAD':
						calculatedValue1 = amountInSelectedCurrency * 443.810 ; // Exemple de calcul pour Dollar candien
						break;
				case 'CNY':
						calculatedValue1 = amountInSelectedCurrency * 83.880 ; // Exemple de calcul pour Yuan chinois
						break;
				case 'INR':
						calculatedValue1 = amountInSelectedCurrency * 7.280 ; // Exemple de calcul pour Roupie Indienne
						break;
				case 'DTS':
						calculatedValue1 = amountInSelectedCurrency * 802.500 ; // Exemple de calcul pour DTS du FMI
						break;
				case 'NGN':
						calculatedValue1 = amountInSelectedCurrency * 0.430 ; // Exemple de calcul pour Naira
						break;
				case 'GHS':
						calculatedValue1 = amountInSelectedCurrency * 44.280 ; // Exemple de calcul pour Cedi ghannen
						break;

				case 'GMD':
						calculatedValue1 = amountInSelectedCurrency * 9.010 ; // Exemple de calcul pour Dalasi gambien
						break;
				case 'GNF':
						calculatedValue1 = amountInSelectedCurrency * 7.140 ; // Exemple de calcul pour Franc guineen
						break;
				case 'PHP':
						calculatedValue1 = amountInSelectedCurrency * 10.38 ; // Exemple de calcul pour Peso Philippin
						break;
				// Ajoutez des cas pour d'autres devises si nécessaire
				default:
					calculatedValue1 = 0;
			}


	const calculatedValue = calculatedValue1 !== undefined ? Number(((calculatedValue1 * taux)/100).toFixed(2)) : undefined;
	const calculatedValuetauxrs = calculatedValue1 !== undefined ? Number(((calculatedValue1 * tauxrs)/100).toFixed(2)) : undefined;
	const calculatedValuetauxps = calculatedValue1 !== undefined ? Number(((calculatedValue1 * tauxps)/100).toFixed(2)) : undefined;
	const calculatedValuetauxpc = calculatedValue1 !== undefined ? Number(((calculatedValue1 * tauxpc)/100).toFixed(2)) : undefined;
	const calculatedValuetauxpcs = calculatedValue1 !== undefined ? Number(((calculatedValue1 * tauxpcs)/100).toFixed(2)) : undefined;
	const calculatedValuetauxrau = calculatedValue1 !== undefined ? Number(((calculatedValue1 * tauxrau)/100).toFixed(2)) : undefined;
	const calculatedValuetauxect = calculatedValue1 !== undefined ? Number(((calculatedValue1 * tauxect)/100).toFixed(2)) : undefined;
	const calculatedValuetauxdd = calculatedValue1 !== undefined ? Number(((calculatedValue1 * tauxdd)/100).toFixed(2)) : undefined;
	const calculatedValuetauxda = calculatedValue1 !== undefined ? Number(((calculatedValue1 * tauxda)/100).toFixed(2)) : undefined;
	const calculatedValuetauxaib = calculatedValue1 !== undefined ? Number(((calculatedValue1 * tauxaib)/100).toFixed(2)) : undefined;
	const calculatedValuetauxtva = calculatedValue1 !== undefined ? Number(((calculatedValue1 * tauxtva)/100).toFixed(2)) : undefined;
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

	if (!userInput) {
		setNotification("Veuillez entrer une nomenclature avant de calculer les droits.");
		setTimeout(() => setNotification(""), 5000); // Fermeture automatique après 5 secondes
		return;
	}
  }

   

  return (
						
	<div className="flex justify-center items-center h-full py-6">
		<div className="w-full md:w-[90%] lg:w-[75%] bg-white rounded-lg shadow-lg p-6">
		{notification && <Notification message={notification} onClose={() => setNotification("")} />}
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
				<div className="flex flex-col space-y-2">
					<label htmlFor="libelle" className="font-semibold">Libellé</label>
					<h3 className="text-red-500 font-bold border border-gray-300 p-2 rounded-md text-sm">{libelleData?.libelle || 'N/A'}</h3>
				</div>

				<div className="flex flex-col space-y-2">
					<div className="flex items-center space-x-2">
						{statut === "OK" ? (
						<div className="flex items-center space-x-2">
							<input
							type="checkbox"
							id="nomenclatureCheckbox"
							checked={isChecked}
							onChange={handleCheckboxChange}
							className="border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-400"
							/>
							<label htmlFor="nomenclatureCheckbox">Grosse cylindre</label>
						</div>
							
						) : (
							<p></p>
						)}
					</div>
				</div>
				<button
				className="mt-8 md:mt-8 w-60 bg-blue-500
				 text-white rounded-md py-2 px-4
				 hover:bg-blue-600 focus:outline-none
				 focus:bg-blue-600"
				 onClick={handleButtonClicktaux}
				 
				 >
					Calculer
				</button>
			</div>
			
			<div className="grid grid-cols-1 gap-2 px-2 py-2 items-start">
				<div className="flex flex-col space-y-2 border-4 border-blue-500 p-2 rounded-md w-full">
					<label htmlFor="tauxCumule" className="font-semibold text-center">Taux cumulé</label>
					<h3 className="text-red-500 font-bold text-center">{taux !== undefined ? taux.toFixed(2) : 'N/A'} %</h3>
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
						<label htmlFor="simulateValue" className="font-semibold text-center">Devise étrangère</label>
						<select
							id="currency"
							value={selectedCurrency}
							onChange={handleCurrencyChange}
							className="text-black-400 font-bold text-center border border-gray-300 rounded-md p-2"						>
							<option value="XOF">FCFA</option>
							<option value="EUR">EURO</option>
							<option value="USD">Dollar us</option>
							<option value="GBP">Livre sterling</option>
							<option value="JPY">Yen japonais</option>
							<option value="CHF">Franc suisse</option>
							<option value="CAD">Dollar canadien</option>
							<option value="CNY">Yuan chinois</option>
							<option value="INR">Roupie Indienne</option>
							<option value="DTS">DTS du FMI</option>
							<option value="NGN">Naira</option>
							<option value="GHS">Cedi ghaneen</option>
							<option value="GMD">Dalasi gambien</option>
							<option value="GNF">Franc guineen</option>
							<option value="PHP">Peso Philippin</option>
							{/* Ajoutez d'autres devises selon vos besoins */}
						</select>
					</div>
					<div className="flex flex-col space-y-2">
						<button
							type="submit"
							className="mt-8 md:mt-8 w-full bg-blue-500 text-white rounded-md py-2 px-4 hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
						>
							Calculer les droits
						</button>
					</div>
				</div>
			</form>
			
			<div className="overflow-x-auto py-5">
				<Table className="table-auto w-full border-collapse border border-gray-200">
					<thead className="bg-gray-200">
						<tr>
							<th className="px-4 py-2 border border-gray-200">Droit Taxe</th>
							<th className="px-4 py-2 border border-gray-200">Taux lineaire</th>
							<th className="px-4 py-2 border border-gray-200">Taux Cumulé</th>
							<th className="px-4 py-2 border border-gray-200">Montant droit de taxe</th>
						</tr>
					</thead>
					<tbody>
						{[
							{ label: 'PC', values: [pc,tauxpc, calculatedValuetauxpc] },
							{ label: 'PCS', values: [pcs, tauxpcs, calculatedValuetauxpcs] },
							{ label: 'RS', values: [rs, tauxrs, calculatedValuetauxrs] },
							{ label: 'RAU', values: [rau, tauxrau, calculatedValuetauxrau] },
							{ label: 'PS', values: [ps, tauxps, calculatedValuetauxps] },
							{ label: 'ECT', values: [ect, tauxect, calculatedValuetauxect] },
							{ label: 'DD', values: [dd, tauxdd, calculatedValuetauxdd] },
							{ label: 'DA', values: [da, tauxda, calculatedValuetauxda] },
							{ label: 'AIB', values: [aib, tauxaib, calculatedValuetauxaib] },
							{ label: 'TVA', values: [tva, tauxtva, calculatedValuetauxtva] },
						].map(({ label, values }, index) => (
							<tr key={index} className={`${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}`}>
								<td className="px-4 py-2 border border-gray-200">{label}</td>
								<td className="px-4 py-2 border border-gray-200">{values[0] !== undefined ? values[0] : 'N/A'}</td>
								<td className="px-4 py-2 border border-gray-200">{values[1] !== undefined ? values[1] : 'N/A'}</td>
								<td className="px-4 py-2 border border-gray-200 text-blue-500 font-bold">{values[2] !== undefined ? values[2] : 'N/A'}</td>
							</tr>
						))}
					</tbody>
				</Table>
			</div>

			<div className="grid grid-cols-1 gap-2 px-2 py-2 items-start">
				<div className="flex flex-col space-y-2 border-4 border-blue-500 p-2 rounded-md w-full">
					<label htmlFor="totalTaux" className="font-semibold text-center">Montant</label>
					<h3 className="text-red-500 font-bold text-center">{calculatedValue !== undefined ? calculatedValue.toString() : 'N/A'} <span className="text-black text-xs">FCFA</span></h3>
				</div>
			</div>
			

		</div>
		
	</div>


	

	
  );
}

export default TarifSearch;