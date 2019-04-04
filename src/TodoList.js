import React from 'react';
import TodoItem from './TodoItem'


//定义一个react组件
class TodoList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      list:[],
      inputValue:''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBthClick = this.handleBthClick.bind(this);
    this.deleteClick = this.deleteClick.bind(this);
  }
  handleBthClick(){
    this.setState({
      list:[...this.state.list,this.state.inputValue],
      inputValue:''
    })
  }
  handleInputChange(e){
    this.setState({
      inputValue:e.target.value
    })
  }
  deleteClick(index){
    const list = [...this.state.list]
    list.splice(index,1)
    this.setState({
      list:list
    })
  }

  getTodoItems(){
    return(
        this.state.list.map((item,index)=>{
          return (
              <TodoItem
                  key={index}
                  content={item}
                  index={index}
                  delete={this.deleteClick}
              />
          )

        })
    )
  }

  //父组件通过属性的形式向子组件传递参数
  //子组件通过props来接受父组件传过来的参数
  render() {
    return (
      <div>
        <div>
          <input value={this.state.inputValue} onChange={this.handleInputChange}/>
          <button onClick={this.handleBthClick}>add</button>
        </div>
        <ul>{this.getTodoItems()}</ul>
      </div>
    );
  }
}

export default TodoList;
