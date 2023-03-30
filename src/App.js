import React, { useState } from "react";
// data link
import data from "./data";
// list link
import List from "./List";


const App = () => {
  const [people, setPeople] = useState(data);
  
  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        <List people={people} />
        <button onClick={() => setPeople([])}>clear all</button>
      </section>
    </main>
  );
}

export default App;
