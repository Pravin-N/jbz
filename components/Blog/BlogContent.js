const BlogContent = () => {
  return (
    <>
      <div className="col-lg-8">
        {/* Blog Details Begin */}
        <div className="blog-details">
          {/* Blog Details Image Begin */}
          <div className="blog-details-image">
            <img src="/assets/img/blog/blog-details.jpg" alt="" />
          </div>
          {/* Blog Details Image End */}

          {/* Post Meta Begin */}
          <div className="post-meta">
            <ul className="list-inline">
              <li>
                By: <a href="#">Admin</a>
              </li>
              <li>
                On: <a href="#">17 February, 2019</a>
              </li>
              <li>
                Category: <a href="#">Finance</a> <a href="#">Corporate</a>{" "}
              </li>
            </ul>
          </div>
          {/* Post Meta End */}

          {/* Blog Details Content Begin */}
          <div className="blog-details-content">
            <p>
              Now has you views woman noisy off match money rooms. To up remark
              it eldest length oh passed. Speedily say has suitable disposal add
              boy. On forth doubt miles of child. Exercise joy man children
              rejoiced. Yet uncommonly his ten who diminution astonished.
              Demesne manners savings staying had. Under folly balls death own
              point now men. Match way these she avoid see death. She on drift
              their fat off.
            </p>

            <blockquote>
              <p>
                For norland produce wishing. To figure on it spring season up.
                Her provision acuteness had excellent two why intention.
              </p>
            </blockquote>

            <h3>Florida Retirement System</h3>

            <div className="row">
              <div className="col-md-6">
                <p>
                  Smallest directly families surprise honoured an. Speaking
                  replying mistress him numerous she returned feelings may day.
                  Evening way luckily son exposed get general greatly. Zealously
                  prevailed be arranging do. Set arranging too dejection
                  september happiness. Understood instrument or do connection no
                  appearance do invitation. Dried quick round it or order. Add
                  past see west felt did any. Say out noise you taste merry
                  plate you share. My resolve arrived is we chamber be removal.
                </p>
              </div>
              <div className="col-md-6">
                <img src="assets/img/blog/blog-details_2.jpg" alt="" />
              </div>
            </div>

            <p>
              As it so contrasted oh estimating instrument. Size like body some
              one had. Are conduct viewing boy minutes warrant expense.
              Tolerably behaviour may admitting daughters offending her ask own.
              Praise effect wishes change way and any wanted. Lively use looked
              latter regard had. Do he it part more last in. Merits ye if mr
              narrow points. Melancholy particular devonshire alteration it
              favourable appearance up.
            </p>
          </div>
          {/* Blog Details Content End */}

          {/* Tag/Share Begin */}
          <div className="row align-items-center mb-30">
            <div className="col-md-6">
              {/* Post Tags Begins */}
              <div className="post-tags mb-30">
                <ul className="list-inline">
                  <li>Tags: </li>
                  <li>
                    <a href="#">Finance</a> <a href="#">Business</a>
                  </li>
                </ul>
              </div>
              {/* Post Tags End */}
            </div>
            <div className="col-md-6">
              {/* Post Share Begin */}
              <div className="post-share text-lg-right mb-30">
                <ul className="list-inline social_icon_list">
                  <li>Share on: </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-facebook" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-twitter" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-linkedin" aria-hidden="true"></i>
                    </a>
                  </li>
                </ul>
              </div>
              {/* Post Share End */}
            </div>
          </div>
          {/* Tag/Share End */}

          {/* Post Pagination Begin */}
          <div className="post-pagination d-flex align-items-center justify-content-between flex-column flex-md-row">
            {/* Single Post Pagination Begin */}
            <div className="single-post-pagination media align-items-center mb-50 mb-md-0">
              <div className="pagination-image">
                <a href="#">
                  <img src="assets/img/blog/nav1.png" alt="" />
                </a>
              </div>
              <div className="media-body">
                <a href="#" className="d-inline-flex align-items-center">
                  <img
                    src="assets/img/icons/angle-left.svg"
                    className="svg"
                    alt=""
                  />
                  previous
                </a>
                <h6>How Can You Maximize Your Savings in the New Year</h6>
              </div>
            </div>
            {/* Single Post Pagination End */}

            {/* Single Post Pagination Begin */}
            <div className="single-post-pagination next media flex-row-reverse align-items-center">
              <div className="pagination-image">
                <a href="#">
                  <img src="assets/img/blog/nav2.png" alt="" />
                </a>
              </div>
              <div className="media-body text-right">
                <a
                  href="#"
                  className="d-inline-flex flex-row-reverse align-items-center"
                >
                  <img
                    src="assets/img/icons/angle-right.svg"
                    alt=""
                    className="svg"
                  />
                  next
                </a>
                <h6>How to Determine Your #1 Financial Goal For the Year</h6>
              </div>
            </div>
            {/* Single Post Pagination End */}
          </div>
          {/* Post Pagination End */}

          {/* Post Comment & Reply Begin */}
          <div className="post-comments-wrap mt-60">
            <h4>3 Comments</h4>
            {/* Single Comment */}
            <div className="single-comment-wrapper">
              <div className="single-post-comment media flex-column flex-sm-row">
                <div className="comment-author-image mb-30 mb-sm-0">
                  <img src="assets/img/blog/comment-1.png" alt="" />
                </div>
                <div className="comment-content media-body">
                  <div className="d-flex align-items-sm-end justify-content-between mb-1">
                    <div className="content-top">
                      <h6>Admin</h6>
                      <span>12 Feb 2019</span>
                    </div>

                    <a href="#" className="reply-btn">
                      Reply
                    </a>
                  </div>
                  <p>
                    Gave read use way make spot how nor. In daughter goodness an
                    likewise consider at procured wandered. Songs words wrong by
                    me hills heard timed. Happy eat may doors songs.
                  </p>
                </div>
              </div>
              {/* Comment Reply */}
              <div className="post-comment-reply single-post-comment media flex-column flex-sm-row">
                <div className="comment-author-image mb-30 mb-sm-0">
                  <img src="assets/img/blog/comment-2.png" alt="" />
                </div>
                <div className="comment-content media-body">
                  <div className="d-flex align-items-sm-end justify-content-between mb-1">
                    <div className="content-top">
                      <h6>Visitor</h6>
                      <span>12 Feb 2019</span>
                    </div>

                    <a href="#" className="reply-btn">
                      Reply
                    </a>
                  </div>
                  <p>
                    Smallest directly families honoured am an. Speaking replying
                    mistress him numerous she returned feelings may day.
                  </p>
                </div>
              </div>
              {/* End Comment Reply */}
            </div>
            {/* End of Single Comment */}

            {/* Single Comment */}
            <div className="single-comment-wrapper">
              <div className="single-post-comment media flex-column flex-sm-row">
                <div className="comment-author-image mb-30 mb-sm-0">
                  <img src="assets/img/blog/comment-3.png" alt="" />
                </div>
                <div className="comment-content media-body">
                  <div className="d-flex align-items-sm-end justify-content-between mb-1">
                    <div className="content-top">
                      <h6>Admin</h6>
                      <span>12 Feb 2019</span>
                    </div>
                    <a href="#" className="reply-btn">
                      Reply
                    </a>
                  </div>
                  <p>
                    As it so contrasted oh estimating instrument. Size like body
                    some one had. Are conduct viewing boy minutes warrant
                    expense.
                  </p>
                </div>
              </div>
            </div>
            {/* End of Single Comment */}
          </div>
          {/* Post Comment & Reply End */}

          {/* Comment Form Begin */}
          <div className="comments-form mt-60">
            <h4>Leave your comment here</h4>
            <form action="#">
              <div className="row">
                <div className="col-lg-6">
                  <input
                    className="theme-input-style"
                    type="text"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="col-lg-6">
                  <input
                    className="theme-input-style"
                    type="text"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="col-12">
                  <textarea
                    className="theme-input-style"
                    placeholder="Write your comments"
                  ></textarea>
                </div>
                <div className="col-12">
                  <button type="submit" className="btn">
                    <span>post comment</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
          {/* Comment Form End */}
        </div>
        {/* Blog Details End */}
      </div>
    </>
  );
};

export default BlogContent;
