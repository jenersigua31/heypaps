import { useRef, useState } from 'react';
import useTypeSense from './useTypeSense';
import { iTypeSenseSearchParams, TypeSenseCollection } from '../types/typesense.types';


export interface iApiConfig<CollectionType, ListType, FacetType> {
    collection: TypeSenseCollection,
    initialParams: iTypeSenseSearchParams,
    listItem: (item: CollectionType) => ListType,
    facetItem?: (item: string) => FacetType
}

const useAPI = <CollectionType, ListType, FacetType>({ 
    collection,
    initialParams,
    listItem,
    facetItem
}: iApiConfig<CollectionType, ListType, FacetType>) => {
    const searchParams = useRef<iTypeSenseSearchParams>(initialParams);

    const { search } = useTypeSense();
    const [list, setList] = useState<ListType[]>([]); 
	const [facets, setFacets] = useState<FacetType[]>([]);

    const load = async (filter?: string[]) => {
        const response = await search<CollectionType>(collection, getParams(filter)); 

		if(facetItem && response.facets && initialParams.facet_by ){
            const facets = response.facets[initialParams.facet_by].map( facetItem );
			setFacets(facets)
		}
        const result = response.data.map( listItem );
        console.log(response.data.length)
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

export default useAPI