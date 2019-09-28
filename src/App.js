import React, {Component} from 'react';

class App extends Component {
constructor(props) {
super(props);
this.state = {
objects: [
{ firstname: "Juan", lastname: 'dela Cruz', age: 21 },
{ firstname: "Mark", lastname: 'Paul', age: 22 },
{ firstname: "Paul", lastname: 'Mark', age: 23 },

]
}
}
render() {
return (
  <div className = "center">
    <h2>BUNOS NUMBER2</h2>
    <hr></hr>
    <br></br>
    <br></br>
{this.state.objects.forEach(user => {
return(this.state.user)
})} , ""
</div>


)

}
}
export default App;

