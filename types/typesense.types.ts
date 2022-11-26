export type TypeSenseCollection = 'stores';

export interface iTypeSenseSearchParams {
    q: string,
    query_by: string,
    filter_by?: string,
    sort_by?: string,
    facet_by?: string,
    max_hits?: number,
    max_candidates?: number,
    exhaustive_search?: boolean
}

export interface iTypeSenseResponse<T>{
    data: T[],
    page: number,
    total: number,
    facets?: {
        [key : string]: string[]
    }
}