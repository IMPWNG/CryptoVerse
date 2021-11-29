import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoNewsHeaders = {
        'x-bingapis-sdk': 'true',
        'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
        'x-rapidapi-key': 'd8646beb75msh84fbb1900cf0f0dp11d30ajsn33c311f77aac'
}

const baseUrl = 'https://bing-news-search1.p.rapidapi.com/news';

const createRequest = (url) => ({ url, headers: cryptoNewsHeaders });

export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptosNews: builder.query({
            query: ({ newsCategory, count }) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
        }),
    }),
});

export const { useGetCryptosNewsQuery } = cryptoNewsApi;