import { Button } from "@/components/ui/button";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
  } from "@/components/ui/table";
  
  import { invoices } from "@/utils/_constants"; // Importez le tableau invoices directement
import { Link } from "react-router-dom";
  
  const TarifswList = () => {
	//const { isLoading, error, data: tarifs } = useGetTarifsQuery()

	{/*if (isLoading) return <p>En cours de chargement ....</p>;
	if (!isLoading && error)
		return (
		<p className="text-red-800 font-semibold text-2xl">Erreur ...</p>
	);	*/}
	return (
		<div style={{ overflowX: "auto" }}>
			<Table>
				<TableHeader>
					<TableRow>
					<TableHead className="w-[100px]">Nomenclature</TableHead>
					<TableHead>Libellé</TableHead>
					<TableHead>Code Unité</TableHead>
					<TableHead>PCS</TableHead>
					<TableHead>PS</TableHead>
					<TableHead>PC</TableHead>
					<TableHead>RS</TableHead>
					<TableHead>DD</TableHead>
					<TableHead>RAU</TableHead>
					<TableHead>T.TEL</TableHead>
					<TableHead>ECT</TableHead>
					<TableHead>DA</TableHead>
					<TableHead>AIB</TableHead>
					<TableHead>TST</TableHead>
					<TableHead>TVA</TableHead>
					<TableHead>DDSH2022</TableHead>
					<TableHead>ECT</TableHead>
					<TableHead className="text-right">Actions</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{invoices.map((invoice) => (
					<TableRow key={invoice.nom} >
						<TableCell className="font-medium">{invoice.nom}</TableCell>
						<TableCell>{invoice.libelle}</TableCell>
						<TableCell>{invoice.code}</TableCell>
						<TableCell>{invoice.PCS}</TableCell>
						<TableCell>{invoice.PS}</TableCell>
						<TableCell>{invoice.PC}</TableCell>
						<TableCell>{invoice.RS}</TableCell>
						<TableCell>{invoice.DD}</TableCell>
						<TableCell>{invoice.RAU}</TableCell>
						<TableCell>{invoice.TEL}</TableCell>
						<TableCell>{invoice.ECT}</TableCell>
						<TableCell>{invoice.DA}</TableCell>
						<TableCell>{invoice.AIB}</TableCell>
						<TableCell>{invoice.TST}</TableCell>
						<TableCell>{invoice.TVA}</TableCell>
						<TableCell>{invoice.ddsh2022}</TableCell>
						<TableCell>{invoice.ect}</TableCell>
						<TableCell className="text-right">
							<Link to="/admin/tarifs">
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