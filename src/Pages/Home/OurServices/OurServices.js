import React from "react";
import service1 from "../../../images/service1.png";
import service2 from "../../../images/service2.png";
import service3 from "../../../images/service3.png";
import deliveryF from "../../../images/icons/Group 204.png";
import deliveryH from "../../../images/icons/Group 245.png";
import respond from "../../../images/icons/Group 1133.png";
import Service from "../Service/Service";

const OurServices = () => {
  const services = [
    {
      id: "1",
      title: "Fast Delivery",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione deserunt, in obcaecati quos facere odio quaerat eaque. Consectetur aperiam alias a amet. Unde itaque sed perspiciatis eum, voluptatibus        incidunt vel.",
      image: service2,
      icon: deliveryH,
    },
    {
      id: "2",
      title: "Fast Delivery",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione deserunt, in obcaecati quos facere odio quaerat eaque. Consectetur aperiam alias a amet. Unde itaque sed perspiciatis eum, voluptatibus        incidunt vel.",
      image: service1,
      icon: respond,
    },
    {
      id: "3",
      title: "Fast Delivery",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione deserunt, in obcaecati quos facere odio quaerat eaque. Consectetur aperiam alias a amet. Unde itaque sed perspiciatis eum, voluptatibus        incidunt vel.",
      image: service3,
      icon: deliveryF,
    },
  ];

  return (
    <div className="mx-32">
      <h1 className="text-4xl text-left mb-3">Why you choose us?</h1>
      <p className="text-left text-gray- w-1/3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
        deserunt, in obcaecati quos facere odio quaerat eaque. Consectetur
        aperiam alias a amet. Unde itaque sed perspiciatis eum, voluptatibus
        incidunt vel.
      </p>
      <div className="my-5 grid grid-cols-3 gap-x-8">
        {services.map((service) => (
          <Service key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default OurServices;
