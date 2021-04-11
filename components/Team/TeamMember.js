import Image from "next/image";

const TeamMember = ({
  name,
  designation,
  svg,
  image,
  facebook,
  twitter,
  linkedin,
  instagram,
}) => {
  return (
    <>
      {/* Single Team Begin */}
      <div className="single-team-member">
        {/* Team Image Begin */}
        <div className="image position-relative">
          {/* <img src={svg} className="svg" alt="" /> */}
          <Image src={image} alt="" width="348" height="283" quality="90" />
        </div>
        {/* Team Image End */}

        {/* Team Info Begin */}
        <div className="team-info">
          <div className="info-front text-center">
            <h4>{name}</h4>
            <p>{designation}</p>
          </div>

          <div className="info-back">
            <ul className="social_icon_list list-inline text-center w-100 d-flex justify-content-around">
              <li>
                <a href={facebook}>
                  <i className="fa fa-facebook" aria-hidden="true"></i>
                </a>
              </li>
              {/* <li>
                <a href={twitter}>
                  <i className="fa fa-twitter" aria-hidden="true"></i>
                </a>
              </li> */}
              <li>
                <a href={linkedin}>
                  <i className="fa fa-linkedin" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href={instagram}>
                  <i className="fa fa-instagram" aria-hidden="true"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* Team Info End */}
      </div>
      {/* Single Team End */}
    </>
  );
};

export default TeamMember;
