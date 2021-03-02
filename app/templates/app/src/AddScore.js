import React, { Component } from "react";
import axios from "axios";
import { useRouteMatch, Link, Switch, Route } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import classnames from 'classnames';
import {Redirect} from 'react-router-dom';
const initialstate = {
    name: {
      value: "",
      validateOnChange: false,
      error: "",
    },
    rollno: {
      value: "",
      validateOnChange: false,
      error: "",
    },
    maths: {
      value: "",
      validateOnChange: false,
      error: "",
    },
    chemistry: {
      value: "",
      validateOnChange: false,
      error: "",
    },
    physics: {
      value: "",
      validateOnChange: false,
      error: "",
    },
    submitCalled: false,
    allFieldsValidated: false,
  };

class AddScore extends Component {
  constructor(props) {
    super(props);
    this.state = initialstate;

    this.validatedata = this.validatedata.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  validatemarks = (marks) => {
    if (! marks){
       return "Enter valid marks"
    }
    if (isNaN(marks)) {
      return "marks should be a number";
    }
    if (marks < 0) {
      return "marks should be a greater than 0";
    }
    if (marks > 100) {
      return "marks should be a less than 100";
    }
    return false;
  };
  validatename = (name) => {
    
    return false;
  };

  validateroll = (roll) => {
    if (! roll){
        return "Enter valid roll no"
    }
    if (isNaN(roll)) {
      return "roll should be a number";
    }
    if (roll < 0) {
      return "roll should be a greater than 0";
    }
    return false;
  };

  handleChange = (validator, event) =>{
    // console.log(event.target.name)
    const field = event.target.name 
    const fieldVal = event.target.value;
    console.log(this.state[field])
   this.setState(state => ({
    [field]: {
      ...state[field],
      value: fieldVal,
      error:  validator(fieldVal) 
    }
  }));


  }

  validatedata(event) {
    // this.setState({ search: event.target.value });
  }

  
  handleSubmit(evt) {
    console.log(this.state);

    evt.preventDefault();
    // validate all fields
    console.log('submit')
    const {
        rollno,
        name,
        maths,
        physics,
        chemistry,
        allFieldsValidated,
      } = this.state;

      var data = {}
      var self = this;
      data.name = name.value;
      data.rollno = rollno.value;
      data.maths = maths.value;
      data.chemistry = chemistry.value;
      data.physics = physics.value;

      axios({
        method: 'post',
        url: '/api/addscore',
        data: data,
        headers: {'Content-Type': 'application/json'
         }
        })
        .then(function (response) {
            
            alert('Added Successfully')
            self.setState(state => (initialstate));
        })
        .catch(function (response) {
          
            response = response.response
            if(response.status == 400){
                console.log(response.data)
                for (var key in response.data) {
                    console.log(key)
                    self.setState(state => ({
                        [key]: {
                          ...state[key],
                          error:  response.data[key]
                        }
                      }));
                }
            console.log(self.state)

                
               
            }
            
            
        });
    
  }


  render() {
    const {
      rollno,
      name,
      maths,
      physics,
      chemistry,
      allFieldsValidated,
    } = this.state;
    return (
      <main className="container">
              <Link to="/">
                <h1 className="text-gray text-uppercase text-center my-4">Add Score</h1>

              </Link>

        <div className="row">
          <div className="col-md-6 col-sm-10 mx-auto p-0">
            <div className="card p-3">
              <div className="mb-4">
                <Link to="/leaderboard">
                  <button className="btn btn-primary">Leaderboard</button>
                </Link>
              </div>

              <Form onSubmit={(evt) => this.handleSubmit(evt)}>
                <Form.Group controlId="name">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    name="name"
                    type="name"
                    placeholder="Name"
                    value={name.value}
                    className={classnames(
                      "form-control",
                      { "is-valid": name.error === false },
                      { "is-invalid": name.error }
                    )}
                    onChange={(evt) =>
                      this.handleChange(this.validatename, evt)
                    }
                    
                  />
                  {name.error}
                </Form.Group>
                <Form.Group controlId="rollno">
                  <Form.Label>Roll</Form.Label>
                  <Form.Control
                    name="rollno"

                    type="text"
                    placeholder="roll no"
                    value={rollno.value}
                    className={classnames(
                      "form-control",
                      { "is-valid": rollno.error === false },
                      { "is-invalid": rollno.error }
                    )}
                    onChange={(evt) =>
                      this.handleChange(this.validateroll, evt)
                    }
                  
                  />
                  {rollno.error}

                </Form.Group>
                <Form.Group controlId="maths">
                  <Form.Label>Maths</Form.Label>
                  <Form.Control
                    type="text"
                    name="maths"

                    placeholder="maths marks"
                    value={maths.value}
                    className={classnames(
                      "form-control",
                      { "is-valid": maths.error === false },
                      { "is-invalid": maths.error }
                    )}
                    onChange={(evt) =>
                      this.handleChange(this.validatemarks, evt)
                    }
                  
                  />
                  {maths.error}

                </Form.Group>
                <Form.Group controlId="physics">
                  <Form.Label>Physics</Form.Label>
                  <Form.Control
                    type="text"
                    name="physics"

                    placeholder="Physics marks"
                    value={physics.value}
                    className={classnames(
                      "form-control",
                      { "is-valid": physics.error === false },
                      { "is-invalid": physics.error }
                    )}
                    onChange={(evt) =>
                      this.handleChange(this.validatemarks, evt)
                    }
                    
                  />
                  {physics.error}

                </Form.Group>
                <Form.Group controlId="chemistry">
                  <Form.Label>chemistry</Form.Label>
                  <Form.Control
                    type="text"
                    name="chemistry"

                    placeholder="chemistry marks"
                    value={chemistry.value}
                    className={classnames(
                      "form-control",
                      { "is-valid": chemistry.error === false },
                      { "is-invalid": chemistry.error }
                    )}
                    onChange={(evt) =>
                      this.handleChange(this.validatemarks, evt)
                    }
                    
                  />

                </Form.Group>
                {chemistry.error}
                
              
                {allFieldsValidated && (
                  <p className="text-success text-center">
                    Success, All fields are validated
                  </p>
                )}
                <Button type="Submit">Submit</Button>
              </Form>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default AddScore;
