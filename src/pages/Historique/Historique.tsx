import { PageTitle } from "@/components/shared"
import { Outlet } from "react-router-dom"

const historiques = () => {
  return (
    <div>
      <PageTitle>Historique des calculs</PageTitle>
      <Outlet/>
    </div>
  )
}

export default historiques