import React, { Component } from "react";

export default class Administrateur extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Nom: '',
      Prenom: '',
      Email: '',
      Adress: '',
      NomEror: '',
    };
  }
  onChangeNom(e) {
    this.setState({
        Nom: e.target.value
        
    });
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
      let NomEror="";

      if(!this.state.Nom){
        NomEror="le champ Nom est obligatiore"
      }
      if(NomEror){
        this.setState({NomEror});
        return false;
    }
    return true;
    
  }
    
}
  render() {
    const { isError } = this.state;
    return (
      <div  style={{backgroundColor:"while"}}>
        <fieldset><legend>Ajouter un etudiant</legend>
      <div class="row">
        <div class="col">
          <label for="exampleDataList" class="form-label">Nom :</label>
          <input type="text"
           class="form-control"
            placeholder="Nom"
           aria-label="Nom "
            value={this.state.Nom}
             onChange={this.onChangeNom} />
             <div style={{color:"red"}}>{this.state.NomEror}</div>
              
        </div>
        <div class="col">
          <label for="exampleDataList" class="form-label">Prénom :</label>
          <input type="text" class="form-control" placeholder="Prenom" aria-label="Prénom" />
        </div>
      </div>
      <div class="row">
          <div class="col">
            <label for="exampleDataList" class="form-label" style={{margin :10}} >Email :</label>
            <input type="email" class="form-control" placeholder="Email" aria-label="Email" />
          </div>
         
          <div class="col">
            <label for="exampleDataList" class="form-label" style={{margin :10}}>Adresse :</label>
            <input type="text" class="form-control" placeholder="Adresse" aria-label="Adresse" />
          </div>
          </div>
          <div class="d-grid gap-2 d-md-flex justify-content-md-end">
  <button class="btn btn-outline-danger" type="button" style={{margin :10}}>ANNULER</button>
  <button class="btn btn-outline-primary" type="button" style={{margin :10}}>AJOUTER</button>
</div>
</fieldset>
          </div>
         );
        }
      
      }