import React, { useState } from "react";
import { useGetTarifswByNomenclatureQuery } from "@/services/index";
import "./SearchBar.css";

type Tarifsw = {
  id?: string;
  nomenclature: number;
  libelle: string;
  pc: number;
  ps: number;
  pcs: number;
  rs: number;
  rau: number;
  tst: number;
  dd_sw: number;
  tva: number;
  ddsh2022: number;
  codeUnite: number;
  etc: number;
  da: number;
  caf: number;
  ttv: number;
  tfs: number;
  tsr: number;
};

function TarifSearch() {
    const [value, setValue] = useState<number | undefined>(undefined);
    
    
  const [selectedLibelle, setSelectedLibelle] = useState("");


  const [inputValue, setInputValue] = useState(""); 

  const { data: tarifswData, isLoading } = useGetTarifswByNomenclatureQuery(
    value !== undefined ? value : 0
  );

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const inputValue = event.target.value.trim();
    const parsedValue = parseInt(inputValue, 10);
  
    if (!isNaN(parsedValue)) {
      setValue(parsedValue);
    } else {
      setValue(undefined); // Utiliser undefined au lieu de null
    }
    setInputValue(inputValue);
  }

        function handleLibelleClick(libelle: string) {
            setSelectedLibelle(libelle);
            setInputValue(libelle); // Mettre à jour l'état inputValue
          }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  console.log("tarifswData:", tarifswData);
  console.log("value:", value);



   
  
  return (
    <div className="searchBar">
      <div className="inputSearch">
        <input
          type="text"
          value={value}
          onChange={handleInputChange}
          placeholder="Rechercher"
        />
        <button onClick={() => console.log(value)}>
          <span className="material-symbols-outlined">search</span>
        </button>
      </div>
            <ul>
                    {Array.isArray(tarifswData) &&
                        value &&
                        tarifswData
                    .filter((element: Tarifsw) =>
                    element.libelle.toLowerCase().includes(value.toString().toLowerCase())
                    )
                    .map((element: Tarifsw, index: number) => (
                    <li onClick={() => handleLibelleClick(element.libelle)} key={index}>
                        {element.libelle}
                    </li>
                    ))}
      </ul>

      {selectedLibelle && (
        <div>
          <label htmlFor="libelle">Libelle</label>
          <input
                type="text"
                value={inputValue} // Utiliser inputValue au lieu de value
                onChange={handleInputChange}
                placeholder="Rechercher"
/>
        </div>
      )}
    </div>
  );
}

export default TarifSearch;