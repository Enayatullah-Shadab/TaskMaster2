import { ProxyState } from "../AppState.js"
import { generateId } from "../Utils/GenerateId.js"

export default class List {
  constructor({ name, color, id = generateId(), checkCount }) {
    this.name = name
    this.color = color
    this.id = id
    this.checkCount = checkCount
  }
  get Template() {
    return `
  <div class="col-md-4 text-center" id = "${this.id}">
    <div class="card mb-3">
        <div class=" d-flex align-items-center justify-content-between card-header text-center" style="background-color:${this.color}">
        <h4 class="m-0"> ${this.name}</h4><p class="text-center ${this.id}">1/3</p>
        <button type="button" class="btn btn-outline-dark" onclick="app.listsController.destroy('${this.id}')"> X </button>
       <p class= "${this.checkCount}" </p>
        </div>
        <div class="card-body">
            <div id="tasks" class="d-flex flex-column justify-content-between">
            ${this.MyTasks}
            </div>
            <div>
                <form onsubmit="app.listsController.addTask('${this.id}')" class="d-flex justify-content-between">
                    <div class="form-group mr-2">
                        <input type="textarea" name="tname" id=${this.task} class="form-control" placeholder="Add Task..." minLength="3" maxLength="50"
                            required>
                    </div>
                    <div class="form-group">
                        <button type="submit" class="btn btn-outline-dark"><i class="mdi mdi-plus" ></i></button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  </div>`
  }
  get MyTasks() {
    let template = ''
    let tasks = ProxyState.tasks.filter(task => task.listId === this.id)
    tasks.forEach(task => {
      template += task.Template
    })
    return template
  }
}