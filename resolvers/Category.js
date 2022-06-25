const { categories } = require("../db");

exports.Category = {
    products: ({ id: categoryId }, { filter }, { products }) => {
        const categoryProducts = products.filter(
            (el) => el.categoryId === categoryId
        );
        let filteredCategoryProducts = categoryProducts;
        const { onSale, avgRating } = categories;
        if (filter) {
            if (onSale === true) {
                filteredCategoryProducts = filteredCategoryProducts.filter((el) => {
                    return el.onSale;
                });
            }
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
        return filteredCategoryProducts;
    },
};