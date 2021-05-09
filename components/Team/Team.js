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

    linkedin:
      "https://www.linkedin.com/company/just-business-setup-experts-uae",
    instagram: "https://www.instagram.com/justbusinessdubai/",
  },
];

const Team = () => {
  return (
    <>
      {/* Team Begin */}
      <section className="pt-120 pb-70 section-pattern team">
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
                  direction with their Business Setup needs in UAE.
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
