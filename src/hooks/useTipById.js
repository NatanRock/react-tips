import { useQuery } from 'react-query';
import { api } from '../api';

export const useTipById = (id) => {
    const { data, isFetchedAfterMount } = useQuery(['tips', id], () => api.gettipById(id));

    return {
        isFetchedAfterMount,
        data: data || {},
    };
};
