function updateViewEdit(){
    document.getElementById('app').innerHTML = /*HTML*/`
        ${createMenuHtml()}
        <hr/>
        <h3>Endre</h3>
        Navn: <br/>
        <input 
            type="text" 
            value="${model.inputs.edit.name}"
            oninput="model.inputs.edit.name=this.value"
        />
        <br/>
        Epost: <br/>
        <input 
            type="text" 
            value="${model.inputs.edit.email}"
            oninput="model.inputs.edit.email=this.value"
        />
        <br/>    
        <button onclick="editPerson()">Endre</button>
    `;
}