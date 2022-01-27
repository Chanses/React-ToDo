import { ICategoryItem } from "../models/ICategoryItem";
import { makeObservable, observable, action } from "mobx"

class CategoryStore {

    categoryList: ICategoryItem[];
    constructor() {
        makeObservable(this, {

            categoryList: observable,
            setCategoryList: action,

        })

        this.categoryList = []

    }

    setCategoryList(list: ICategoryItem[]) {
        this.categoryList = list;
    }
}

export default new CategoryStore();


