import { Outlet } from "react-router-dom";
import { Header, NavMenu } from "./layouts";
import { Toaster } from "@/components/ui/sonner"

function App() {
  return (
    <div className="grid  min-h-screen w-full md:grid-cols-[220px_1fr]">
      <div className="hidden md:block bg-muted/40 border-r">
        <NavMenu />
      </div>
      <div className="flex flex-col">
        <Header />
        <main className="flex-1 p-4">
          <Outlet />
          <Toaster />
        </main>
      </div>
    </div>
  );
}

export default App;