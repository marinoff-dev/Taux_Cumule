import { PageTitle } from "@/components/shared"
import { Outlet } from "react-router-dom"


const Uemoa = () => {
  return (
    <div>
      <PageTitle>Calcul du taux de l'UEMOA</PageTitle>
      <Outlet/>
    </div>
  )
}

export default Uemoa