import m from "mithril";
import List from "./List";
import { data } from "../models/Image";

export const App = {
  oninit: data.fetch,
  view: () => {
    if (!data.list.length) {
      return (
        <div>
          <h1>Loading ...</h1>
        </div>
      );
    }
    return <List data={data.list} />;
  },
};
