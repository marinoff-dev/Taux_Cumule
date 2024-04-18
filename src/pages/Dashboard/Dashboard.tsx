import { PageTitle } from "@/components/shared"
import { Outlet } from "react-router-dom"


const Dashboard = () => {
  return (
	<div>
	  <PageTitle>Dashboard</PageTitle>
	  <Outlet/>
	</div>
  )
}

export default Dashboard