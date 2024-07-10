import React, { useState } from "react";
import { Link } from "react-router-dom";

import { useGetHistoriqueQuery} from "@/services";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { Pencil, Search } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";



const HistoriqueForm: React.FC = () => {
    const { isLoading, error, data: tarifs } = useGetHistoriqueQuery();
    const itemsPerPage: number = 10;
    const [page, setPage] = useState<number>(1);
    const [searchTerm, setSearchTerm] = useState<string>("");

    if (isLoading) return <p>En cours de chargement ....</p>;
    if (error)
      return (
        <p className="text-red-800 font-semibold text-2xl">Erreur ...</p>
      );

    // Si tarifs est undefined, on retourne une valeur par défaut
    const tarifsArray = tarifs ?? [];

 
   



   
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setSearchTerm(e.target.value);
        setPage(1);
    };

    return (
        <div className="overflow-x-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-2 py-4 items-start">
                <div className="flex flex-col space-y-2 relative">
                    <Label htmlFor="nomenclature">Nomenclature</Label>
                    <div className="relative">
                        <Input
                            type="text"
                            placeholder="Recherche"
                            className="pl-8 pr-4"
                            value={searchTerm}
                            onChange={handleInputChange}
                        />
                        <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer" />
                    </div>
                </div>
            </div>
            <table className="table-auto border border-gray-400 w-full text-xs ">
                <thead className="bg-blue-500">
                    <tr className="text-white">
                        <th className="px-4 py-2">Nomenclature</th>
                        <th className="px-4 py-2">Taux</th>
                      
                        <th className="px-4 py-2 text-right">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    
                </tbody>
            </table>
                 </div>
    );
};

export default HistoriqueForm;
