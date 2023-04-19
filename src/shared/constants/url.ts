import { CANCELLED } from "dns";

export const EMPTY_ROUTE = '/';
export const BASE_URL = '/v1/';

export const BASE_ROUTES = {
    HEALTH_CHECK: `${BASE_URL}healthcheck`,
    AUTH: `${BASE_URL}auth`,
    USERS: `${BASE_URL}users`,
    vegetable:`${BASE_URL}vegetable`,
    categories:`${BASE_URL}categories`,
    products:`${BASE_URL}products`
};

export const ROUTES = {
    PING: '/ping',
    TOKEN: '/token',
    OTP_INIT: '/otp/init',
    OTP_VERIFY: '/otp/verify',
    TOKEN_REFRESH: '/token/refresh',
    ADD_VEGETABLE:'/add',
    GET_ALL_VEGETABLES:'/getAll',
    CREATE_USER:'/createUser',
    CREATE_CATEGORY:'/createCategory',
    GET_ALL_CATEGORIES:`/allCategories`,
    CREATE_PRODUCT:'/create',
    GET_ALL_PRODUCTS:'/all',
    GET_CATEGORY_PRODUCTS:'/all/:categoryId',
    SEARCH_PRODUCTS:"/search/:keyWord"
};
