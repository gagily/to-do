import React from 'react'

class TodoItems extends React.Component {
	createTasks = item => {
    return (
    	<div>
		    <li key={item.key}>
		        {item.text}
		    </li>
		    <button className="deleteButton" onClick={() => this.props.deleteItem(item.key)}>
		    	<i class="fas fa-trash-alt"></i>
		    </button>
      	</div>
    )
  }
	

	render() {
		const todoEntries = this.props.entries
		const listItems = todoEntries.map(this.createTasks)
		
		return <ul className="theList">{listItems}</ul>
	}
}

export default TodoItems