import axios from "axios";

const getGifs = async (value) =>
  new Promise((resolve) => {
    const params = {
      api_key: "1IK5mgfilosWbzhNpn0ptrILfNrbD3O1",
      q: encodeURI(value),
      limit: 30,
    };

    try {
      (async () => {
        const { data } = await axios.get(
          `https://api.giphy.com/v1/gifs/search`,
          { params }
        );
        resolve(data);
      })();
    } catch (e) {
  
    }
  });

export default getGifs;
