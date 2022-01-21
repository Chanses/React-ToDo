import { ICategoryItem } from "../../models/ICategoryItem";
import { makeObservable, observable, action } from "mobx"

class CategoryStore {
    category: ICategoryItem;
    categoryList: ICategoryItem[];
    constructor() {
        makeObservable(this, {
            category: observable,
            categoryList: observable,
            setName: action,
            setDescription: action,
            setCategoryList: action,
            setCategoryItem: action
        })
        this.category = {
            id: "",
            name: "",
            description: ""
        }
        this.categoryList = []
    }

    setCategoryList(list: ICategoryItem[]) {
        this.categoryList = list;
    }
    setCategoryItem(item: ICategoryItem) {
        this.category = item;
    }
    setName(name: string) {
        this.category.name = name
    };
    setDescription(description: string) {
        this.category.description = description

    };
}

export default new CategoryStore();


