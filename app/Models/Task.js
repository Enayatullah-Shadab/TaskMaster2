import { generateId } from "../Utils/GenerateId.js"

export default class Task {
  constructor({ task, listId, id = generateId() }) {
    this.task = task
    this.id = id
    this.listId = listId
  }

  get Template() {
    return `
          <div class="d-flex flex-row justify-content-between">
            <div>
              <input type="checkbox" id="checkbox">
              <label for="checkbox">${this.task}</label>
            </div>
              <span><i class="mdi mdi-15px mdi-trash-can" onclick="app.listsController.destroy('${this.id}')"></i></span>
          </div>`
  }
}