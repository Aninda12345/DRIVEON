import React from "react";

const testimonialData = [
  {
    name: "Bikram",
    image: "",
    description: "DriveOn offers a great variety of cars and convenience of pick-up and drop-off is unbeatable.I always recommend them to my friends for visiting the city.",
    aosDelay: "0",
  },
  {
    name: "Deba",
    image: "",
    description: "The cars were well maintained and were in top condition and the process was quick and easy. Looking forward to renting from them again.",
    aosDelay: "300",
  },
  {
    name: "Arup",
    image: "",
    description: "I have rented cars from DriveOn few times and every experience has been excellent. Their customer service is always friendly and the prices are great!",
    aosDelay: "1000",
  },
];
const Testimonial = () => {
  return (
    <>
      <span id="about"></span>
      <div className="dark:bg-black dark:text-white py-14 sm:pb-24">
        <div className="container">
          {/* Header */}
          <div className="space-y-4 pb-12">
            <p
              data-aos="fade-up"
              className="text-3xl font-semibold text-center sm:text-4xl font-serif"
            >
              What Our Clients Say About Us
            </p>  
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-black dark:text-white">
            {testimonialData.map((skill) => (
              <div
                key={skill.name}
                data-aos="fade-up"
                data-aos-delay={skill.aosDelay}
                className="card text-center group space-y-3 sm:space-y-6 p-4 sm:py-12 dark:bg-white/20 bg-gray-100 duration-300  rounded-lg "
              >
                <div className="text-2xl">⭐⭐⭐⭐⭐</div>
                <p>{skill.description}</p>
                <p className="text-center font-semibold">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
