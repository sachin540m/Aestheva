import React from 'react';

export default function Marquee() {
  const items = [
    "Skincare", "Haircare", "Laser Treatments", "Aesthetic Procedures", "Body Care", "Wellness"
  ];
  
  // Duplicate the list to make a seamless infinite loop
  const marqueeItems = [...items, ...items, ...items, ...items];

  return (
    <div className="marquee-container">
      <div className="marquee-content">
        {marqueeItems.map((item, idx) => (
          <div key={idx} className="marquee-item">
            {item} <span>•</span>
          </div>
        ))}
      </div>
    </div>
  );
}
