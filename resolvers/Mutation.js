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

    deleteReview: (parent, { id }, { db }) => {
        db.reviews = db.reviews.filter((el) => el.id !== id);
        return true;
    },

    updateCategory: (parent, { id, input }, { db }) => {
        const index = db.categories.findIndex((el) => el.id === id);
        if (index === -1) return null;
        db.categories[index] = {...db.categories[index], ...input };
        return db.categories[index];
    },

    updateProduct: (parent, { id, input }, { db }) => {
        const index = db.products.findIndex((el) => el.id === id);
        if (index === -1) return null;
        db.products[index] = {...db.products[index], ...input };
        return db.products[index];
    },

    updateReview: (parent, { id, input }, { db }) => {
        const index = db.reviews.findIndex((el) => el.id === id);
        if (index === -1) return null;
        db.reviews[index] = {...db.reviews[index], ...input };
        return db.reviews[index];
    },
};