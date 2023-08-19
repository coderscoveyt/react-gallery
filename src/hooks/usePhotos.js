import axios from "axios";
import { useEffect, useState } from "react";

function usePhotos(id = null, limit = 64) {
  const [photos, setPhotos] = useState([]);
  const [photo, setPhoto] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const getData = async () => {
    try {
      const url = isNaN(parseInt(id)) ?
        `https://jsonplaceholder.typicode.com/photos?_limit=${limit}` :
        `https://jsonplaceholder.typicode.com/photos/${id}`;
      const res = await axios.get(url);
      if (Array.isArray(res.data)) setPhotos(res.data);
      else setPhoto(res.data);
    } catch (error) { setError(error); } finally { setIsLoading(false); }
  }

  // eslint-disable-next-line
  useEffect(() => { getData(); }, [id]);
  return { photos, photo, error, isLoading };
}

export default usePhotos;