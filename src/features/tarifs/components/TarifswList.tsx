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
  
  import { invoices } from "@/utils/_constants"; // Importez le tableau invoices directement
import { Link } from "react-router-dom";
  
  const TarifswList = () => {
	const { isLoading, error, data: tarifs } = useGetTarifswQuery()

	{if (isLoading) return <p>En cours de chargement ....</p>;
	if (!isLoading && error)
		return (
		<p className="text-red-800 font-semibold text-2xl">Erreur ...</p>
	);	}
	return (
		<div style={{ overflowX: "auto" }}>
			<Table>
				<TableHeader>
					<TableRow>
					<TableHead className="w-[100px]">Nomenclature</TableHead>
					<TableHead>Libellé</TableHead>
					<TableHead>PC</TableHead>
					<TableHead>PCS</TableHead>
					<TableHead>PS</TableHead>
					<TableHead>RS</TableHead>
					<TableHead>RAU</TableHead>
					<TableHead>TST</TableHead>
					<TableHead>DD</TableHead>
					<TableHead>TVA</TableHead>
					<TableHead>DA</TableHead>
					<TableHead>CAF</TableHead>
					<TableHead>ECT</TableHead>
					<TableHead>TTV</TableHead>
					<TableHead>TSR</TableHead>
					<TableHead>DDSH2022</TableHead>
					<TableHead className="text-right">Actions</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{tarifs && tarifs.map((tarif: Tarifsw) => (
					<TableRow >
						<TableCell className="font-medium">{tarif.nomenclature}</TableCell>
						<TableCell>{tarif.libelle}</TableCell>
						<TableCell>{tarif.pc}</TableCell>
						<TableCell>{tarif.pcs}</TableCell>
						<TableCell>{tarif.ps}</TableCell>
						<TableCell>{tarif.rs}</TableCell>
						<TableCell>{tarif.rau}</TableCell>
						<TableCell>{tarif.tst}</TableCell>
						<TableCell>{tarif.dd}</TableCell>
						<TableCell>{tarif.tva}</TableCell>
						<TableCell>{tarif.da}</TableCell>
						<TableCell>{tarif.caf}</TableCell>
						<TableCell>{tarif.ect}</TableCell>  
						<TableCell>{tarif.ttv}</TableCell>
						<TableCell>{tarif.tfs}</TableCell>
						<TableCell>{tarif.ddsh2022}</TableCell>
						<TableCell className="text-right">
							<Link to="">
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