import m from "mithril";

export default function Image() {
  return {
    view: (vnode) => {
      const { item } = vnode.attrs;
      return (
        <div>
          <img
            src={item.download_url}
            width={item.width / 10}
            height={item.height / 10}
            alt={item.author}
          />
          <h1>{item.author}</h1>
        </div>
      );
    },
  };
}
