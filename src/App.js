import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state={
      title: 'React Simple CRUD Todo Application',
      act: 0,
      index: '',
      datas: []
    }
  } 

  componentDidMount(){
    this.refs.task.focus();
  }

  fSubmit = (e) =>{
    e.preventDefault();

    let datas = this.state.datas;
    let task = this.refs.task.value;


    if(task) { 
        if(this.state.act === 0){   //new
        let data = {
        task
      }
      datas.push(data);
      }else{                      //update
        let index = this.state.index;
        datas[index].task = task;

      }    

      this.setState({
        datas: datas,
        act: 0
      });

      this.refs.myForm.reset();
      this.refs.task.focus();
           
    }
    
  }

  fRemove = (i) => {
    let datas = this.state.datas;
    datas.splice(i,1);
    this.setState({
      datas: datas
    });

    this.refs.myForm.reset();
    this.refs.task.focus();
  }

  fEdit = (i) => {
    let data = this.state.datas[i];
    this.refs.task.value = data.task;
   

    this.setState({
      act: 1,
      index: i
    });

    this.refs.task.focus();
  }  


  render() {
    let datas = this.state.datas;
    return (
      <div className="App">
        <h2>{this.state.title}</h2>
        <br/>
        <h6>Enter the task in the input box, click on add button to add to the list. If task exists, you can remove it (trash can button) or edit existing entry (pen button).</h6>
        <form ref="myForm" className="myForm">
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Task</label>
            <input type="text" ref="task" placeholder="your task" className="formField form-control col-sm-9"/>
          </div>
          <button onClick={(e)=>this.fSubmit(e)} className="myButton btn btn-success ml-2 btn-lg">ADD </button>
        </form>
        <div className="todo">
          {datas.map((data, i) =>
            <li key={i} className="myList">
              {i+1}. {data.task}
              <div className="buttonsStyle">
              <button onClick={()=>this.fRemove(i)} className="myListButton btn btn-outline-success ml-2"><i className="fas fa-trash-alt"></i> </button>
              <button onClick={()=>this.fEdit(i)} className="myListButton btn btn-outline-success ml-2"><i className="fas fa-pencil-alt"></i> </button>
              </div>
            </li>
          )}
        </div>
       
      </div>
    );
  }
}

export default App;
