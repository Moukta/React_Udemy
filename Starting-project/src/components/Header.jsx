export default function Header() {
  const singleDescription =
    reactDescriptions[genRandomValue(reactDescriptions.length - 1)];

  return (
    <header>
      <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {singleDescription} Fundamental React concepts you will need for almost
        any app you are going to build!
      </p>
    </header>
  );
}

const reactDescriptions = ["Fundamental", "Crucial", "Core"];

function genRandomValue(maxNumber) {
  return Math.floor(Math.random() * (maxNumber + 1));
}
