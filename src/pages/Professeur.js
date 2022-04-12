import React, { Component } from "react";


export default class Professeur extends Component {
  constructor(props) {
      super(props)
      this.state = {
          name: '',
          email: '',
          password: '',
          nameEror: ''
      }
  }

  onChangeName(e) {
    this.setState({
        name: e.target.value
       
    });
}

  onSubmit = e => {
    e.preventDefault();
    const isValid=this.validate();  
    if(isValid){
        console.log("yes yes yes ");    
    }else{
        console.log("il a un probleme dans la validation des informations")
        
    }
  };

  validate =()=>{
    let nameEror="";
   
   
    if(!this.state.name){
      nameEror="le champ name est obligatiore"
    }
  
               
    if(nameEror){
        this.setState({nameEror});
        return false;
    }

    return true;
    
}
  render() {
      const { isError } = this.state;
      return (
          <form onSubmit={this.onSubmit} noValidate>
              <div className="form-group">
                  <label>Name</label>
                  <input
                      type=""
                      className= "form-control"
                      name="name"
                      value={this.state.name}
                      onChange={this.onChangeName}
                      
                  />
                  <div style={{color:"red"}}>{this.state.nameEror}</div>
              </div>
              {/* <div className="form-group">
                  <label>Email</label>
                  <input
                      type="email"
                      className={isError.email.length > 0 ? "is-invalid form-control" : "form-control"}
                      name="email"
                      onChange={this.formValChange}
                  />
                  {isError.email.length > 0 && (
                      <span className="invalid-feedback">{isError.email}</span>
                  )}
              </div>
              <div className="form-group">
                  <label>Password</label>
                  <input
                      type="password"
                      className={isError.password.length > 0 ? "is-invalid form-control" : "form-control"}
                      name="password"
                      onChange={this.formValChange}
                  />
                  {isError.password.length > 0 && (
                      <span className="invalid-feedback">{isError.password}</span>
                  )}
              </div> */}
              <button type="submit" onClick={this.onSubmit} className="btn btn-block btn-danger">Create User</button>
          </form>
      );
  }
}