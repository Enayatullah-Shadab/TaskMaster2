import { ProxyState } from "../AppState.js"
import { generateId } from "../Utils/GenerateId.js"

export default class List {
  constructor({ name, color, id = generateId() }) {
    this.name = name
    this.color = color
    this.id = id

  }

  get Template() {
    return `
  <div class="col-md-3" id = "${this.id}">
    <div class="card mb-3">
        <div class="d-flex align-items-center justify-content-between card-header text-center" style="background-color:${this.color}">
            <h5 class="m-0">${this.name}</h5>
            <button type="button" class="btn btn-outline-dark" onclick = "app.ListMasterController.deleteList('${this.id}')"> X </button>
        </div>
        <div class="card-body">
            <div id="tasks" class="d-flex flex-column justify-content-between">
            ${this.list}
            </div>
            <div>
                <form onsubmit="app.ListMasterController.createTask('${this.id}')" class="d-flex justify-content-between line">
                    <div class="form-group mx-2">
                        <input type="text" name="task" id="task" class="form-control" placeholder="Add Task..."
                            required>
                    </div>
                    <div class="form-group">
                        <button type="submit" class="btn btn-outline-dark"><i class="mdi mdi-plus"></i></button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  </div>`
  }
}