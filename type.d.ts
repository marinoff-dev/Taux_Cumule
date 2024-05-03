type Tarifsw = {
    id?: string;
    nomenclature: string;
    libelle: string;
    pc: number;
    ps: number;
    pcs: number;
    rs: number;
    rau: number;
    tst: number;
    dd_sw: number;
    tva: number;
    ddSh2022: number;
    codeUnite: number;
    ect: number;
    da: number;
    caf: number;
    ttv: number;
    tfs: number;
    tsr: number;
  };
  
  type tarifswState = {
    tarifswList: Tarifsw[];
    sheetState: boolean;
  };
  type actionType = {
    type: string;
    payload: any;
  };
  
  type stateType = {
    tarifsw: tarifswState;
  };
