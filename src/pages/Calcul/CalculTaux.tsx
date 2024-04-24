import { PageTitle } from "@/components/shared"
import { Outlet } from "react-router-dom"


const CalculTaux = () => {
  return (
    <div>
      <PageTitle>Calcul du taux</PageTitle>
      <Outlet/>
    </div>
  )
}

export default CalculTaux