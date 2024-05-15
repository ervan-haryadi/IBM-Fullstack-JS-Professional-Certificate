import axios from 'axios';
import React, { useState, useEffect } from 'react';

// Class practice test
class TestComponent extends React.Component {
  render() {
    return <div>Hello {this.props.name}</div>
  }
}

const App = (props) => {
  // Define state for API data
  const [breeds, setBreeds] = useState([]);

  useEffect(() => {
    const url = "https://dogapi.dog/api/v2/breeds";
    axios.get(url)
      .then(response => {
        setBreeds(response.data.data);
      })
      .catch(error => {
        console.error("Error fetching data: ", error.message);
      });
  }, []);

  const tableCellStyle = {
    border: "1px solid black",
    textAlign: "center"
  };

  return (
    <div>
      {/* print test component */}
      <TestComponent name="John" />
      
      <h2>List of Dog Breeds</h2>
      <ul>
        {breeds.map((breed, index) => (
          <li key={index}>
            <h3>{breed.attributes.name}</h3>
            <p>Life Span: {breed.attributes.life.min} - {breed.attributes.life.max} years</p>
            <p>Male Weight: {breed.attributes.male_weight.min} - {breed.attributes.male_weight.max} kg</p>
            <p>Female Weight: {breed.attributes.female_weight.min} - {breed.attributes.female_weight.max} kg</p>
            <p>Hypoallergenic: {breed.attributes.hypoallergenic ? 'Yes' : 'No'}</p>
          </li>
        ))}
      </ul>

      <h2>List of Dog Breeds, in Table</h2>
      <table style={{borderCollapse:'collapse', width:'100%', border:"2px solid black"}}>
        <thead>
          <tr>
            <th style={tableCellStyle}>Breed Name</th>
            <th style={tableCellStyle}>Life Span (year)</th>
            <th style={tableCellStyle}>Weight(Male, kg)</th>
            <th style={tableCellStyle}>Weight(Female, kg)</th>
            <th style={tableCellStyle}>Hypoallergenic</th>
          </tr>
        </thead>
        <tbody>
          {breeds.map((breed, index) => (
            <tr key={index}>
              <td style={tableCellStyle}>{breed.attributes.name}</td>
              <td style={tableCellStyle}>{breed.attributes.life.min} - {breed.attributes.life.max}</td>
              <td style={tableCellStyle}>{breed.attributes.male_weight.min} - {breed.attributes.male_weight.max}</td>
              <td style={tableCellStyle}>{breed.attributes.female_weight.min} - {breed.attributes.female_weight.max}</td>
              <td style={tableCellStyle}>{breed.attributes.hypoallergenic ? "Yes" : "No"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// Part 4 Class Component, Props and State
// import React, { useState } from 'react';

// const App = (props) => {
//   const [counter, setCounter] = useState(0);

//   let incrementCounter = () => {
//     setCounter(counter+1);
//   }

//   let colorStyle = {color:props['color'], fontSize:props['size']};
//   return (
//     <div style={colorStyle}>
//       Hello World! with React Component
//       <br /><br />
//       <button onClick={incrementCounter}>Click Me!</button>
//       <br /><br />
//       {counter}
//     </div>
//   )
// }


// part 3 Function Components & Properties (Props)

// function App(props) {
//   const colorStyle = {
//     color:props.color,
//     fontSize: props.size
//   }
//   return (
//     <div className="App">
//       <div style={colorStyle}>
//       Hello World!
//       </div>
//     </div>
//   );
// }

export default App;
