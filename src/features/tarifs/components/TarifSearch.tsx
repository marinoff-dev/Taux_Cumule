import React, { useState , useEffect } from "react";
import { useGetTarifswByNomenclatureQuery } from "@/services/index";
import "./SearchBar.css";
import { error } from "console";

function TarifSearch() {
  const [value, setValue] = useState<number | undefined>(undefined);
  const [userInput, setUserInput] = useState<string>("");
  const [libelle, setLibelle] = useState<string>("");
  const { data: libelleData, isLoading, refetch } = useGetTarifswByNomenclatureQuery(value !== undefined ? value : 0);
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

  if (isLoading) {
    return <div>Chargement en cours...</div>;
  }


   

  return (
    <div className="searchBar">
      <input type="text" className="searchInput" value={userInput} onChange={handleInputChange} />
      <button onClick={handleButtonClick}>Rechercher</button>
      
      <div>Libellé: {libelleData?.libelle || 'N/A'}</div> 
    </div>
  );
}

export default TarifSearch;