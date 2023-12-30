import axios from 'axios';
import { useMutation, useQuery, useQueryClient } from 'react-query';

export function useSaveFormData() {
    // const queryClient = useQueryClient();
    return useMutation(
        (admin) =>
            axios
                .post('https://stage-api.nemtnextgen.com/api/v1/azlaan/vehicle_types', admin, {
                    // headers: {
                    //     // 'Content-Type': 'multipart/form-data',
                    // },
                })
                .then((result) => result.data),
        {
            onSuccess: () => {
                // queryClient.invalidateQueries(adminKeys.admin);
            },
        }
    );
}
