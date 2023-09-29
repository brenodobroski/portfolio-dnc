import styles from "./Skills.module.css";
import javascript from "../../image/javascript.svg";
import html from "../../image/html.svg";
import css from "../../image/css.svg";
import react from "../../image/react.svg";
import typescript from "../../image/typescript.svg";

export default function Skills() {
  return (
    <div id="Skills" className={styles.skills}>
      <h1>Habilidades</h1>
      <p>Conheça um pouco das minhas principais habilidades e conhecimentos.</p>

      <div>
        <img src={javascript} alt="ERROR" />
        <img src={html} alt="ERROR" />
        <img src={css} alt="ERROR" />
        <img src={react} alt="ERROR" />
        <img src={typescript} alt="ERROR" />
      </div>
    </div>
  );
}
