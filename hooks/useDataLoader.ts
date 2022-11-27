import { useRef, useState } from 'react';
import useTypeSense from './useTypeSense';
import { iTypeSenseSearchParams, TypeSenseCollection } from '../types/typesense.types';


export interface iDataLoaderConfig<CollectionType, ListType, FacetType> {
    collection: TypeSenseCollection,
    initialParams: iTypeSenseSearchParams,
    listItem?: (item: CollectionType) => ListType,
    facetItem?: (item: string) => FacetType
}

const useDataLoader = <CollectionType, ListType, FacetType>({ 
    collection,
    initialParams,
    listItem,
    facetItem
}: iDataLoaderConfig<CollectionType, ListType, FacetType>) => {
    const searchParams = useRef<iTypeSenseSearchParams>(initialParams);

    const { search } = useTypeSense();
    const [list, setList] = useState<ListType[] | CollectionType[]>([]); 
	const [facets, setFacets] = useState<FacetType[] | string[]>([]);

    const load = async (filter?: string[]) => {
        const response = await search<CollectionType>(collection, getParams(filter)); 

		if(response.facets && initialParams.facet_by ){
            let facets: FacetType[] | string[] = response.facets[initialParams.facet_by]
            if(facetItem) facets = facets.map(facetItem);
			setFacets(facets)
		}
        const result = listItem ? response.data.map( listItem ): response.data;
		setList(result);
    }

    const getParams = (filter?: string[]) => {
        let newParams = {...initialParams};
        if(filter){
            const currentFilter = newParams.filter_by ? `${newParams.filter_by} &&` : ''
            newParams = {
                ...newParams,
                filter_by: `${currentFilter} ${filter.join('&&')}`
            }
        }
        return newParams;
    }

    return {
        load,
        list,
        facets
    }
}

export default useDataLoader