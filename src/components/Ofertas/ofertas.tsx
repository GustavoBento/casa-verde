import { useState } from "react";
import styles from "./Ofertas.module.css";
import Produtos from "./Produtos/produtos";
import produtosData from "data/produtos.json";

export default function Ofertas() {
  const [filtro, setFiltro] = useState<string>("padrao");
  const produtosFiltrados = [...produtosData].sort((a, b) => {
    if (filtro === "nome") {
      return a.nome.localeCompare(b.nome);
    } else if (filtro === "preco") {
      return parseFloat(a.valor) - parseFloat(b.valor);
    }
    return 0;
  });

  return (
    <section className={styles.container}>
      <div className={styles.container__filtroEOfertas}>
        <div className={styles.filtro}>
          <span className="material-symbols-outlined">filter_alt</span>
          <select
            value={filtro}
            onChange={(event) => setFiltro(event.target.value)}
          >
            <option value="padrao">Padrão</option>
            <option value="nome">Nome</option>
            <option value="preco">Preço</option>
          </select>
        </div>
        <div className={styles.ofertas}>
          <h4 className={`subtitulo ${styles.subtitulo}`}>Conheça nossas</h4>
          <h2 className={`titulo ${styles.titulo}`}>ofertas</h2>
        </div>
      </div>
      <div className={styles.container__produtos}>
        {produtosFiltrados.map((produto) => {
          if (produto.estoque > 0) {
            return <Produtos key={produto.id} {...produto} />;
          }
          return null;
        })}
      </div>
    </section>
  );
}
