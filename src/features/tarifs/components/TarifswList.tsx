import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useGetTarifswQuery } from "@/services";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";

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
    <div style={{ overflowX: "auto" }}>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Nomenclature</TableHead>
            <TableHead>Libellé</TableHead>
			<TableHead>pc</TableHead>
			<TableHead>pcs</TableHead>
			<TableHead>ps</TableHead>
			<TableHead>rs</TableHead>
			<TableHead>rau</TableHead>
			<TableHead>tst</TableHead>
			<TableHead>dd</TableHead>
			<TableHead>tva</TableHead>
			<TableHead>da</TableHead>
			<TableHead>caf</TableHead>
			<TableHead>ect</TableHead>  
			<TableHead>ttv</TableHead>
			<TableHead>tfs</TableHead>
			<TableHead>ddsh2022</TableHead>
            {/* Ajoutez les autres en-têtes de colonnes ici */}
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tarifsPage && tarifsPage.map((tarif, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">{tarif.nomenclature}</TableCell>
					<TableCell>{tarif.libelle}</TableCell>
					<TableCell>{tarif.pc}</TableCell>
					<TableCell>{tarif.pcs}</TableCell>
					<TableCell>{tarif.ps}</TableCell>
					<TableCell>{tarif.rs}</TableCell>
					<TableCell>{tarif.rau}</TableCell>
					<TableCell>{tarif.tst}</TableCell>
					<TableCell>{tarif.dd_sw}</TableCell>
					<TableCell>{tarif.tva}</TableCell>
					<TableCell>{tarif.da}</TableCell>
					<TableCell>{tarif.caf}</TableCell>
					<TableCell>{tarif.ect}</TableCell>  
					<TableCell>{tarif.ttv}</TableCell>
					<TableCell>{tarif.tfs}</TableCell>
					<TableCell>{tarif.ddSh2022}</TableCell>
              <TableCell className="text-right">
                {/*<Link to={}>*/}
                  <Button className="btn btn-info btn-round">Modifier</Button>
                {/*</Link>*/}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    
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