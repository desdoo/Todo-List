(() => {
  class e {
    constructor(e) {
      (this.name = e), (this.projects = []);
    }
    addProject(e) {
      this.projects.push(e);
    }
    get listProjects() {
      return this.projects;
    }
  }
  class t {
    constructor(e, t) {
      (this._name = e), (this.id = t), (this.tasks = []);
    }
    addTask(e) {
      this.tasks.push(e);
    }
    get name() {
      return this._name;
    }
  }
  class s {
    constructor(e, t, s) {
      (this._name = e), (this.id = t), (this.projectid = t);
    }
    get name() {
      return this._name;
    }
  }
  const c = (() => {
      const s = new e("myList"),
        c = new t("myProject", 0);
      return s.addProject(c), { myProject: c, myList: s };
    })(),
    n = (() => {
      const e = () => {
        let e = document.getElementById("projectwrapper");
        c.myList.projects.forEach((s) => {
          let c = document.createElement("div");
          c.classList.add("project"),
            c.setAttribute("data-index", s.id),
            (c.innerHTML = s._name),
            e.appendChild(c),
            c.addEventListener("click", function (e) {
              let s = document.getElementsByClassName("project");
              for (let e = 0; e < s.length; e++) s[e].className = "project";
              (c.className = "project active"), t();
            });
        });
      };
      e();
      const t = () => {
        document.getElementById("taskwrapper").innerHTML = "";
        try {
          (activeproject =
            document.getElementsByClassName("project active")[0].dataset.index),
            console.log(c.myList.projects[activeproject]);
        } catch {
          activeproject = 0;
        }
        let e = document.getElementById("taskwrapper");
        c.myList.projects[activeproject].tasks.forEach((t) => {
          let s = document.createElement("div");
          s.classList.add("task"), (s.innerHTML = t._name), e.appendChild(s);
        });
      };
      return { loadSidebar: e, loadProjectDetail: t };
    })();
  document.forms[0].addEventListener("submit", function (e) {
    e.preventDefault();
    const s = document.getElementById("projectname").value,
      a = c.myList.projects.length;
    let o = new t(s, a);
    c.myList.addProject(o),
      (document.getElementById("projectwrapper").innerHTML = ""),
      n.loadSidebar(),
      (document.getElementById("projectname").value = "");
  }),
    document.forms[1].addEventListener("submit", function (e) {
      e.preventDefault();
      const t = document.getElementById("taskname").value,
        a = c.myList.projects.length;
      try {
        projectid =
          document.getElementsByClassName("project active")[0].dataset.index;
      } catch {
        projectid = 0;
      }
      let o = new s(t, a, projectid);
      c.myList.projects[projectid].addTask(o),
        n.loadProjectDetail(),
        (document.getElementById("taskname").value = "");
    }),
    console.log(c.myList);
})();
