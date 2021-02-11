interface CharacterProps {
  name: string;
  nickname: string;
  location: string;
  hobbies: string[];
  origin: "Greek Mythology" | "Roman Mythology" | "Marvel Comics" | "DC Comics";
}



const CardsList: CharacterProps[] = [
  
  {name:"Medusa", nickname:"the one with snakes in her hair", location:"Sarpedon", hobbies:["turning people to stone", "baking sourdough bread"], origin:"Greek Mythology"},
  {name:"Spiderman", nickname:"peter parker", location:"friendly neighborhood", hobbies:["shooting webs", "climbing walls"], origin:"DC Comics"},
  {name:"Zeus", nickname:"Thunder God", location:"Mount Olympus", hobbies:["shooting thunderbolts", "ruling the skies"], origin:"Greek Mythology"}
]



function Character(props: CharacterProps) {
  return (
    <div className="character-card">
      <h2>{props.name.toUpperCase()}</h2>
      <h3>{props.nickname.toUpperCase()}</h3>
      <p>
        <i>Good to have you here, {props.name}!</i>
      </p>
      <p>
        <b>Location:</b> {props.location}
      </p>
      <p>
        <b>Hobbies:</b> {props.hobbies.join(", ")}
      </p>
      <p>{props.name} originates from {props.origin}</p>
    </div>
  );
}

export const Mapped = CardsList.map(Character);

