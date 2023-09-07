import axios from "axios";

export default axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

/**export const params = `?appId=${import.meta.env.VITE_APPID}&poolId=${
  import.meta.env.VITE_POOLID
}`;

/**{

    appId : import.meta.env.VITE_APPID,
    poodId : import.meta.env.VITE_POOLID
}*/
