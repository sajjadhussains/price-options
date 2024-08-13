import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
  const priceOptions = [
    {
      id: 1,
      name: "Basic Membership",
      price: 29,
      duration: "1 month",
      features: [
        "Access to gym equipment",
        "Locker room access",
        "1 guest pass per month",
      ],
    },
    {
      id: 2,
      name: "Standard Membership",
      price: 49,
      duration: "1 month",
      features: [
        "Access to gym equipment",
        "Locker room access",
        "Unlimited group classes",
        "3 guest passes per month",
      ],
    },
    {
      id: 3,
      name: "Premium Membership",
      price: 69,
      duration: "1 month",
      features: [
        "Access to gym equipment",
        "Locker room access",
        "Unlimited group classes",
        "Access to sauna and pool",
        "5 guest passes per month",
        "Free personal training session",
      ],
    },
    {
      id: 4,
      name: "Annual Membership",
      price: 499,
      duration: "12 months",
      features: [
        "Access to gym equipment",
        "Locker room access",
        "Unlimited group classes",
        "Access to sauna and pool",
        "10 guest passes per year",
        "Discounted personal training sessions",
      ],
    },
    {
      id: 5,
      name: "Student Membership",
      price: 24,
      duration: "1 month",
      features: [
        "Access to gym equipment",
        "Locker room access",
        "2 guest passes per month",
      ],
    },
  ];

  return (
    <div>
      <h2 className="text-3xl text-center font-bold mb-10 text-slate-500">
        Best Prices in the Town
      </h2>
      <div className="grid md:grid-cols-3 max-w-6xl mx-auto gap-5">
        {priceOptions.map((option) => (
          <PriceOption key={option.id} option={option}></PriceOption>
        ))}
      </div>
    </div>
  );
};

export default PriceOptions;
