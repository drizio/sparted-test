import m from "mithril";

export default function Image() {
  return {
    view: (vnode) => {
      const { item } = vnode.attrs;
      return (
        <div className="item">
          <img
            src={item.download_url}
            width="100%"
            height="100%"
            alt={item.author}
          />
          <div className="image-author">
            <h1>{item.author}</h1>
          </div>
        </div>
      );
    },
  };
}
