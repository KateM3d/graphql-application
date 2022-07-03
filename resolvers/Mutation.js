const { v4: uuid } = require("uuid");
const { db } = require("../db");
const { Product } = require("./Product");

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
    addProduct: (parent, { input }, { db }) => {
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

        db.products.push(newProduct);

        return newProduct;
    },

    addReview: (parent, { input }, { db }) => {
        const { date, title, comment, rating, productId } = input;
        const newReview = {
            date,
            title,
            comment,
            rating,
            productId,
        };
        db.reviews.push(newReview);

        return newReview;
    },

    deleteCategory: (parent, { id }, { db }) => {
        db.categories = db.categories.filter((el) => el.id !== id);
        db.products = db.products.map((el) => {
            if (el.categoryId === id)
                return {
                    ...el,
                    categoryId: null,
                };
            else return el;
        });
        return true;
    },

    deleteProduct: (parent, { id }, { db }) => {
        db.products = db.products.filter((el) => el.id !== id);
        db.reviews = db.reviews.filter((el) => {
            el.id !== id;
        });
        return true;
    },
};