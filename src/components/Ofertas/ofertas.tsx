import styles from "./Ofertas.module.css";
import Produtos from "./Produtos/produtos";
import produto1 from "./Imagens/produto1.png";
import produto2 from "./Imagens/produto2.png";
import produto3 from "./Imagens/produto3.png";
import produto4 from "./Imagens/produto4.png";
import produto5 from "./Imagens/produto5.png";
import produto6 from "./Imagens/produto6.png";

export default function Ofertas() {
  return (
    <section className={styles.container}>
      <h4 className={`subtitulo ${styles.subtitulo}`}>Conheça nossas</h4>
      <h2 className={`titulo ${styles.titulo}`}>ofertas</h2>
      <div className={styles.container__produtos}>
        <Produtos
          imagem={produto1}
          nomePlanta="Ajuga reptans"
          valorPlanta="R$ 20,99"
        />
        <Produtos
          imagem={produto2}
          nomePlanta="Cordyline fruticosa"
          valorPlanta="R$ 24,99"
        />
        <Produtos
          imagem={produto3}
          nomePlanta="Crassula ovata"
          valorPlanta="R$ 29,99"
        />
      </div>
      <div className={styles.container__produtos}>
        <Produtos
          imagem={produto4}
          nomePlanta="Cyperus rotundus"
          valorPlanta="R$ 20,99"
        />
        <Produtos
          imagem={produto5}
          nomePlanta="Delairea odorata"
          valorPlanta="R$ 27,99"
        />
        <Produtos
          imagem={produto6}
          nomePlanta="Datura metel"
          valorPlanta="R$ 29,99"
        />
      </div>
    </section>
  );
}
