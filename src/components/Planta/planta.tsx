import Item from "./Item/item";
import styles from "./Planta.module.css";
import mask from "assets/images/planta-mask.png";


export default function Planta() {
  return (
    <section className={styles.container}>
      <div className={styles.container__imagem}>
        <img className={styles.imagem} src={mask} alt="Imagem de uma planta mask" />
      </div>
      <div className={styles.conteudo}>
        <h4 className={`subtitulo ${styles.subtitulo}`}>Como conseguir</h4>
        <h2 className={`titulo ${styles.titulo}`}>minha planta</h2>
        <Item>Escolha suas plantas</Item>
        <Item>Faça seu pedido</Item>
        <Item>Aguarde na sua casa</Item>
      </div>
    </section>
  );
}
