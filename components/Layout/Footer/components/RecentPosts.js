const RecentPosts = () => {
  return (
    <>
      <div className="col-lg-3 col-sm-6">
        {/* Widget Recent Post Begin */}
        <div className="widget widget_recent_entries">
          {/* Widget Title Begin  */}
          <div className="widget-title">
            <h4>Recent Posts</h4>
          </div>
          {/* Widget Title End  */}

          {/* Single Latest Post Begin */}
          <div className="single-post media">
            <div className="post-image">
              <img src="assets/img/blog/recent-post.png" data-rjs="2" alt="" />
            </div>
            <div className="post-content media-body">
              <span className="posted-on">18 Feb, 2019</span>
              <h5>
                <a href="#">Funds in Institutional Portfolios</a>
              </h5>
            </div>
          </div>
          {/* Single Latest Post End */}

          {/* Single Latest Post Begin */}
          <div className="single-post media">
            <div className="post-image">
              <img src="assets/img/blog/recent-post.png" data-rjs="2" alt="" />
            </div>
            <div className="post-content media-body">
              <span className="posted-on">18 Feb, 2019</span>
              <h5>
                <a href="#">Funds in Institutional Portfolios</a>
              </h5>
            </div>
          </div>
          {/* Single Latest Post End */}
        </div>
        {/* Widget Recent Post End */}
      </div>
    </>
  );
};

export default RecentPosts;
