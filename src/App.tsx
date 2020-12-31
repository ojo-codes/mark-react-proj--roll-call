import React from "react";

function App() {
  return (
    <div>
      <h1>Roll call!</h1>
      <Character
        name="Medusa"
        nickname="the one with snakes in her hair"
        location="Sarpedon"
        hobbies={["turning people to stone", "baking sourdough bread"]}
        origin="Greek Mythology"
      />
      <Character
        name="Hercules"
        nickname="Mr Muscle"
        location="Rome"
        hobbies={[
          "slaying evil",
          "flexing in togas",
          "unnecessary side-quests",
        ]}
        origin="Roman Mythology"
      />
      <Character
        name="Storm"
        nickname="Supercharged Halle Berry"
        location="New York"
        hobbies={["floating menacingly in the air", "looking fleek"]}
        origin="Roman Mythology"
      />
    </div>
  );
}

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

export default App;
