const { v4: uuid } = require("uuid");
const { categories, products } = require("../db");

exports.Mutation = {
    addCategory: (parent, { input }, cotext) => {
        const { name } = input;
        const newCategory = {
            id: uuid(),
            name,
        };

        categories.push(newCategory);

        return newCategory;
    },
    addProduct: (parent, { input }, { products }) => {
        const { name, description, quantity, price, image, onSale, categoryId } =
        input;
        const newProduct = {
            id: uuid(),
            name,
            description,
            quantity,
            price,
            image,
            onSale,
            categoryId,
        };

        products.push(newProduct);

        return newProduct;
    },

    addReview: (parent, { input }, { reviews }) => {
        const { date, title, comment, rating, productId } = input;
        const newReview = {
            date,
            title,
            comment,
            rating,
            productId,
        };
        reviews.push(newReview);

        return newReview;
    },
};