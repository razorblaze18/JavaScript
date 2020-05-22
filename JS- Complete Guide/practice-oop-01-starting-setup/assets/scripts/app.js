class DOMHelper {
    static moveElement(elementId, newDestinationSelector){
        const element = document.getElementById(elementId);
        const destinationElement = document.getElementById(newDestinationSelector);
        destinationElement.append(element);
    }
}

class Tooltip{}

class ProjectItem{
    constructor(id, updateProjectListsFunction){
        this.id = id;
        this.updateProjectListsHandler = updateProjectListsFunction;
        this.connectSwitchButton();
        this.connectMoreInfoButton();
    }

    connectMoreInfoButton(){

    }

    connectSwitchButton(){
        const projectItemElement = document.getElementById(this.id);
        const switchBtn = projectItemElement.querySelector('button:last-of-type');
        switchBtn.addEventListener('click',
         this.updateProjectListsHandler.bind(null,this.id)
         );
    }
}

class ProjectList{
    projects = [];

    constructor(type){//We created constructor, we want to create two object of same type.
        this.type = type;
        const projItems = document.querySelectorAll(`#${type}-projects li`)//'querySelectorAll' because here we want all the lists.
        for (const projItem of projItems){
            this.projects.push(new ProjectItem(projItem.id, this.switchProject.bind(this)));
        }
        console.log(this.projects);
    }

    setSwitchhandlerFunction(switchHandlerFunction){
        this.switchHandler = switchHandlerFunction;
    }

    addProject(project) {
        this.projects.push(project);
        DOMHelper.moveElement(project.id, `#${this.type}-projects ul`);
    }

    switchProject(projectId) {
        // const projectIndex = this.projects.findIndex(p => p.id === projectId);
        // this.projects.splice(projectId, 1);
        //--------------ALTERNATIVE METHOD---------------
        this.switchHandler(this.projects.find(p => p.id === projectId));
        this.projects = this.projects.filter(p => p.id !== projectId);
        //Here it executes this function here on every element in this projects and it keeps all items where it returns true.
        //So we want to return true for everything but when the ID of the item we're currently looking at in projects array is equal to the ID of the project we want to remove because,
        //If they are equal, this is the item we want to remove so then in filter we want to return falso so that the item is dropped from this newly created array.
        //And this newly created array is then stored back in the projects.
    }
}

class App{
    static init(){
        const activeProjectList = new ProjectList('active', );
        const finishedProjectList = new ProjectList('finished');
        activeProjectList.setSwitchhandlerFunction(
            finishedProjectList.addProject.bind(finishedProjectList)
            );
            finishedProjectList.setSwitchhandlerFunction(
                activeProjectList.addProject.bind(activeProjectList)
                );
    }
}

App.init();