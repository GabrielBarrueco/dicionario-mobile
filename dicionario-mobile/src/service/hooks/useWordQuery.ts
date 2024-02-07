import axiosClient from "../api";
import { useRequestProcessor } from "../useRequestProcessor";

interface IUseWordQuery {
  word: string;
}

export const useWordQuery = (props: IUseWordQuery) => {
  const { query } = useRequestProcessor();
   const { data: Word, isLoading, isError } = query(
    ['word'],
    () => axiosClient.get(`/${props.word}`).then((res) => res.data),
    { enabled: true }
  );

  return { Word, isLoading, isError };
};