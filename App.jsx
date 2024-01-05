import React, { useSyncExternalStore } from "react";
import Header from "./sections/header";
import MainOBJ from "./components/mainOBJ";
import { CORE_CONCEPTS, EXAMPLES } from "./data";
import TabButton from "./components/TabButton";
import { useState } from "react";

function App() {
  const [menuSelect, newmenuSelect] = useState();
  // the useSate function is a unigue funtion to react and will be used to manage the value/state
  // that will change throughout the apps life cylce

  function handleSelect(selectbutton) {
    newmenuSelect(selectbutton);
  }
  // when the button is selected it call upon the handles select function and pass the paremeter as a new state value
  
  return (
    <div>
      <Header/>
      <main>
      <section id="core-concepts">
        <h2>Time to get started!</h2>
        <ul id = 'core-concepts ul'>  
        {CORE_CONCEPTS.map((item)=> <li><MainOBJ key={item.title}{...item}/></li>)}
        </ul>
      </section>
      <section id= 'examples'>
        <h2>Example</h2>
        <menu>
          <TabButton isSelected={menuSelect === 'components'} onSelect = {() => {handleSelect('components')}}>Components</TabButton>
          <TabButton isSelected={menuSelect === 'jsx'} onSelect = {() => {handleSelect('jsx')}}>JSX</TabButton>
          <TabButton isSelected={menuSelect === 'props'} onSelect = {() => {handleSelect('props')}}>Props</TabButton>
          <TabButton isSelected={menuSelect === 'state'} onSelect = {() => {handleSelect('state')}}>State</TabButton>
        </menu>
        {!menuSelect && <p>Please Select a topic</p>}
        {menuSelect && (
        <div id="tab-content">
          <h3>{EXAMPLES[menuSelect].title}</h3>
          <p>{EXAMPLES[menuSelect].description}</p>
          <pre>
              <code>
                {EXAMPLES[menuSelect].code}
              </code>
          </pre>
        </div>
        )}
      </section>
      </main>
    </div>
  );
}

export default App;
//{CORE_CONCEPTS.map((item)=> <li><MainOBJ key={item.title}{...item}/></li>)}
//CORE_CONCEPTS is the list of data that we are calling upon and the .map function
//maps or treverses threw all of the differnt elements in the list
//(item) is a name that can be what ever you like it to be, it basically just gives a name to list item ex:list[0]
//the item is then passed into a li tag then the MianObJ object in the MainOBJ for map to work properly you must
//pass in a key or unigue identifier.
// ... in js tell the computer to map threw every item if there is nested item in a list.
