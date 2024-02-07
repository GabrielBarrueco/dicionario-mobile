import { useQuery, useQueryClient, useMutation, MutationFunction, QueryFunction } from '@tanstack/react-query'

export function useRequestProcessor() {
  const queryClient = useQueryClient();

  function query(key: string[], queryFunction: QueryFunction, options = {}) {
    return useQuery({
      queryKey: key,
      queryFn: queryFunction,
      ...options,
    });
  }

  function mutate(key: string[], mutationFunction: MutationFunction, options = {}) {
    return useMutation({
      mutationKey: key,
      mutationFn: mutationFunction,
      onSettled: () => queryClient.invalidateQueries(),
      ...options,
    });
  }

  return { query };
}