const { reviews } = require("../db");

exports.Query = {
    products: (parent, { filter }, { products }) => {
        let filteredProducts = products;
        if (filter) {
            const { onSale, avgRating } = filter;
            if (onSale === true) {
                filteredProducts = filteredProducts.filter((el) => {
                    return el.onSale;
                });
            }
            if ([1, 2, 3, 4, 5].includes(avgRating)) {
                filteredProducts = filteredProducts.filter((el) => {
                    let sumRating = 0;
                    let numberOfReviews = 0;
                    reviews.forEach((review) => {
                        if (review.productId === el.id) {
                            sumRating += review.rating;
                            numberOfReviews++;
                        }
                    });
                    const avgProductRating = sumRating / numberOfReviews;
                    return avgProductRating >= avgRating;
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