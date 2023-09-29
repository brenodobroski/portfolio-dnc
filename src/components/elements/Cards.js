import styles from "./Card.module.css";
import dnc from "../../image/dnc.svg";
import ButtonB from "../elements/ButtonB";

export default function Card({
  title,
  tech,
  desc,
  linkImagem,
  linkButton,
  img,
}) {
  return (
    <div className={styles.card}>
      <a href={linkImagem} target="blank">
        <img src={img} alt="ERROR" />
      </a>

      <section>
        <h2>{title}</h2>
        <p>
          <strong>Tecnologias:</strong> {tech}
        </p>
        <p>{desc}</p>

        <ButtonB text="Acesse o repositório" link={linkButton} />
      </section>
    </div>
  );
}
