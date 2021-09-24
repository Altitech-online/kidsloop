import axios from "axios";

export default async function api(url, action, data) {
  return await axios[action](url, data);
}
