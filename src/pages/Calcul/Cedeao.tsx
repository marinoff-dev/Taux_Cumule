import { PageTitle } from "@/components/shared"
import { Outlet } from "react-router-dom"


const Cedeao = () => {
  return (
    <div>
      <PageTitle>Calcul du taux de la CEDEAO</PageTitle>
      <Outlet/>
    </div>
  )
}

export default Cedeao