const { categories, products } = require("../db");

exports.Query = {
    hello: () => {
        return ["hello"];
    },
    products: () => {
        return products;
    },
    product: (parent, args, context) => {
        const { id } = args;
        return products.find((el) => el.id === id);
    },
    categories: () => {
        return categories;
    },
    category: (parent, args, context) => {
        const { id } = args;
        return categories.find((el) => el.id === id);
    },
};