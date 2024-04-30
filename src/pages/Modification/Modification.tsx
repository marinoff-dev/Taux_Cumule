import { PageTitle } from "@/components/shared"
import { Outlet } from "react-router-dom"

const Modification = () => {
  return (
    <div>
      <PageTitle>Modification de tarif</PageTitle>
      <Outlet/>
    </div>
  )
}

export default Modification
