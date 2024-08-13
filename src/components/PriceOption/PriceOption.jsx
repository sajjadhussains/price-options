import PropTypes from "prop-types";
import { FaCheckCircle } from "react-icons/fa";
const PriceOption = ({ option }) => {
  const { price, name, features } = option;
  return (
    <div className="bg-blue-500 text-white rounded-2xl flex flex-col p-6">
      <div className="flex items-end justify-center my-4">
        <h2 className="text-center text-7xl">{price}</h2>
        <span className="text-xl">/Mo</span>
      </div>
      <h2 className="text-center text-3xl mb-6">{name}</h2>
      <div className="pl-6 flex-grow mb-4">
        {features.map((feature, idx) => (
          <div key={idx} className="flex items-center">
            <FaCheckCircle />
            <li className="list-none ms-3" key={idx}>
              {feature}
            </li>
          </div>
        ))}
      </div>
      <button className="px-10 py-5 bg-green-500 rounded-2xl">Buy Now</button>
    </div>
  );
};

PriceOption.propTypes = {
  option: PropTypes.object,
};
export default PriceOption;
