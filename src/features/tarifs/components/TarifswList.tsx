import React from "react";
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

const TarifswList = () => {
  const { isLoading, error, data: tarifs } = useGetTarifswQuery();

  if (isLoading) return <p>En cours de chargement ....</p>;
  if (error)
    return (
      <p className="text-red-800 font-semibold text-2xl">Erreur ...</p>
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
          {tarifs && tarifs.map((tarif, index) => (
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
                <Link to={`/modifier/${tarif.id}`}>
                  <Button className="btn btn-info btn-round">Modifier</Button>
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default TarifswList;