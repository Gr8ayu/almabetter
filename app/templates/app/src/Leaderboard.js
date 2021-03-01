import React, { Component } from "react";
import axios from "axios";
import { useRouteMatch, Link, Switch, Route } from "react-router-dom";

class Leaderboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sort: 'percentage',
      scores: [],
      search:''
    };

    this.searchHandle = this.searchHandle.bind(this)
    this.sortScoreby = this.sortScoreby.bind(this)

  }

  componentDidMount() {
    this.refreshList();
  }

  searchHandle(event){
    this.setState({search:event.target.value})
  }

  sortScoreby(data){
    this.setState({sort:data})
    console.log("sorting list by", this.state.sort)
  }

  refreshList = () => {
    axios
      .get("/api/leaderboard")
      .then((res) => {
        this.setState({ scores: res.data });
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  renderItems = () => {
    const { scores } = this.state;
    console.log("render", scores);
    const data = scores.filter((item)=>(item.name.toLowerCase().includes(this.state.search.toLowerCase())));
    return data.map((item) => (
      <li
        key={item.rollno}
        className="list-group-item d-flex justify-content-between align-items-center"
      >
        <span className={`todo-title mr-2 completed-todo`}>{item.rollno}</span>

        <span className={`todo-title mr-2 completed-todo`}>{item.name}</span>

        <span className={`todo-title mr-2 completed-todo`}>{item.maths}</span>

        <span className={`todo-title mr-2 completed-todo`}>
          {item.chemistry}
        </span>

        <span className={`todo-title mr-2 completed-todo`}>{item.physics}</span>

        <span className={`todo-title mr-2 completed-todo`}>{item.total}</span>

        <span className={`todo-title mr-2 completed-todo`}>
          {item.percentage} %
        </span>

        
      </li>
    ));
  };

  render() {
    console.log("render again", this.state);
    return (
      <main className="container">
        <h1 className="text-gray text-uppercase text-center my-4">
          Leaderboard
        </h1>
        <div className="row">
          <div className="col-md-6 col-sm-10 mx-auto p-0">
            <div className="card p-3">
              <div className="mb-4">
              <Link to="/addscore"><button className="btn btn-primary">Add Score</button></Link>
              
              <input className="ml-4" placeholder="Search Name" onChange={this.searchHandle}/>
              </div>

              <ul className="list-group list-group-flush border-top-0">
                <li

                  className="list-group-item d-flex justify-content-between align-items-center"
                >
                  <span className={`todo-title mr-2 completed-todo`} onChange={()=>this.sortScoreby('rollno')} >
                    rollno
                  </span>

                  <span className={`todo-title mr-2 completed-todo`} onChange={()=>{this.sortScoreby('name')}}>
                    name
                  </span>

                  <span className={`todo-title mr-2 completed-todo`} onChange={()=>{this.sortScoreby('maths')}}>
                    maths
                  </span>

                  <span className={`todo-title mr-2 completed-todo`} onChange={()=>{this.sortScoreby('chemistry')}}>
                    chemistry
                  </span>

                  <span className={`todo-title mr-2 completed-todo`} onChange={()=>{this.sortScoreby('physics')}}>
                    physics
                  </span>

                  <span className={`todo-title mr-2 completed-todo`} onChange={()=>{this.sortScoreby('total')}}>
                    total
                  </span>

                  <span className={`todo-title mr-2 completed-todo`} onChange={()=>{this.sortScoreby('percentage')}}>
                    percentage
                  </span>

                  
                </li>
                {this.renderItems()}
              </ul>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default Leaderboard;
