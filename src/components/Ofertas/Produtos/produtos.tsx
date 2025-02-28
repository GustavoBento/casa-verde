import styles from "./Produtos.module.css";

interface Props {
  nome: string;
  valor: string;
  imagem: string;
}
export default function Produtos({ imagem, nome, valor }: Props) {
  return (
    <div className={styles.container}>
      <img
        className={styles.produtos}
        src={imagem}
        alt="Imagem da planta em oferta"
      />
      <div>
        <h3 className={`titulo ${styles.titulo}`}>{nome}</h3>
        <h4 className={`subtitulo ${styles.subtitulo}`}>{valor}</h4>
        <p className={styles.paragrafo}>
          Comprar{" "}
          <span className="material-symbols-outlined">arrow_right_alt</span>
        </p>
      </div>
    </div>
  );
}
