import React, { useState } from "react";
import { Link } from "react-router-dom";

import { useGetTarifswQuery } from "@/services";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { Pencil, Search } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";



const TarifswList: React.FC = () => {
    const { isLoading, error, data: tarifs } = useGetTarifswQuery();
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

    // Calcul de l'index de début et de fin pour afficher les éléments de la page actuelle
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    //filtres les elements du tableau et affiche le nouveau tablea
    const filteredTarifs: Tarifsw[] = tarifsArray.filter(tarif =>
        tarif.nomenclature.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tarif.libelle.toLowerCase().includes(searchTerm.toLowerCase()) 
    );

    // Récupération des éléments de la page actuelle
    const tarifsPage: Tarifsw[] = filteredTarifs.slice(startIndex, endIndex);

    // Calcul du nombre total de pages
    const totalPages = Math.ceil(tarifsArray.length / itemsPerPage);

   // Création d'un tableau contenant les numéros de page à afficher
   const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

    // Filtrage des numéros de page à afficher en fonction de la page actuelle et du nombre total de pages
    const visiblePageNumbers = pageNumbers.filter(
        (number) => number === 1 || number === page || number === totalPages || (number >= page - 2 && number <= page + 2)
      );

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
                        <th className="px-4 py-2">Code</th>
                        <th className="px-4 py-2">Libellé</th>
                        <th className="px-4 py-2">pc</th>
                        <th className="px-4 py-2">pcs</th>
                        <th className="px-4 py-2">ps</th>
                        <th className="px-4 py-2">rs</th>
                        <th className="px-4 py-2">rau</th>
                        <th className="px-4 py-2">tst</th>
                        <th className="px-4 py-2">dd</th>
                        <th className="px-4 py-2">tva</th>
                        <th className="px-4 py-2">da</th>
                        <th className="px-4 py-2">caf</th>
                        <th className="px-4 py-2">ect</th>
                        <th className="px-4 py-2">ttv</th>
                        <th className="px-4 py-2">tfs</th>
                        <th className="px-4 py-2">ddsh2022</th>
                        <th className="px-4 py-2 text-right">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {tarifsPage.map((tarif, index) => (
                        <tr key={index} className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}>
                            <td className="border px-4 py-2">{tarif.nomenclature}</td>
                            <td className="border px-4 py-2">{tarif.libelle}</td>
                            <td className="border px-4 py-2">{tarif.pc}</td>
                            <td className="border px-4 py-2">{tarif.pcs}</td>
                            <td className="border px-4 py-2">{tarif.ps}</td>
                            <td className="border px-4 py-2">{tarif.rs}</td>
                            <td className="border px-4 py-2">{tarif.rau}</td>
                            <td className="border px-4 py-2">{tarif.tst}</td>
                            <td className="border px-4 py-2">{tarif.dd_sw}</td>
                            <td className="border px-4 py-2">{tarif.tva}</td>
                            <td className="border px-4 py-2">{tarif.da}</td>
                            <td className="border px-4 py-2">{tarif.caf}</td>
                            <td className="border px-4 py-2">{tarif.ect}</td>
                            <td className="border px-4 py-2">{tarif.ttv}</td>
                            <td className="border px-4 py-2">{tarif.tfs}</td>
                            <td className="border px-4 py-2">{tarif.ddSh2022}</td>
                            <td className="border px-4 py-2 w-1/12">
                                <Link to={`/modifier/${tarif.id}`} className="w-full flex justify-end">
                                <Pencil className="text-blue-500 w-4 h-4"/>
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table><br/>

            <center>
                <div>
                    <h4 className="text-sm text-blue-500 font-bold hover:text-blue-700 hover:cursor-pointer">6323 positions</h4>
                </div>
            </center>

            
            <Pagination className="py-4 flex justify-end">
                <PaginationContent>
                    <PaginationItem>
                        <PaginationPrevious
                            href="#"
                            onClick={() => setPage(Math.max(page - 1, 1))}
                            className={page === 1 ? "opacity-50 cursor-not-allowed" : ""}
                        >
                            Précédent
                        </PaginationPrevious>
                    </PaginationItem>
                    {visiblePageNumbers.map(number => (
                        <PaginationItem key={number}>
                            <PaginationLink
                                href="#"
                                isActive={page === number}
                                className={`${page === number ? "bg-blue-600 text-white" : "text-gray-600"}`}
                                onClick={() => setPage(number)}
                            >
                                {number}
                            </PaginationLink>
                        </PaginationItem>
                    ))}
                    <PaginationItem>
                        <PaginationNext
                            href="#"
                            onClick={() => setPage(Math.min(page + 1, totalPages))}
                            className={page === totalPages ? "opacity-50 cursor-not-allowed" : ""}
                        >
                            Suivant
                        </PaginationNext>
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
        </div>
    );
};

export default TarifswList;
