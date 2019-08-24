import React from 'react';
import TodoList from './TodoList'
import TodoItems from './TodoItems'
import './App.css';

class App extends React.Component {
	constructor() {
		super()

		this.state= {
			items: [],
			currentItem: {
				text:'',
				key:''
			},
		}

	}

	handleInput = e => {
		const itemText = e.target.value
		const currentItem = {text: itemText, key: Date.now()}
		this.setState({
			currentItem,
		})
	}

	addItem = e => {
		//prevent reloading from submitting the form
		e.preventDefault()
		const newItem = this.state.currentItem
		if (newItem.text !== '') {
			const items= [...this.state.items, newItem]
			this.setState({
				items: items,
				currentItem: {text: '', key: ''},
			})
		}
	}

	deleteItem = key => {
		const filteredItems = this.state.items.filter(item => {
			return item.key !== key
		})
		this.setState({
			items: filteredItems,
		})
	}

 

  render() {
  	return (
  		<div className="App">
  			<h2 className="title">Todo app</h2>
  			<p className="title-text">Enter the task in the input box, click on add button to add to the list. 
  			To remove from the list, click on the button trash can to be removed.</p>
  			<TodoList 
  				addItem={this.addItem}
  				inputElement={this.inputElement}
  				handleInput={this.handleInput}
  				currentItem={this.state.currentItem}
  			/>
  			<TodoItems 
  				entries={this.state.items} 
  				deleteItem={this.deleteItem}
  			/>
  		</div>
  		)
  }
  	
}

export default App;
