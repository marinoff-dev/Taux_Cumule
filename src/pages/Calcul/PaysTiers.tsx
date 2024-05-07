import { PageTitle } from "@/components/shared"
import { Outlet } from "react-router-dom"


const PaysTiers = () => {
  return (
    <div>
      <PageTitle>Calcul du taux des Pays Tiers</PageTitle>
      <Outlet/>
    </div>
  )
}

export default PaysTiers