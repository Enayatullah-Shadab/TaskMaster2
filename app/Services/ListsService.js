import { ProxyState } from "../AppState.js"
import List from "../Models/List.js"
import Task from "../Models/Task.js"

class ListsService {

    createLists(rawList) {
        console.log(" in Service, creatList")

        ProxyState.lists = [...ProxyState.lists, new List(rawList)]

    }

    addTask(rawTask) {
        console.log(" in Service, addTask")
        ProxyState.tasks = [...ProxyState.tasks, new Task(rawTask)]
        debugger;
    }

    destroy(id) {
        console.log(" in Service, destroy")
        ProxyState.lists = ProxyState.lists.filter(list => list.id != id)
        ProxyState.tasks = ProxyState.tasks.filter(task => task.listId != id)
    }
    removeList(id) {
        console.log(" in Service, removeList")
        ProxyState.lists = ProxyState.lists.filter(list => list.id != id)
    }
}

export const listsService = new ListsService();