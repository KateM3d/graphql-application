exports.Product = {
    category: ({ categoryId }, args, { db }) => {
        return db.categories.find((el) => el.id === categoryId);
    },
    reviews: ({ id }, agrs, { db }) => {
        return db.reviews.filter((el) => el.productId === id);
    },
};