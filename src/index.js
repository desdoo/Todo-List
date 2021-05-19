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
    constructor(name,id){
        this._name = name
        this.id = id
        this.tasks = []
    }

    addTask(Task) {
        this.tasks.push(Task)
    }


    get name(){
        return this._name
    }
}

class Task{
    constructor(name, id, projectid){
        this._name = name
        this.id = id
        this.projectid = id
    }

    get name(){
        return this._name
    }
}


const objectManager = (() => {
    const myList = new TodoList("myList") // create a default list
    const myProject = new Project("myProject",0) //create a default project
    myList.addProject(myProject);
    return {myProject, myList}
})()



const loadHomepage = (() => {

    const loadSidebar = () => {

        let sidebar = document.getElementById('projectwrapper')
        // List all projects of "myList" inside the sidebar 
        objectManager.myList.projects.forEach((e) => {
            let project = document.createElement('div')
            project.classList.add('project')
            project.setAttribute("data-index",e.id)
            project.innerHTML = e._name
            sidebar.appendChild(project)
            
            // add eventlistener to clicked project to switch classes and load tasks 
            project.addEventListener("click", function(e) {
                let projects = document.getElementsByClassName('project')
                
                for (let i = 0; i<projects.length; i++) {
                    projects[i].className = 'project'
                }

                project.className = 'project active'

                loadProjectDetail()
            
            })


        });
    }
    
    // call loadsidebar function to show myProject as default 
    loadSidebar()


    const loadProjectDetail = () => {
        document.getElementById('taskwrapper').innerHTML=''

        try  { 
            activeproject = document.getElementsByClassName('project active')[0].dataset.index
            console.log(objectManager.myList.projects[activeproject])
        }
        catch {
            activeproject  = 0
        }
        

        let taskwrapper = document.getElementById('taskwrapper')
        // List all tasks of of the active project
        objectManager.myList.projects[activeproject].tasks.forEach((e) => {
            let task = document.createElement('div')
            task.classList.add('task')
            task.innerHTML = e._name
            taskwrapper.appendChild(task)
        })

        //  list all tasks for activeproject


    }

    return {loadSidebar, loadProjectDetail}

})()


const submitProject = (() => {

        const form = document.forms[0];
        // take input value for form and add it to myList
        
        form.addEventListener("submit", function(event) {

            event.preventDefault();
            const projectname = document.getElementById("projectname").value
            const projectid = objectManager.myList.projects.length 
            let newproject = new Project(projectname,projectid);
            objectManager.myList.addProject(newproject);
            document.getElementById('projectwrapper').innerHTML=''
            loadHomepage.loadSidebar()
            document.getElementById('projectname').value = ''    

            });
})()

const submitTask = (() => {

    const form = document.forms[1];
    // take input value for form and add it to active Project
    
    form.addEventListener("submit", function(event) {

        event.preventDefault();
        const taskname = document.getElementById("taskname").value
        const taskid = objectManager.myList.projects.length
        
        try  { 
            projectid = document.getElementsByClassName('project active')[0].dataset.index
        }
        catch {
            projectid = 0
        }
        
        let newtask = new Task(taskname,taskid,projectid);
        objectManager.myList.projects[projectid].addTask(newtask) //addtask to active project
        loadHomepage.loadProjectDetail()
        document.getElementById('taskname').value = ''  

        });
})()

console.log(objectManager.myList)


/* 
- html structure:
-- header & footer
-- sidebar (on mobile hidden behind a menu)
-- body -> shows tasks from active project

- js
-- loadHomepage
--- loadsidebar (for each entry in myList create a project)
--- load addProject form

--- onclick auf project (for each entry in {project})


-- deleteProject module
-- createTask module
-- deleteTask module
-- editTask module
-- loadProjects module
-- openProjects module

-- localStorage



- create a function that creates projects and assigns them to do myList
- create 


*/