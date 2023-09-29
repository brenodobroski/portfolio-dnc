import styles from "./Card.module.css";
import ButtonB from "../elements/ButtonB";
import { useState } from "react";

export default function Card({
  title,
  tech,
  desc,
  linkImagem,
  linkButton,
  img,
}) {
  const [info, setInfo] = useState(false);

  function InfoOn() {
    setInfo(true);
  }

  function InfoOff() {
    setInfo(false);
  }

  return (
    <div onMouseLeave={InfoOff} className={styles.card}>
      <a onMouseEnter={InfoOn} href={linkImagem} target="blank">
        <img src={img} alt="ERROR" />
      </a>

      {info === true && (
        <section>
          <h2>{title}</h2>
          <p>
            <strong>Tecnologias:</strong> {tech}
          </p>
          <p>{desc}</p>

          <ButtonB text="Acesse o repositório" link={linkButton} />
        </section>
      )}
    </div>
  );
}
