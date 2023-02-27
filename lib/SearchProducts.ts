import { useQuery } from "@apollo/client";

import { gql } from "../graphql";

const QUERY_PRODUCTS = gql(
    `query searchProducts($search: ProductSearchRequestModelInput!) {
        searchProducts(model: $search) {
        hasMoreResults
        total
            items {
                id
                title
            }
        }
    }`
);

export function searchProducts(id) {
    const params = {};
    //const { loading, data } = useQuery(QUERY_PRODUCTS, params);
    //return data;
}
