import React from "react";
import TeamMember from "./TeamMember";

// TODO: change the info below to as per the site. use react loading skeleton.
const teamMembers = [
  {
    name: "Emillie Cole",
    designation: "CEO of Bizidea",
    svg: "assets/img/shapes/team.svg",
    image: "assets/img/team/team-1.jpg",
    facebook: "#",
    twitter: "#",
    linkedin: "#",
    instagram: "#",
  },
  {
    name: "Jack Reader",
    designation: "CEO of Bizidea",
    svg: "assets/img/shapes/team.svg",
    image: "assets/img/team/team-2.jpg",
    facebook: "#",
    twitter: "#",
    linkedin: "#",
    instagram: "#",
  },
  {
    name: "Mickle Jection",
    designation: "CEO of Bizidea",
    svg: "assets/img/shapes/team.svg",
    image: "assets/img/team/team-3.jpg",
    facebook: "#",
    twitter: "#",
    linkedin: "#",
    instagram: "#",
  },
  {
    name: "Jeson Roy",
    designation: "CEO of Bizidea",
    svg: "assets/img/shapes/team.svg",
    image: "assets/img/team/team-4.jpg",
    facebook: "#",
    twitter: "#",
    linkedin: "#",
    instagram: "#",
  },
  {
    name: "Andy Mare",
    designation: "CEO of Bizidea",
    svg: "assets/img/shapes/team.svg",
    image: "assets/img/team/team-5.jpg",
    facebook: "#",
    twitter: "#",
    linkedin: "#",
    instagram: "#",
  },
  {
    name: "John Snow",
    designation: "CEO of Bizidea",
    svg: "assets/img/shapes/team.svg",
    image: "assets/img/team/team-6.jpg",
    facebook: "#",
    twitter: "#",
    linkedin: "#",
    instagram: "#",
  },
];

const Team = () => {
  return (
    <>
      {/* Team Begin */}
      <section
        className="pt-120 pb-70 section-pattern"
        data-bg-img="assets/img/section-pattern/testimonial-pattern.png"
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              {/* Section Title Begin */}
              <div className="section-title text-center">
                <h3>Team Members</h3>
                <h2>Our Experts Team Members</h2>
                <p>
                  Ferrars all spirits his imagine effects amongst neither. It
                  bachelor cheerful of mistaken. Tore has sons put upon wife use
                  bred seen. Its dissimilar invitation ten has discretion
                  unreserved.
                </p>
              </div>
              {/* Section Title End */}
            </div>
          </div>

          <div className="row">
            {teamMembers.map((memberDetails) => (
              <div className="col-lg-4 col-sm-6">
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
