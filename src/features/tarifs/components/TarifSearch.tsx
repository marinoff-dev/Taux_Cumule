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
function TarifSearch() {
  const [value, setValue] = useState<number | undefined>(undefined);
  const [userInput, setUserInput] = useState<string>("");
  const [taux, setTaux] = useState<number>(0);

  //recupere le montant demander a calutuler
  const [simulateValue, setSimulateValue] = useState<number | undefined>(undefined);
  const [calculatedValue, setCalculatedValue] = useState<number | undefined>(undefined);


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
      setTaux(tauxData.taux);
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

    //const libelle = await fetch("http://localhost:8080/api/tariflibelle/"+userInput).then(res=>res.json()).catch(error=>console.log("lerreru est ", error.message))

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
    const calculatedValue = simulateValue !== undefined ? simulateValue * taux : undefined;
    setCalculatedValue(calculatedValue);
    // Faites quelque chose avec la valeur calculée, par exemple l'afficher dans la console
    console.log("Valeur calculée :", calculatedValue);
  }


   

  return (

									
							
    <div className="searchBar">
          

      <Input   type="text" className="searchInput" value={userInput} onChange={handleInputChange} placeholder="Entrez la nomenclature" space-y-2 />

      <div>/</div>
      <Button  onClick={handleButtonClick}>Rechercher</Button>
      
      <div>Libellé: {libelleData?.libelle || 'N/A'}</div> 

      <div className="flex flex-col space-y-2">
									<Button onClick={handleButtonClicktaux}  className="mt-4 w-full" >Calculer le taux</Button>
			</div>
      <div>/</div>

								<div className="flex flex-col space-y-2">
									<Label htmlFor="tauxCumule">Taux cumulé</Label>
									<div>Taux: {taux !== undefined ? taux : 'N/A'}</div>
			 </div>


              <form onSubmit={handleSimulateSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-2 py-4 items-start">
                    <div className="flex flex-col space-y-2">
                      <Label htmlFor="simulateValue">Simuler une valeur</Label>
                      <Input id="simulateValue" placeholder="Entrez une valeur" value={simulateValue || ''} onChange={handleInputSimulateChange} />
                    </div>
                    <div className="flex flex-col space-y-2">
                      <Button className="mt-4 w-full" type="submit">Calculer la valeur</Button>
                    </div>
                    <div className="flex flex-col space-y-2">
                      &nbsp;
                    </div>
                  </div>
             </form>
      
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
							
						</TableBody>
					</Table>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-2 py-6">
						<div className="flex flex-col space-y-2">
							&nbsp;
						</div>
						<div className="flex flex-col space-y-2">
                  <Label htmlFor="totalTaux">Montant</Label>
                  <Input id="totalTaux" className="bg-gray-200" disabled value={calculatedValue !== undefined ? calculatedValue.toString() : ''} />
          </div>
						<div className="flex flex-col space-y-2">
							&nbsp;
						</div>
					</div>




    </div>

    

    
  );
}

export default TarifSearch;