import React from "react";
import Search from "./Service/components/Search";
import WidgetLinks from "./Service/components/WidgetLinks";
import RelatedPosts from "./Service/components/RelatedPosts";
import Tags from "./Service/components/Tags";
import ServicesCta from "./Service/components/ServicesCta";

const SideBar = () => {
  return (
    <>
      {/* Sidebar Begin */}
      <aside className="sidebar mt-5 mt-lg-0">
        <Search />

        <WidgetLinks />
        <ServicesCta />

        <RelatedPosts />

        <Tags />
      </aside>
      {/* Sidebar End */}
    </>
  );
};

export default SideBar;
