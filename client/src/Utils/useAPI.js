import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AppContext } from "../App";

// api call takes in the type, api url, and any data values to send
const useAPI = (type, url, values) => {
  const [response, setResponse] = useState(null);
  const {userId} = useContext(AppContext)

  useEffect(() => {
    const NewValues = {...values, ...{created_by: userId}}
    
    switch (type) {
      case "get":
        axios
          .get(url)
          .then(res => setResponse(res.data))
          .catch(err => console.log(err));
        break;

      case "post":
        axios
          .post(url, NewValues)
          .then(res => res.data)
          .catch(err => console.log(err));
        break;

      case "put":
        axios
          .put(url, NewValues)
          .then(res => setResponse(res.data))
          .catch(err => console.log(err));
        break;

      case "delete":
        axios
          .delete(url)
          .then(res => res.data)
          .catch(err => console.log(err));
        break;

      default:
        console.log("no type passed");
    }
  }, [type, url, values, userId]);

  return response;
};

export default useAPI;
