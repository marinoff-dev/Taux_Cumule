import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
  } from "@/components/ui/table";
  
  import { invoices } from "@/utils/_constants"; // Importez le tableau invoices directement
  
  const TarifsList = () => {
	return (
	  <>
		<Table>
		  <TableHeader>
			<TableRow>
			  <TableHead className="w-[100px]">Invoice</TableHead>
			  <TableHead>Status</TableHead>
			  <TableHead>Method</TableHead>
			  <TableHead className="text-right">Amount</TableHead>
			</TableRow>
		  </TableHeader>
		  <TableBody>
			{invoices.map((invoice) => (
			  <TableRow key={invoice.invoice}>
				<TableCell className="font-medium">{invoice.invoice}</TableCell>
				<TableCell>{invoice.paymentStatus}</TableCell>
				<TableCell>{invoice.paymentMethod}</TableCell>
				<TableCell className="text-right">{invoice.totalAmount}</TableCell>
			  </TableRow>
			))}
		  </TableBody>
		</Table>
	  </>
	);
  };
  
  export default TarifsList;