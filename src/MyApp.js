import React,{ Component,Fragment } from 'react';

class MyApp extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			inputValue:'',
			list: []
		}
	}

	render() {
		return (
		<Fragment>
			<div>

			<input 
			value={this.state.inputValue } 
			onChange={this.handleInputChange.bind(this)}
			/>

			<button>提交</button>
			</div>
			<ul>
				<li>前端组件</li>
				<li>首字母大写</li>
				<li>导出</li>
			</ul>
			</Fragment>
		)
	}

	handleInputChange(e)
	{	this.setState({
		inputValue:e.target.value
	}）


		this.state.inputValue = e.target.value;
		
	}

}

export default MyApp;
