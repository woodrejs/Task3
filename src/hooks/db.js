import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setList } from "../redux/quotes.slice";
import { setError } from "../redux/error.slice";

export default function useDB() {
  //hooks
  const dispatch = useDispatch();
  const quotes = useSelector(({ quotesSlice }) => quotesSlice.list);

  return {
    getData: async () => {
      try {
        const { data } = await axios.get(process.env.REACT_APP_DB_URL);
        dispatch(setList(data));
      } catch (error) {
        dispatch(setError("Database error."));
      }
    },
    quotes,
  };
}
