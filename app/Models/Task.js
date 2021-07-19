import { generateId } from "../Utils/GenerateId.js"

export default class Task {
  constructor({ name, listId, id = generateId() }) {
    this.name = name
    this.id = id
    this.listId = listId
  }
  get Template() {
    return `

    <div  d-flex flex-row justify-content-between ">
    <div class="test">
      <input text-wrap type="checkbox" id=${this.id}>
      <label class="col-10 for="checkbox">${this.name}</label>
    </div>
      <span><i class="mdi mdi-15px mdi-trash-can" onclick="app.listsController.removeTask('${this.id}')"></i></span>
  </div>
  `
  }
}