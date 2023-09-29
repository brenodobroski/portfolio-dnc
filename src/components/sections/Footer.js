import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import ButtonB from "../elements/ButtonB";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <ButtonB text="Ver repositório Completo" />
      <ul>
        <li>
          <a target="blank" href="https://instagram.com/breno.dobroski">
            <FaInstagram size={30} />
          </a>
        </li>
        <li>
          <a target="blank" href="https://github.com/brenodobroski">
            <FaGithub size={30} />
          </a>
        </li>
        <li>
          <a target="blank" href="https://linkedin.com/in/brenodobroski">
            <FaLinkedin size={30} />
          </a>
        </li>
      </ul>
      <p>brenodobroski@gmail.com</p>
      <p>Breno Dobroski © 2023</p>
    </div>
  );
}
