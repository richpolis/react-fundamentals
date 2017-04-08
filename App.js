import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{
	constructor(){
		super();
		this.state = {
			data: [
				{id: 1, name: "Ricardo Alcantara"}, 
				{id: 2, name:"Susana Naomi Alcantara"}, 
				{id: 3, name:"Ricardo Alcantara Sanchez"},
				{id: 4, name: "Maria de la Cruz Angela Gomez Bautista"}
			]
		};
		
	}

	render(){
		let rows = this.state.data.map(person =>{
			return <PersonRow key={person.id} data={person} />
		})
		return <table><tbody>{rows}</tbody></table>
	}
}

const PersonRow = (props) =>{
	return <tr>
			<td>{props.data.id}</td>
			<td>{props.data.name}</td>
		</tr>
}

export default App