/* eslint-disable react/prop-types */

const MyAccountTitle = ({ children }) => {
  return (
    <div className="flex items-center gap-2 border-b pb-2 border-gray-600">
      <div className="h-[20px] w-[3px] bg-[#14805e] rounded-md" />
      <h3 className="text-[15px] text-white">{children}</h3>
    </div>
  );
};

export default MyAccountTitle;
