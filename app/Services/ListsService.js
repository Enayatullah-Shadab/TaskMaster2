import { ProxyState } from "../AppState.js"
import List from "../Models/List.js"
import Task from "../Models/Task.js"

class ListsService {

    createList(rawList) {
        console.log(" in Service, creatList")
        ProxyState.lists = [...ProxyState.lists, new List(rawList)]
    }
    destroy(id) {
        console.log(" in Service, destroy")
        ProxyState.lists = ProxyState.lists.filter(list => list.id != id)
        ProxyState.tasks = ProxyState.tasks.filter(task => task.listId != id)
    }

    addTask(rawTask) {
        console.log(" in Service, addTask")
        ProxyState.tasks = [...ProxyState.tasks, new Task(rawTask)]
    }

    removeTask(id) {
        let foundTask = ProxyState.tasks.find(task => task.id == id)
        ProxyState.tasks = ProxyState.tasks.filter(task => task.id != id)
    }
    checked(id) {
        let foundTask = ProxyState.tasks.find(task => task.id == id)
        let foundList = ProxyState.lists.find(list => list.id == foundTask.listId)
        if (foundTask.check == false) {
            foundTask.check = true
        }
    }
}
export const listsService = new ListsService();