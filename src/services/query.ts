export const queryGetSearchedProducts = (keyWord: any) => {
    return `SELECT * FROM products WHERE name iLike '%${keyWord}%' OR description iLike '%${keyWord}%';`
};

export const queryMostSearchedCategories = () => {
    return `SELECT * FROM categories ORDER BY searched DESC limit 3`;
};
