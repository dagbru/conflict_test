function deletePerson() {
    if (!model.inputs.delete.areYouSure) return;
    const index = findPersonIndexById(model.inputs.delete.personId);
    // This is nice
    model.people.splice(index, 1);
    model.app.page = 's';

    if(model.app.page == 's') {
        console.log('yass');
    }
    updateView();
}
