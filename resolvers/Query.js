const { db } = require("../db");

exports.Query = {
    products: (parent, { filter }, { db }) => {
        let filteredProducts = db.products;
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
    product: (parent, { id }, { db }) => {
        return db.products.find((el) => el.id === id);
    },
    categories: (parent, args, { db }) => {
        return db.categories;
    },
    category: (parent, { id }, { db }) => {
        return db.categories.find((el) => el.id === id);
    },
};