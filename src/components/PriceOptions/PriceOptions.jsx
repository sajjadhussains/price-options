import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
  const priceOptions = [
    {
      id: 1,
      name: "Basic Membership",
      price: 29.99,
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
      price: 49.99,
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
      price: 69.99,
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
      price: 499.99,
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
      price: 24.99,
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
      <h2>Price Options</h2>
      {priceOptions.map((option) => (
        <PriceOption key={option.id} option={option}></PriceOption>
      ))}
    </div>
  );
};

export default PriceOptions;
