interface CharacterProps {
  name: string;
  nickname: string;
  location: string;
  hobbies: string[];
  origin: "Greek Mythology" | "Roman Mythology" | "Marvel Comics" | "DC Comics";
}

function Character(props: CharacterProps) {
  return (
    <div className="character-card">
      <h2>{props.name.toUpperCase()}</h2>
      <h3>the legendary</h3>
      <p>
        <i>Good to have you here, {props.name}!</i>
      </p>
      <p>
        <b>Location:</b> {props.location}
      </p>
      <p>
        <b>Hobbies:</b> {props.hobbies.join(", ")}
      </p>
      <p>{props.name} originates from props.origin</p>
    </div>
  );
}

export default Character;
