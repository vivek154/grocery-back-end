export const EMPTY_ROUTE = '/';
export const BASE_URL = '/v1/';

export const BASE_ROUTES = {
    HEALTH_CHECK: `${BASE_URL  }healthcheck`,
    AUTH: `${BASE_URL  }auth`,
    USERS: `${BASE_URL  }users`,
};

export const ROUTES = {
    PING: '/ping',
    TOKEN: '/token',
    OTP_INIT: '/otp/init',
    OTP_VERIFY: '/otp/verify',
    TOKEN_REFRESH: '/token/refresh',
};
