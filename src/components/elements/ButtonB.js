import styles from "./ButtonB.module.css";

export default function ButtonB({ text, link }) {
  return (
    <div>
      <a href={link} target="blank">
        <button className={styles.btn}> {text} </button>
      </a>
    </div>
  );
}
