import styles from "../styles/greeting.module.css";
type Props = {
  name: string;
};

export default function Greeting(props: Props) {
  return (
    <p className={styles.greeting}>
      Moin, <span className={styles.name}>{props.name}</span>
    </p>
  );
}
