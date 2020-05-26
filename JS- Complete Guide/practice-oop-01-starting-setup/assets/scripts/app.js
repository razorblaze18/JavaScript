class DOMHelper {
    static clearEventListeners(element){
        const clonedElement = element.cloneNode(true);//To make a deep clone!
        element.replaceWith(clonedElement);
        return clonedElement;
    }

    static moveElement(elementId, newDestinationSelector) {
        const element = document.getElementById(elementId);
        const destinationElement = document.querySelector(newDestinationSelector);
        destinationElement.append(element);//If you're doing this to a DOM node that is already part of the DOM and you're appending it again in another place of the DOM, then it will not be copied, it will be moved.
    }
}

class Component {
    constructor(hostElementId, insertBefore = false){
        if(hostElementId){
            this.hostElement = document.getElementById(hostElementId);
        }else{
            this.hostElement = document.body;
        }
        this.insertBefore = insertBefore;
    }

    detach(){
        if(this.element){
            this.element.remove();
        }
        this.element.remove();
        // this.element.parentElement.removeChild(this.element);//This method can be used in older browsers.
    }
    attach(){
        this.hostElement.insertAdjacentElement(
            this.insertBefore? 'afterbegin' : 'beforeend',
            this.element
            );
    }
}

class Tooltip extends Component{ 
    constructor(closeNotifierFunction,text){
        super();// To call the base class and its own constructor.
        this.closeNotifier = closeNotifierFunction;
        this.text = text;
        this.create();
    }

    closeTooltip = () => {
        this.detach();
        this.closeNotifier();
    }

    create(){
        const tooltipElement = document.createElement('div');
        tooltipElement.className = 'card';
        tooltipElement.textContent = this.text;
        tooltipElement.addEventListener('click',this.closeTooltip);
        this.element = tooltipElement;
    }
}

class ProjectItem {
    hasActiveToolTip = false;

    constructor(id, updateProjectListsFunction, type) {
        this.id = id;
        this.updateProjectListsHandler = updateProjectListsFunction;
        this.connectMoreInfoButton();
        this.connectSwitchButton(type);
    }

    showMoreInfoHandler() {
        if(this.hasActiveToolTip){
            return;
        }
        const projectElement = document.getElementById(this.id);
        const tooltipText = projectElement.dataset.extraInfo;//To read data-extra-info properties. These data attributes are all merged in dataset property.
        
        const toolTip = new Tooltip(() => {
            this.hasActiveToolTip = false;
        }, tooltipText);
        toolTip.attach();
        this.hasActiveToolTip = true;
    }

    connectMoreInfoButton() {
        const projectItemElement = document.getElementById(this.id);
        const moreInfoBtn = projectItemElement.querySelector('button:first-of-type');
        moreInfoBtn.addEventListener('click', this.showMoreInfoHandler.bind(this));
    }

    connectSwitchButton(type) {//Because at the end, we want to switch button from "Activate" to "Finish" and vice-versa.
        const projetItemElement = document.getElementById(this.id);//With the help of this line, we get access to the underlying DOM node object.
        let switchBtn = projetItemElement.querySelector('button:last-of-type');
        switchBtn = DOMHelper.clearEventListeners(switchBtn);
        switchBtn.textContent = type === 'active' ? 'Finish' : 'Activate';//To change the label of the buttons.
        switchBtn.addEventListener('click',
            this.updateProjectListsHandler.bind(null, this.id)
        );
    }
    update(updateProjectListsFn, type) {
        this.updateProjectListsHandler = updateProjectListsFn;
        this.connectSwitchButton(type);
    }
}

class ProjectList {
    projects = [];

    constructor(type) {
        this.type = type;
        const prjItems = document.querySelectorAll(`#${type}-projects li`); //This is the CSS selector for all list items in the sections with these IDs.
        for (const prjItem of prjItems) {
            this.projects.push(new ProjectItem(prjItem.id, this.switchProject.bind(this), this.type)
            );
        }
        console.log(this.projects);
    }

    setSwitchHandlerFunction(switchHandlerFunction) {
        this.switchHandler = switchHandlerFunction;
    }

    addProject(project) {
        this.projects.push(project);
        DOMHelper.moveElement(project.id, `#${this.type}-projects ul`);
        project.update(this.switchProject.bind(this.type));
    }

    switchProject(projectId) {//The idea here is, we remove the project from the project list because it will be switched to the other list and then we call a method in the other list instance of add it there.
        // const projectIndex = this.projects.findIndex(p => p.id === projectId);//To find the index by passing in the anonymous function where you recieve every element that is part of the array.
        // this.projects.splice(projectIndex,1)//Splice is used to remove the object.
        // ALTERNATIVE OPTION-----------------
        this.switchHandler(this.projects.find(p => p.id === projectId));
        this.projects = this.projects.filter(p => p.id !== projectId);//This items gets dropped from the array.
        // Here, it executes this (p => p.id !==projectId) function here on every element in this (projects) and it keeps all items where this returns true.
    }
}

class App {
    static init() {
        const activeProjectList = new ProjectList('active');
        const finishedProjectList = new ProjectList('finished');
        activeProjectList.setSwitchHandlerFunction(
            finishedProjectList.addProject.bind(finishedProjectList)
        );
        finishedProjectList.setSwitchHandlerFunction(
            activeProjectList.addProject.bind(activeProjectList)
        );
    }
}

App.init();





//UNDERSTANDING PROTOTYPE AND CONSTRUCTORS FROM YOUTUBE!.
// let Car = function(color){
//     this.color = color;
// };
//     Car.prototype.getColor = function () {
//         return this.color;

// };

// Object.prototype.toString = function(){
//     return `color : ${this.color}`;
// };

// let redCar = new Car('red');
// console.log(redCar.toString());

// let blah = {
//     color: 'blah'
// };
// console.log(blah.toString());

// Object.create(prototypeObject, propertyObject);

// const myObject = Object.create(Object.prototype);
// const myLiteral = {};
// const noProto = Object.create(null);
// console.dir(myObject);
// console.dir(myLiteral);
// console.dir(noProto);

// const Car = function(color){
//     this.color = color;
// };

// Car.prototype = {
//     getColor(){
//         return this.color;
//     }
// };

// const ToyCar = function(){

// };

// ToyCar.prototype = Object.create(Car.prototype);

// const legoCar = new ToyCar();
// console.dir(legoCar instanceof ToyCar);