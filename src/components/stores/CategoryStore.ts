import { ICategoryItem } from "../../models/ICategoryItem";
import { makeObservable, observable, action } from "mobx"

class CategoryStore {
    categoryItem: ICategoryItem;
    categoryList: ICategoryItem[];
    constructor() {
        makeObservable(this, {
            categoryItem: observable,
            categoryList: observable,
            setCategoryList: action,

        })

        this.categoryList = []
        this.categoryItem = {
            id: "",
            name: "",
            description: "",
        }
    }
    setCategoryList(list: ICategoryItem[]) {
        this.categoryList = list;
    }



}

export default new CategoryStore();


