import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./Testimonials.css";

const testimonials = [
  {
    img: "/client-1.png",
    text: "Working with you was an absolute pleasure. The attention to detail, creative problem-solving, and ability to deliver ahead of schedule exceeded our expectations.",
    name: "Sacred Walker",
    position: "CEO, Everyday Superheroes Coaching",
  },
  {
    img: "/client-2.png",
    text: "Your design and development skills transformed our vision into a sleek, high-performing platform. We’ve already seen a significant boost in user engagement.",
    name: "K. Patrice Williams J.D",
    position: "CEO, BRANDGOV",
  },
  {
    img: "/client-3.png",
    text: "He played a key role in refining our ERP platform, delivering clean, efficient React code that improved core modules and enhanced the overall user experience.",
    name: "Muhammad Noman Afzal",
    position: "CEO, School Mentor",
  },
  {
    img: "/client-4.png",
    text: "Your ability to combine stunning visuals with flawless functionality made our new site a real standout in our industry. Truly exceptional work.",
    name: "Shabs Fazl",
    position: "CEO, Mindify",
  },
  {
    img: "https://randomuser.me/api/portraits/men/86.jpg",
    text: "Efficient, innovative, and easy to collaborate with. The final product not only met but exceeded our initial requirements. We look forward to future projects together.",
    name: "Henry Dee",
    position: "Operations Head, Apex Global",
  },
];

const Testimonials = () => {
  return (
    <div className="testimonials-wrap">
      <div className="container">
        <div className="heading-section">
          <span className="sub-heading">Testimonials</span>
          <h2>Happy Clients &amp; Feedbacks</h2>
        </div>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop={true}
          breakpoints={{
            0: { slidesPerView: 1 },
            600: { slidesPerView: 2 },
            1000: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((t, index) => (
            <SwiperSlide key={index}>
              <div className="testimonial-box">
                <div
                  className="user-img"
                  style={{ backgroundImage: `url(${t.img})` }}
                ></div>
                <div className="text">
                  <span className="quote">
                    <i className="fa fa-quote-left"></i>
                  </span>
                  <p>{t.text}</p>
                  <p className="name">{t.name}</p>
                  <span className="position">{t.position}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
