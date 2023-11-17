import { CORE_CONCEPTS } from "./data.js";
import Header from "./components/Header.jsx";
import CoreElement from "./components/CoreElement.jsx";
import TabButtons from "./components/TabButtons.jsx";
import { useState } from "react";
import { EXAMPLES } from "./data.js";

function App() {
  const [selectedToppic, setSelectedTopic] = useState();

  function handleClick(selectedButton) {
    //selectedButton => 'Components', 'JSX', 'Props', 'States'
    //return
    setSelectedTopic(selectedButton);
    return;
  }

  let tabContent = <p>Please Select a topic : </p> 

  if (selectedToppic){ 
    tabContent = <div id="tab-content">
            <h3>{EXAMPLES[selectedToppic].title}</h3>
            <p>{EXAMPLES[selectedToppic].description}</p>
            <pre>
              <code>{EXAMPLES[selectedToppic].code}</code>
            </pre>
          </div>
  }
  

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((data) => {
              return <CoreElement {...data} />;
            })}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButtons onSelect={() => handleClick("components")}>
              Components
            </TabButtons>
            <TabButtons onSelect={() => handleClick("jsx")}>JSX</TabButtons>
            <TabButtons onSelect={() => handleClick("props")}>Props</TabButtons>
            <TabButtons onSelect={() => handleClick("state")}>State</TabButtons>
          </menu>
          {tabContent}
            
        </section>
      </main>
    </div>
  );
}

export default App;
