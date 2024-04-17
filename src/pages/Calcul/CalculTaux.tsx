import { PageTitle } from "@/components/shared"
import { Outlet } from "react-router-dom"


const CalculTaux = () => {
  return (
    <div>
      <PageTitle>Calcul de taux</PageTitle>
      <Outlet/>
    </div>
  )
}

export default CalculTaux