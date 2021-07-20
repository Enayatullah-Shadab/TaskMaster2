import { ProxyState } from "../AppState.js"
import List from "../Models/List.js"
import Task from "../Models/Task.js"

class ListsService {

    createList(rawList) {
        console.log(" in Service, creatList")
        ProxyState.lists = [...ProxyState.lists, new List(rawList)]
        let foundList = ProxyState.lists.find(l => l.id == rawTask.listId)
        foundList.checkCount++

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

        console.log(" in Service, removeTask")
        ProxyState.tasks = ProxyState.tasks.filter(task => task.id != id)
    }
}

export const listsService = new ListsService();