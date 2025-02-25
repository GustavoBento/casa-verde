import { useState } from "react";
import styles from "./AssinaturaNewsletter.module.css";

export default function AssinaturaNewsletter() {
  const [email, setEmail] = useState<string>('')

  function enviarEmail(evento: React.FormEvent<HTMLFormElement>) {
    evento.preventDefault();
    alert(`Obrigado pela sua assinatura, você receberá nossas novidades no e-mail ${email} `)
  }
  
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
          <form onSubmit={enviarEmail}>
            <input
              className={styles.input__email}
              type="email"
              placeholder="Insira seu e-mail"
              required
              value={email}
              onChange={(evento) => setEmail(evento.target.value)}
            />
            <button type="submit" className={styles.btn}>Assinar newsletter</button>
          </form>
        </div>
      </div>
      <div className={styles.container__imagem}></div>
    </section>
  );
}
