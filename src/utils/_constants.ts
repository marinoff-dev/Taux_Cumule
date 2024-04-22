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
		dd: "",
		tva: "",
		da: "",
		caf: "",
		ect: "",
		ttv: "",
		tfs: "",
		tsr: "",
		ddsh2022: "",
	 
	},
	
  ];

  export const  taux = [

  ];
 

export const API_URL = import.meta.env.VITE_API_URL || "/api";
export const TARIFSW_URL = `${API_URL}/tarif`;

export const TARIFSW_ACTIONS = {
    ADD : "add-tarifsw",
    SET:  "set-tarifsw"
}

export const LS_TOKEN_KEY = "tokens"