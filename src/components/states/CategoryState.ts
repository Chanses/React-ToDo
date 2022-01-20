import { ICategoryItem } from "../../models/ICategoryItem";
import { makeObservable, observable, computed, action } from "mobx"

class CategoryState {
    category: ICategoryItem;
    constructor() {
        makeObservable(this, {
            category: observable,
            setName: action,

        })
        this.category = {
            id: "",
            name: "",
            description: ""
        }
    }
    setName(name: string) {
        console.log(this.category.name)
        this.category.name = name
    };
}




export default new CategoryState();


