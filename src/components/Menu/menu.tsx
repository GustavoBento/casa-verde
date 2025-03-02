import { useState } from "react";
import styles from "./Menu.module.css";
import logo from "assets/images/logo.png";

export default function Menu() {
  const [menu, setMenu] = useState<boolean>(false);

  function abrirMenu() {
    setMenu(true);
  }

  function fecharMenu() {
    setMenu(false);
  }
  console.log(menu);

  return (
    <header className={styles.cabecalho}>
      <img src={logo} alt="Logo da casa verde." />
      <nav className={`${styles.menu} ${menu ? styles.active : ""}  `}>
        <ul>
          <li className={styles.menu__item}>
            <a href="/">Como fazer</a>
          </li>
          <li className={styles.menu__item}>
            <a href="/">Ofertas</a>
          </li>
          <li className={styles.menu__item}>
            <a href="/">Depoimentos</a>
          </li>
          <li className={styles.menu__item}>
            <a href="/">Vídeos</a>
          </li>
          <li className={styles.menu__item}>
            <a href="/">Meu carrinho</a>
          </li>
        </ul>
      </nav>
      <span
        /* style={{ display: menu ? "none" : "block" }} */
        onClick={abrirMenu}
        className={`material-symbols-outlined ${styles.btn__menu} ${menu ? "" : styles.active}`}
      >
        menu
      </span>
      <span
        style={{ display: menu ? "block" : "none" }}
        className={`material-symbols-outlined ${styles.btn__menu} ${
          menu ? styles.fechar : ""
        }`}
        onClick={fecharMenu}
      >
        close
      </span>
      <div className={menu ? styles.overlay__ativo : styles.overlay}></div>
    </header>
  );
}
