export const queryGetSearchedProducts = (
    keyWord: any
) => `SELECT * FROM products WHERE name iLike '%${keyWord}%' 
OR description iLike '%${keyWord}%';`;

export const queryMostSearchedCategories = () =>
    `SELECT * FROM categories ORDER BY searched DESC limit 3`;
