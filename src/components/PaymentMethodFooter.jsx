const PaymentMethodFooter = () => {
  const paymentMethods = [
    {
      icon: "/pay16.png",
    },
    {
      icon: "/pay22.png",
    },
    {
      icon: "/pay33.png",
    },
    {
      icon: "/pay34.png",
    },
    {
      icon: "/pay34.png",
    },
    {
      icon: "/pay47.png",
    },
    {
      icon: "/pay59.png",
    },
    {
      icon: "/pay60.png",
    },
    {
      icon: "/pay61.png",
    },
    {
      icon: "/pay91.png",
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
