import styles from "./Menu.module.css";
import logo from "assets/images/logo.png";

export default function Menu() {
  return (
    <header className={styles.cabecalho}>
      <img src={logo} alt="Logo da casa verde." />
      <nav className={styles.menu}>
            <a href="/" className={styles.menu__item}>Como fazer <span className={styles.menu__item__barra}>/</span></a>
            <a href="/" className={styles.menu__item}>Ofertas <span className={styles.menu__item__barra}>/</span></a>
            <a href="/" className={styles.menu__item}>Depoimentos <span className={styles.menu__item__barra}>/</span></a>
            <a href="/" className={styles.menu__item}>Vídeos <span className={styles.menu__item__barra}>/</span></a>
            <a href="/" className={styles.menu__item}>Meu carrinho</a>
      </nav>
    </header>
  );
}
