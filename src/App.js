import React, {Component} from 'react';

render() {
  let ListNames = []
  let ListLast = []
  let ages = []
  const List = [{
      firstName: "Juan",
      secondName: "Dela Cruz",
      age: 21
  },
  {
      firstName: "Mark",
      secondName: "Paul",
      age: 22

  },
  {
      firstName: "Paul",
      secondName: "Mark",
      age: 23
  }]

  List.map((l) => <ul key={l.firstName}>
      {ListNames.push(l.firstName + ", ")}:
      {ListLast.push(l.secondName + ", ")}:
      {ages.push(l.age + ", ")} </ul>)



  return (
      <div className = "center">
        <h1>BONUS NUMBER2</h1>
        <hr>
        </hr>
        <br></br><br></br>
          <h1> Names : </h1>
          {ListNames}<br />
          <h1> Last Names:</h1>
          {ListLast}<br />
          <h1>Ages :</h1>
          {ages}
           <br></br>
      <br></br>
      </div>
     
  )
}
}
export default App;

