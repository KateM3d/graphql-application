exports.Category = {
    products: ({ id: categoryId }, args, { products }) => {
        return products.filter((el) => el.categoryId === categoryId);
    },
};