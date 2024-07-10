import { PageTitle } from "@/components/shared"
import { Outlet } from "react-router-dom"

const Historique = () => {
  return (
    <div>
      <PageTitle>Historique</PageTitle>
      <Outlet/>
    </div>
  )
}

export default Historique
