import styles from "./Item.module.css";
import ellipse from "assets/images/Ellipse.png";

interface Props {
  children: React.ReactNode;
}

export default function Item({ children }: Props) {
  return (
    <div className={styles.container__item}>
      <img src={ellipse} alt="circulo amarelo" />
      <p> {children}</p>
    </div>
  );
}
