import { TypeSenseCollection, iTypeSenseSearchParams, iTypeSenseResponse } from '../types/typesense.types';
import Typesense from 'typesense';
import { CONFIG } from '../config/type-sense.config';

const useTypeSense = () => {
    const client = new Typesense.Client({         
        apiKey: CONFIG.apiKey,
        nodes: [
            {
                host: CONFIG.host,
                port: CONFIG.port,
                path: '',  
                protocol: "http",
            },
        ],
        connectionTimeoutSeconds: 5
    })

    const search = <T>(
        collection: TypeSenseCollection, 
        params: iTypeSenseSearchParams
    ): Promise<iTypeSenseResponse<T>> => {
        
        const resp = (res: any, rej: any) => {
            client
                .collections(collection)
                .documents()
                .search(params)
            .then((e) => { 
                const documents = e.hits?.map( h => h.document );
                res({
                    data: documents,
                    total: e.found,
                    page: e.page
                })
            }).catch( e => rej(e))
        }

        return new Promise(resp);
    }

    return {
        search
    }
}

export default useTypeSense;