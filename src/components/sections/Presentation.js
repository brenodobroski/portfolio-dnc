import styles from "./Presentation.module.css";
import ButtonA from "../elements/ButtonA";

export default function Presentations() {
  return (
    <div id="Presentation" className={styles.presentation}>
      <p>
        <strong>Bem-vindo ao meu Portfólio</strong>
      </p>
      <h1>Olá, eu sou Breno</h1>
      <p>
        Sou um apaixonado por tecnologia e soluções inovadoras.Como <br />
        Product Manager, eu tenho o compromisso de resolver <br />
        problemascomplexos e trazer resultados excepcionais para os <br />
        negócios.Meus projetos já geraram milhões de reais em receita <br />
        anualestou sempre em busca de novos desafios para superar.
      </p>
      <ButtonA
        link="https://github.com/brenodobroski"
        text="Conecte-se comigo!! "
      />
    </div>
  );
}
