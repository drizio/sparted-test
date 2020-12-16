import m from "mithril";
import Image from "./Image";

export default function List() {
  return {
    view: (vnode) => {
      return vnode.attrs.data.map((item) => <Image item={item} />);
    },
  };
}
