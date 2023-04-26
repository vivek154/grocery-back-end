// import { CANCELLED } from "dns";

export const EMPTY_ROUTE = '/';
export const BASE_URL = '/v1/';

export const BASE_ROUTES = {
    HEALTH_CHECK: `${BASE_URL}healthcheck`,
    AUTH: `${BASE_URL}auth`,
    USERS: `${BASE_URL}users`,
    categories:`${BASE_URL}categories`,
    products:`${BASE_URL}products`,
    
};

export const ROUTES = {
    PING: '/ping',
    TOKEN: '/token',
    OTP_INIT: '/otp/init',
    OTP_VERIFY: '/otp/verify',
    TOKEN_REFRESH: '/token/refresh',
    CREATE_USER:'/createUser',
    CREATE_CATEGORY:'/createCategory',
    GET_ALL_CATEGORIES:`/all-categories`,
    CREATE_PRODUCT:'/create',
    GET_ALL_PRODUCTS:'/all',
    GET_CATEGORY_PRODUCTS:'/all/:categoryId',
    SEARCH_PRODUCTS:"/search/:keyWord",
    GET_CATEGORY_BY_NAME:"/search-by-name/:categoryName",
    GET_MOST_SEARCHED_CATEGORIES:"/most-searched",
    FILTER_PRODUCTS:"/filter-products"
};
