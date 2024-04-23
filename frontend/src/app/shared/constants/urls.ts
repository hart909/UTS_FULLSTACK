const BASE_URL = 'http://localhost:5000';

export const FILMS_URL = BASE_URL + '/api/films';
export const FILMS_TAGS_URL = FILMS_URL+ '/tags';
export const FILMS_BY_SEARCH_URL = FILMS_URL+ '/search/';
export const FILMS_BY_TAG_URL = FILMS_URL+ '/tag/';
export const FILMS_BY_ID_URL = FILMS_URL+ '/';

export const USER_LOGIN_URL = BASE_URL + '/api/users/login';
export const USER_REGISTER_URL = BASE_URL + '/api/users/register';