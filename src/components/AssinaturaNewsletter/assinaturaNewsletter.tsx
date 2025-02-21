import styles from "./AssinaturaNewsletter.module.css";

export default function AssinaturaNewsletter() {
  return (
    <section className={styles.container}>
      <div className={styles.container__texto}>
        <h4 className={`subtitulo ${styles.subtitulo}`}>Sua casa com as</h4>
        <h2 className={`titulo ${styles.titulo}`}>melhores plantas</h2>
        <p className={styles.paragrafo}>
          Encontre aqui uma vasta seleção de plantas para decorar a sua casa e
          torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu e-mail
          e assine nossa newsletter para saber das novidades da marca.
        </p>
        <div className={styles.container__input}>
            <input className={styles.input__email} type="email" placeholder="Insira seu e-mail" />
            <button className={styles.btn}>Assinar newsletter</button>
        </div>
      </div>
      <div className={styles.container__imagem}>
      </div>
    </section>
  );
}
