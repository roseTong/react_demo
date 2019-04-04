import React from "react" ;

class TodoItem extends React.Component {
    constructor(props){
        super(props);
        this.deleteClick = this.deleteClick.bind(this)
    }
    deleteClick(){
        this.props.delete(this.props.index)
    }
    //子组件和父组件传值 需要调用父组件中传递过来的方法
    render(){
        const {content} = this.props;
        return (
            <div onClick={this.deleteClick}>{content}</div>
        )
    }
}

export default TodoItem;
