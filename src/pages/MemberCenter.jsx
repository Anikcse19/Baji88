/* eslint-disable react/prop-types */
import Center from "../components/Center";
import Layout from "../components/Layout/Layout";
import DBSideMenu from "../components/DBSideMenu";
import DBTopNav from "../components/DBTopNav";

const MemberCenter = ({ children }) => {
  return (
    <Layout>
      <div className="bg-[#4e4e4e] hidden lg:block">
        <Center>
          <div className="flex justify-between gap-2 my-5">
            {/* SideMenu */}
            <DBSideMenu />

            <div className=" flex flex-col gap-2 w-[77%]">
              {/*Top Nav */}
              <DBTopNav />

              {/* Dynamic Content */}
              <div>{children}</div>
            </div>
          </div>
        </Center>
      </div>
    </Layout>
  );
};

export default MemberCenter;
