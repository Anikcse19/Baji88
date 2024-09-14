import Card from "../components/Card";
import Layout from "../components/Layout/Layout";

const SportsPage = () => {
  return (
    <Layout>
      <div className="mt-10 w-[75%] mx-auto">
        <div className="grid grid-cols-6 gap-2">
          {[
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
            20, 21, 22, 23, 24, 25,
          ].map((a) => (
            <Card key={a} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default SportsPage;
