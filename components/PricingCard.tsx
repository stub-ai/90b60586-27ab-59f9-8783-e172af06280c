import React from 'react';

interface Plan {
  name: string;
  price: string;
  features: string[];
}

interface PricingCardProps {
  plan: Plan;
}

const PricingCard: React.FC<PricingCardProps> = ({ plan }) => {
  return (
    <div className="flex flex-col items-center justify-center bg-white p-4 shadow-lg rounded-lg">
      <h2 className="font-bold text-2xl mb-4">{plan.name}</h2>
      <span className="font-bold text-xl mb-4">{plan.price}</span>
      <ul className="mb-4">
        {plan.features.map((feature, index) => (
          <li key={index} className="mb-2">
            {feature}
          </li>
        ))}
      </ul>
      <button className="bg-blue-500 text-white px-4 py-2 rounded">Sign Up</button>
    </div>
  );
};

export default PricingCard;