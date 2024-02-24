import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function HomePage() {
  return (
    <section className="w-screen h-screen flex justify-center items-center flex-col">
      <div className="">
        <h1 className="text-center text-2xl">Página inicial da aplicação!</h1>
        <h2 className="text-center text-base">Este é um template que utiliza</h2>
        <ul className="mt-4">
          <li>Vite</li>
          <li>Tailwind</li>
          <li>Shadcn-ui</li>
          <li>React Router Dom</li>
        </ul>
        <div className="w-full mt-4 flex justify-center items-center">
          <Link to="/app" className="text-blue-500 underline">
            <Button>Navegar para página privada</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
