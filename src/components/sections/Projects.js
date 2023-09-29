import styles from "./Projects.module.css";
import Card from "../elements/Cards";
import dnc from "../../image/dnc.svg";
import walletapp from "../../image/walletapp.svg";
import ButtonB from "../elements/ButtonB";

export default function Projects() {
  return (
    <div id="Projects" className={styles.projects}>
      <h1>Projetos</h1>
      <Card
        img={dnc}
        title="Projeto XPTO"
        tech=" HTML, CSS, JS"
        desc="Projeto Front-End para realizar pipipi e popo."
        linkImagem="https://github.com/brenodobroski"
      />
      <Card
        img={walletapp}
        title="Wallet App"
        tech=" HTML, CSS, JS"
        desc="Projeto Front-End para guardar dados financeiros"
        linkImagem="https://github.com/brenodobroski/Wallet-App/tree/master"
        linkButton="https://github.com/brenodobroski/Wallet-App/tree/master"
      />
    </div>
  );
}
