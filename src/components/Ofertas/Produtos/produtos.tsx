import styles from "./Produtos.module.css";

interface Props {
  imagem: string;
  nomePlanta: string;
  valorPlanta: string;
}

export default function Produtos({ imagem, nomePlanta, valorPlanta }: Props) {
  return (
    <div className={styles.container}>
      <img src={imagem} alt="Imagem da planta em oferta" />
      <div className={styles.container__produto}>
        <h3 className={`titulo ${styles.titulo}`}>{nomePlanta}</h3>
        <h4 className={`subtitulo ${styles.subtitulo}`}>{valorPlanta}</h4>
        <p className={styles.paragrafo}>
          Comprar{" "}
          <span className="material-symbols-outlined">arrow_right_alt</span>
        </p>
      </div>
    </div>
  );
}
