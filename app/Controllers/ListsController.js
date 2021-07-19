import { ProxyState } from "../AppState.js"
import { listsService } from "../Services/ListsService.js"
import { loadState, saveState } from "../Utils/LocalStorage.js"

function _draw() {
    let template = ''
    let lists = ProxyState.lists
    lists.forEach(list => template += list.Template)
    document.getElementById('lists').innerHTML = template
}

export default class ListsController {
    constructor() {
        ProxyState.on('lists', _draw)
        ProxyState.on('tasks', _draw)
        ProxyState.on('lists', saveState)
        ProxyState.on('tasks', saveState)
        loadState()
        _draw()
    }

    createList() {
        event.preventDefault()
        let form = event.target
        let rawList = {
            name: form.name.value,
            color: form.color.value,
            id: form.id.value
        }
        listsService.createList(rawList)
        form.reset()
    }
    destroy(id) {
        listsService.destroy(id)
    }
    addTask(listId) {
        debugger;
        event.preventDefault()
        let form = event.target
        let rawTask = {
            listId,
            name: form.tname.value
        }
        listsService.addTask(rawTask)
        form.reset()
    }
    removeTask(id) {
        listsService.removeTask(id)
    }
}