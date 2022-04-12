
function Etudiant() {
  return (
   
    <div  style={{backgroundColor:rgba(208, 0, 255)}}>
      <h4>Ajouter un etudiant</h4>
    <div class="row">
      <div class="col">
        <label for="exampleDataList" class="form-label">Nom :</label>
        <input type="text" class="form-control" placeholder="Nom" aria-label="Nom " />
      </div>
      <div class="col">
        <label for="exampleDataList" class="form-label">Prénom :</label>
        <input type="text" class="form-control" placeholder="Prenom" aria-label="Prenom" />
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
      <div class="row">
        <div class="col">
      <label for="exampleDataList" class="form-label"style={{margin :10}}>Sexe :</label>
      <input class="form-control" list="datalistOptions" id="exampleDataList" placeholder="Sexe" />
      <datalist id="datalistOptions">
        <option value="Homme" />
        <option value="Femme" />
      </datalist>
      </div>
      
      <div class="col">
      <label for="exampleDataList" class="form-label" style={{margin :10}}>CIN :</label>
          <input type="text" class="form-control" placeholder="CIN" aria-label="CIN" />
        </div>
        </div>
        <div class="row">
        <div class="col">
          <label for="exampleDataList" class="form-label" style={{margin :10}}>CNE :</label>
          <input type="text" class="form-control" placeholder="CNE" aria-label="CNE" />
        </div>
        <div class="col">
          <label for="exampleDataList" class="form-label"style={{margin :10}}>Date de naissance :</label>
          <input type="date" class="form-control" placeholder="Date de naissance" aria-label="Date de naissance" />
        </div>
      </div>
      <div class="row">
        <div class="col">
          <label for="exampleDataList" class="form-label" style={{margin :10}}>Telephone :</label>
          <input type="text" class="form-control" placeholder="Telephone" aria-label="Telephone" />
        </div>
        <div class="col">
      <label for="exampleDataList" class="form-label"style={{margin :10}}>Filière :</label>
      <input class="form-control" list="datalistOptionss" id="exampleDataList" placeholder="Filiere" />
      <datalist id="datalistOptionss">
        <option value="SMI" />
        <option value="IGE" />
        <option value="LEA" />
        <option value="PC" />
      </datalist>
      </div>
      </div>
      <div class="d-grid gap-2 d-md-flex justify-content-md-end">
  <button class="btn btn-danger" type="button" style={{margin :10}}>ANNULER</button>
  <button class="btn btn-success"  type="button" style={{margin :10}}>AJOUTER</button>
</div>
      </div>
    

  
    

 
  
 
 
  
  );
}

export default Etudiant;