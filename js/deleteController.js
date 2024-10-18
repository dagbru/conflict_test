function deletePerson() {
    if (!model.inputs.delete.areYouSure) {
        return;
    } 
    const index = findPersonIndexById(model.inputs.delete.personId);
    model.people.splice(index, 1);
    // Maybe we should rethink this?
    model.app.page = 'search';
    updateView();
}