import Character from "./components/Character";

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
        hobbies={[
          "floating menacingly in the air",
          "looking fleek",
          "kinda being like Zeus with thunderbolts",
        ]}
        origin="Roman Mythology"
      />
    </div>
  );
}

export default App;
