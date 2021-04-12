import TeamMember from "./TeamMember";

// TODO: change the info below to as per the site. use react loading skeleton.
const teamMembers = [
  {
    name: "Pranitha Nimmagadda",
    designation: "Managing Director",

    image: "/assets/img/team/team-pranitha.png",
    facebook: "https://www.facebook.com/pranithan2",

    linkedin: "https://www.linkedin.com/in/pranitha-nimmagadda",
    instagram: "https://www.instagram.com/justbusinessdubai/",
  },
  {
    name: "Faisal Abbasi",
    designation: "Head of Sales",

    image: "/assets/img/team/team-faisal.png",
    facebook: "https://www.facebook.com/FaisalShakur",

    linkedin: "https://www.linkedin.com/in/faisal-shakur-abbasi-aa336055",
    instagram: "https://www.instagram.com/justbusinessdubai/",
  },
  {
    name: "Faisal Al Awadhi",
    designation: "CEO",

    image: "/assets/img/team/team-faisal-sponsor.png",
    facebook: "https://www.facebook.com/BusinessSetupUAE",

    linkedin: "https://www.facebook.com/BusinessSetupUAE",
    instagram: "https://www.instagram.com/justbusinessdubai/",
  },
];

const Team = () => {
  return (
    <>
      {/* Team Begin */}
      <section className="pt-120 pb-70 section-pattern team">
        <img
          src="/assets/img/triangle.svg"
          className="triSvg"
          alt="background shape 1"
        />
        <img
          src="/assets/img/wavyline.svg"
          className="wavySvg"
          alt="background shape 2"
        />
        <img
          src="/assets/img/circle.svg"
          className="heroSvg4"
          alt="background shape 3"
        />
        <img
          src="/assets/img/filled circle.svg"
          className="heroSvg3"
          alt="background shape 4"
        />
        <div className="container">
          <div className="row">
            <div className="col-12">
              {/* Section Title Begin */}
              <div className="section-title text-center">
                <h3>Team Members</h3>
                <h2>Our Business Setup Experts</h2>
                <p>
                  We are a small team of passionate people who want to see
                  people succeed in their ventures and guide them in the right
                  direction with their business setup needs in UAE.
                </p>
              </div>
              {/* Section Title End */}
            </div>
          </div>

          <div className="row member">
            {teamMembers.map((memberDetails) => (
              <div className="col-lg-4 col-sm-6" key={memberDetails.name}>
                <TeamMember {...memberDetails} />
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Team End */}
    </>
  );
};

export default Team;
