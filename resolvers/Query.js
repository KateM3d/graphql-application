exports.Query = {
    hello: (parent, args, context) => "hello",
    products: (parent, { filter }, { products }) => {
        let filteredProducts = products;
        if (filter) {
            if (filter.onSale === true) {
                filteredProducts = filteredProducts.filter((el) => {
                    return el.onSale;
                });
            }
        }
        return filteredProducts;
    },
    product: (parent, { id }, { products }) => {
        return products.find((el) => el.id === id);
    },
    categories: (parent, args, { categories }) => {
        return categories;
    },
    category: (parent, { id }, { categories }) => {
        return categories.find((el) => el.id === id);
    },
};