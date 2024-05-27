import { PageTitle } from "@/components/shared"
import { Outlet } from "react-router-dom"

const Tarifsw = () => {
  return (
    <div>
      <PageTitle>Liste des Nomenclatures</PageTitle>
      <Outlet/>
    </div>
  )
}

export default Tarifsw
