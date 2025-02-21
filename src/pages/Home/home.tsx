import AssinaturaNewsletter from "components/AssinaturaNewsletter/assinaturaNewsletter";
import Menu from "components/Menu/menu";
import Ofertas from "components/Ofertas/ofertas";
import Planta from "components/Planta/planta";

export default function Home() {
      return (
            <main>
                  <Menu />
                  <AssinaturaNewsletter />
                  <Planta />
                  <Ofertas />
            </main>
      )
}