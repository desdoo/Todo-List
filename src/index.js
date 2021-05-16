class TodoList{
    constructor (name) {
        this.name = name
        this.projects = []
    }

    addProject(Project) {
    this.projects.push(Project)
    }

    get listProjects() {
        return this.projects
    }
}

class Project{
    constructor(name){
        this._name = name
    }
    get name(){
        return this._name
    }
}


const myList1 = new TodoList("myList")
const myProject1 = new Project("myProject")
myList1.addProject(myProject1);

   
    
const loadHomepage = (() => {

    const loadSidebar = (() => {
        let sidebar = document.getElementById('sidebar')


    })()

    const loadProjectDetail = (() => {
        console.log("Test B")
    })()

})()



/* 
- html structure:
-- header & footer
-- sidebar (on mobile hidden behind a menu)
-- body -> shows tasks from active project

- js
-- loadHomepage
-- todolist
-- class Project
--- createProject module (constructor)

-- deleteProject module
-- createTask module
-- deleteTask module
-- editTask module
-- loadProjects module
-- openProjects module

-- localStorage

*/