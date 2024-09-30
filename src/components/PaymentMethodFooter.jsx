const PaymentMethodFooter = () => {
  const paymentMethods = [
    {
      icon: "/public/pay16.png",
    },
    {
      icon: "/public/pay22.png",
    },
    {
      icon: "/public/pay33.png",
    },
    {
      icon: "/public/pay34.png",
    },
    {
      icon: "/public/pay34.png",
    },
    {
      icon: "/public/pay47.png",
    },
    {
      icon: "/public/pay59.png",
    },
    {
      icon: "/public/pay60.png",
    },
    {
      icon: "/public/pay61.png",
    },
    {
      icon: "/public/pay91.png",
    },
  ];

  return (
    <div className="mt-10 md:mt-0 w-[86%]">
      <p className="text-[13px] font-bold md:font-normal text-[#14805e] md:text-white">
      Payment Methods
      </p>

      <div className="flex flex-wrap gap-4 items-center mt-3 md:justify-between">
        {paymentMethods.map((item, idx) => (
          <div key={idx}>
            <img
              src={item.icon}
              alt=""
              className="h-[15px] md:h-6 filter grayscale hover:grayscale-0 transition duration-300 ease-in-out"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PaymentMethodFooter;
