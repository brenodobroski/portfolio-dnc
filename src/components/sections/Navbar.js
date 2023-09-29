import styles from "./Navbar.module.css";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import Nav from "react-bootstrap/Nav";

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <ul>
        <li>
          <Nav.Link href="#Presentation">Apresentação</Nav.Link>
        </li>
        <li>
          <Nav.Link href="#Skills">Habilidades</Nav.Link>
        </li>
        <li>
          <Nav.Link href="#Projects">Projetos</Nav.Link>
        </li>
      </ul>
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
    </div>
  );
}
