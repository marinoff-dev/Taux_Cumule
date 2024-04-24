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






  const [tauxaib, setTauxaib] = useState<number>(0);


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
      setTauxda(tauxData.tauxda);
      setTaux(tauxData.taux);
      setTauxaib(tauxData.tauxaib)
      setTauxtva(tauxData.tauxtva)
      setTauxrs(tauxData.tauxrs)
      setTauxps(tauxData.tauxps)
      setTauxpc(tauxData.tauxpc)
      setTauxpcs(tauxData.tauxpcs)
      setTauxrau(tauxData.tauxrau)



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
    const calculatedValue = simulateValue !== undefined ? simulateValue * taux : undefined;
    setCalculatedValue(calculatedValue);
    // Faites quelque chose avec la valeur calculée, par exemple l'afficher dans la console
    console.log("Valeur calculée :", calculatedValue);
  }


   

  return (

									
							
    <div className="flex justify-center items-center h-full py-6">
      <Card className="w-full md:w-[90%] lg:w-[75%]">
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-2 py-4 items-start">
            <div className="flex flex-col space-y-2">
              <Label htmlFor="nomenclature">Nomenclature</Label>
              <Input type="text" value={userInput} onChange={handleInputChange} placeholder="Entrez la nomenclature" />
            </div>
            <div className="flex flex-col space-y-2">
              <Button className="mt-4 w-full" onClick={handleButtonClick}>Rechercher</Button>
            </div>
            <div className="flex flex-col space-y-3">
              <Label htmlFor="libelle">Libellé</Label>
              <h3 className="text-red-500 font-bold">{libelleData?.libelle || 'N/A'}</h3>
            </div>
            
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-2 py-4 items-start">
            <div className="flex flex-col space-y-2">
              <Button className="mt-4 w-full" onClick={handleButtonClicktaux}>Calculer le taux</Button>
            </div>
            <div className="flex flex-col space-y-2">
              <Label htmlFor="tauxCumule">Taux cumulé</Label>
              <h3 className="text-red-500 font-bold">{taux !== undefined ? taux : 'N/A'}</h3>
            </div>
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
        </CardContent>
        <Table className="w-full">
          <TableHeader>
            <TableRow className="grid grid-cols-3 items-center">
              <TableHead className="w-[100px]">Droit Taxe</TableHead>
              <TableHead>Taux Cumule</TableHead>
              <TableHead>Montant droit de taxe</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
            <TableCell className="flex-col">

            <div className="grid grid-cols-3 items-center">
                <div className="mr-20">PC</div>
                <h3 className="text-red-500 font-bold flex-grow:">{tauxpc !== undefined ? tauxpc : 'N/A'}</h3>
                <h3 className="text-red-500 font-bold flex-grow:">{tauxpc !== undefined ? tauxpc : 'N/A'}</h3>
            </div>
                

            <div className="grid grid-cols-3 items-center">
                <div className="mr-20">PCS</div>
                <h3 className="text-red-500 font-bold flex-grow:">{tauxpcs !== undefined ? tauxpcs : 'N/A'}</h3>
                <h3 className="text-red-500 font-bold flex-grow:">{tauxpcs !== undefined ? tauxpcs : 'N/A'}</h3>
            </div>

            <div className="grid grid-cols-3 items-center">
                <div className="mr-20">RC</div>
                <h3 className="text-red-500 font-bold flex-grow:">{tauxpc !== undefined ? tauxpc : 'N/A'}</h3>
                <h3 className="text-red-500 font-bold flex-grow:">{tauxpc !== undefined ? tauxpc : 'N/A'}</h3>
            </div>
            
            <div className="grid grid-cols-3 items-center">
                <div className="mr-20">RAU</div>
                <h3 className="text-red-500 font-bold flex-grow:">{tauxrau !== undefined ? tauxrau : 'N/A'}</h3>
                <h3 className="text-red-500 font-bold flex-grow:">{tauxrau !== undefined ? tauxrau : 'N/A'}</h3>
            </div>

            <div className="grid grid-cols-3 items-center">
                <div className="mr-20">RS</div>
                <h3 className="text-red-500 font-bold flex-grow:">{tauxrs !== undefined ? tauxrs : 'N/A'}</h3>
                <h3 className="text-red-500 font-bold flex-grow:">{tauxrs !== undefined ? tauxrs : 'N/A'}</h3>
            </div>
            
            <div className="grid grid-cols-3 items-center">
                <div className="mr-20">DD</div>
                <h3 className="text-red-500 font-bold flex-grow:">{tauxpc !== undefined ? tauxpc : 'N/A'}</h3>
                <h3 className="text-red-500 font-bold flex-grow:">{tauxpc !== undefined ? tauxpc : 'N/A'}</h3>
            </div>
              
            <div className="grid grid-cols-3 items-center">
                <div className="mr-20">DA</div>
                <h3 className="text-red-500 font-bold flex-grow:">{tauxda !== undefined ? tauxda : 'N/A'}</h3>
                <h3 className="text-red-500 font-bold flex-grow:">{tauxda !== undefined ? tauxda : 'N/A'}</h3>
            </div>

            <div className="grid grid-cols-3 items-center">
                <div className="mr-20">AIB</div>
                <h3 className="text-red-500 font-bold flex-grow:">{tauxaib !== undefined ? tauxaib : 'N/A'}</h3>
                <h3 className="text-red-500 font-bold flex-grow:">{tauxaib !== undefined ? tauxaib : 'N/A'}</h3>
            </div>

            <div className="grid grid-cols-3 items-center">
                <div className="mr-20">TVA</div>
                <h3 className="text-red-500 font-bold flex-grow:">{tauxtva !== undefined ? tauxtva : 'N/A'}</h3>
                <h3 className="text-red-500 font-bold flex-grow:">{tauxtva !== undefined ? tauxtva : 'N/A'}</h3>
            </div>

            <div>&nbsp;</div>
              <div className="text-right">&nbsp;</div>
           </TableCell>
                  </TableRow>
            
          </TableBody>
          
        </Table>

        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-2 py-6">
          <div className="flex flex-col space-y-2">
            &nbsp;
          </div>
          <div className="flex flex-col space-y-2">
            <Label htmlFor="totalTaux">Montant</Label>
            <h3 className="text-red-500 font-bold">{calculatedValue !== undefined ? calculatedValue.toString() : ''}</h3>
          </div>
          <div className="flex flex-col space-y-2">
            &nbsp;
          </div>
        </div>
      </Card>
    </div>

    

    
  );
}

export default TarifSearch;