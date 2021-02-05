/**
 * Data Model Interfaces
 */

import { Item } from "./item.interface";
import { Items } from "./items.interface";

/**
 * In-Memory Store
 */

const items: Items = {
    1: {
        id: 1,
        name: "Burger",
        price: 5.99,
        description: "Tasty",
        image: "https://cdn.auth0.com/blog/whatabyte/burger-sm.png"
    },
    2: {
        id: 2,
        name: "Pizza",
        price: 2.99,
        description: "Cheesy",
        image: "https://cdn.auth0.com/blog/whatabyte/pizza-sm.png"
    },
    3: {
        id: 3,
        name: "Tea",
        price: 1.99,
        description: "Informative",
        image: "https://cdn.auth0.com/blog/whatabyte/tea-sm.png"
    }
};

/**
 * Service Methods
 */

export const findAll = async (): Promise<Items> => {
    return items;
};

export const find = async (id: number): Promise<Item> => {
    const record: Item = items[id];

    if (!record) {
        throw new Error("No record found");
    }

    return record;
};

export const create = async (newItem: Item): Promise<void> => {
    const id = new Date().valueOf();

    // Short way
    items[id] = newItem;

    // Long way
    // items[id] = {
    //     id: newItem.id,
    //     name: newItem.name,
    //     price:newItem.price,
    //     description: newItem.description,
    //     image: newItem.image
    // };
};

export const update = async (updatedItem: Item): Promise<void> => {
    if (!items[updatedItem.id]) {
        throw new Error("No record found to update");
    }

    items[updatedItem.id] = updatedItem;

    return;
};

export const remove = async (id: number): Promise<void> => {
    const record: Item = items[id];

    if (!record) {
        throw new Error("No record found to delete");
    }

    delete items[id];

    return;
};