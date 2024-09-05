/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect } from "react";
import { Avatar } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { User, Globe, BadgePercent, Plus } from "lucide-react";
import MyBarChart from "@/features/tarifs/components/GrapheBar";
import { useGetTauxByNomenclatureQuery } from "@/services/index";

const Home: React.FC = () => {
const [value, setValue] = useState<number | undefined>(undefined);
const [userInput, setUserInput] = useState<string>("");
const [counter, setCounter] = useState<number>(0);



 

  async function handleButtonClicktaux() {
    try {
      const response = await fetch(`http://localhost:8080/api/tarif/taux/${userInput}`);
      const counter = await response.json();
      console.log("la valeur du compter est : ", counter);
      setCounter(counter);
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
                <p className="text-sm text-muted-foreground text-blue-500 font-bold">
                {/* {counter !== undefined ? counter: 'N/A'} */} 01
                </p>
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
                <p className="text-lg font-medium">Nombre de Positions</p>
                <p className="text-sm text-muted-foreground text-blue-500 font-bold">
                  {/* Nbre de position */}
                {/* {counter !== undefined ? counter: 'N/A'}  */}00
                </p>
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
                <p className="text-sm text-muted-foreground text-blue-500 font-bold">00</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="container mx-auto p-12">
        <div className="card p-12">
          <div className="w-full h-96">
            <MyBarChart />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
