import { ProxyState } from "../AppState.js"
import List from "../Models/List.js"
import Task from "../Models/Task.js"

class ListsService {

    createLists(rawList) {
        console.log(" in Service")

        ProxyState.lists = [...ProxyState.lists, new List(rawList)]

    }

    //   addTopping(rawTopping) {
    //     ProxyState.toppings = [...ProxyState.toppings, new Topping(rawTopping)]
    //   }

    //   destroy(id) {
    //     ProxyState.pizzas = ProxyState.pizzas.filter(pizza => pizza.id != id)
    //     ProxyState.toppings = ProxyState.toppings.filter(topping => topping.pizzaId != id)
    //   }
    //   removeTopping(id) {
    //     ProxyState.toppings = ProxyState.toppings.filter(topping => topping.id != id)
    //   }
}

export const listsService = new ListsService();