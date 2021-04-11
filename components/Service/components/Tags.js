import Features from "../../features/Features";

const Tags = (props) => {
  return (
    <>
      {/* Widget Tag Cloud Begin */}
      <div className="widget widget_tag_cloud">
        <div className="widget-title">
          <h4>Tags</h4>
        </div>
        <div className="tagcloud">
          {props.tags.map((tag) => {
            return <a key={tag}>{tag}</a>;
          })}
        </div>
      </div>
      {/* Widget Tag Cloud End */}
    </>
  );
};

export default Tags;
