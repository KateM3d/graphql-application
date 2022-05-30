const { products } = require("../db");

exports.Category = {
    products: (parent, args, context) => {
        const categoryId = parent.id;
        return products.filter((el) => el.categoryId === categoryId);
    },
};