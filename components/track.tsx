// import styles from "../styles/greeting.module.css";
type Props = {
  title: string;
  artist: string;
  imgSrc: string;
};

export function Tracks(props: Props) {
  return (
    <ol>
      <li>
        <div>
          <img
            src="https://images.unsplash.com/photo-1507808973436-a4ed7b5e87c9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8bXVzaWN8ZW58MHwyfDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt="Two guys with Horse masks playing accordion"
          />
          <h3>{props.title}</h3>
          <p>{props.artist}</p>
        </div>
      </li>
    </ol>
  );
}
