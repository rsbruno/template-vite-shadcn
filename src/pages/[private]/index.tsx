import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function HomePrivatePage() {
  return (
    <section className="w-screen h-screen flex justify-center items-center flex-col">
      <div className="">
        <h1 className="text-center text-2xl">Página Privada!</h1>
        <h2 className="text-center text-base max-w-60">
          Este é um exemplo de como fazer o rotemanto de páginas privadas
        </h2>
        <div className="w-full mt-4 flex justify-center items-center">
          <Link to="/" className="text-blue-500 underline">
            <Button>Navegar para página privada</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
