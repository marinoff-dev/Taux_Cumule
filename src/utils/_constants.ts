export const invoices = [
	{
		nomenclature: "",
		libelle: "",
		pc: "",
		pcs: "",
		ps: "",
		rs: "",
		rau: "",
		tst: "",
		dd_sw: "",
		tva: "",
		da: "",
		caf: "",
		ect: "",
		ttv: "",
		tfs: "",
		tsr: "",
		ddSh2022: "",
	 
	},
	
  ];

  export const  taux = [

  ];
 

export const API_URL = import.meta.env.VITE_API_URL || "/api/tarifs";
export const TARIFSW_URL = `${API_URL}/`;

export const TARIFSW_ACTIONS = {
    ADD : "add-tarifsw",
    SET:  "set-tarifsw"
}

export const LS_TOKEN_KEY = "tokens"