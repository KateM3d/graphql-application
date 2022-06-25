exports.Product = {
    category: ({ categoryId }, args, { categories }) => {
        return categories.find((el) => el.id === categoryId);
    },
    reviews: ({ id }, agrs, { reviews }) => {
        return reviews.filter((el) => el.productId === id);
    },
};