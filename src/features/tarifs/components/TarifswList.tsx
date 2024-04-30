import { useState } from "react";
import { Link } from "react-router-dom";
import { useGetTarifswQuery } from "@/services";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { Pencil } from "lucide-react";

const TarifswList = () => {
    const { isLoading, error, data: tarifs } = useGetTarifswQuery();
    const itemsPerPage = 10; // Nombre d'éléments à afficher par page
    const [page, setPage] = useState(1);
  
    if (isLoading) return <p>En cours de chargement ....</p>;
    if (error)
      return (
        <p className="text-red-800 font-semibold text-2xl">Erreur ...</p>
      );
  
    // Si tarifs est undefined, on retourne une valeur par défaut
    const tarifsArray = tarifs ?? [];
  
    /// Calcul de l'index de début et de fin pour afficher les éléments de la page actuelle
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    // Récupération des éléments de la page actuelle
    const tarifsPage = tarifsArray.slice(startIndex, endIndex);
  
    // Calcul du nombre total de pages
    const totalPages = Math.ceil(tarifsArray.length / itemsPerPage);
  
    // Création d'un tableau contenant les numéros de page à afficher
    const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);
  
    // Filtrage des numéros de page à afficher en fonction de la page actuelle et du nombre total de pages
    const visiblePageNumbers = pageNumbers.filter(
      (number) => number === 1 || number === page || number === totalPages || (number >= page - 2 && number <= page + 2)
    );

    return (
        <div className="overflow-x-auto">
            <table className="table-auto border border-gray-400">
                <thead className="bg-gray-200">
                    <tr>
                        <th className="px-4 py-2">Nomenclature</th>
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
                    {tarifsPage && tarifsPage.map((tarif, index) => (
                        <tr key={index} className={(index % 2 === 0) ? 'bg-gray-100' : 'bg-white'}>
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
                                  <Pencil />
                              </Link>
                            </td>

                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Pagination */}
            <Pagination className="py-4">
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
                    {visiblePageNumbers.map((number) => (
                        <PaginationItem key={number}>
                            <PaginationLink
                                href="#"
                                isActive={page === number}
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
