import axios from "axios";

const KEY = "AIzaSyAxnuKMLhx-StY1-cnos71kZAy3ls_dtLQ";

/*
 * for developer documentation: https://developers.google.com/youtube/v3/docs/search/list
 */

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
