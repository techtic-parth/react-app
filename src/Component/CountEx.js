import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import React from 'react';

export default class CountEx extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count: this.props.countStart };
    }

    countAdd = () => {
        this.setState({
            count: this.state.count + 1
        });
    }
    countDic = () => {
        if (this.state.count > this.props.countStart) {
            this.setState({ count: this.state.count - 1 });
        }
    }
    reset = () => {
        this.setState({ count: this.props.countStart });
    }
    render() {
        return (
            <div className="row justify-content-center mt-3">
                <div className="card">
                    <div className="card-header">
                        <h1>Counter Function</h1>
                    </div>
                    <div className="card-body">
                        <div className="col-md-12 ml-3 mt-4">
                            <div id="count_val form-control">{this.state.count}</div>
                            <div className="button_group">
                                <div class="btn-group btn-group-sm">
                                    <button id="add" className="btn btn-primary" onClick={this.countAdd}>+</button>
                                    <button id="reset" className="btn btn-info" onClick={this.reset}>Reset</button>
                                    <button id="subtract" className="btn btn-primary" onClick={this.countDic}>-</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}














