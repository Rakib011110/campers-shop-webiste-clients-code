import React, { useState } from "react";
import { FaBoxes, FaDollarSign } from "react-icons/fa";
import Title from "../../../utils/Title";

const Faq: React.FC = () => {
  const [isOpen, setIsOpen] = useState<number | null>(null); // State to track which question is open

  const toggleFAQ = (index: number) => {
    setIsOpen(isOpen === index ? null : index); // Toggle the FAQ visibility
  };

  return (
    <div className="max-w-screen-2xl mx-auto">
      <Title
        bigTitle={"Frequently Asked Questions"}
        smallTitle={"Your Journey, Your Way!"}
      />

      <div className="justify-center  mx-auto grid sm:grid-cols-1 md:grid-cols-2">
        <section
          className="relative mt-20 md:w-[100%] lg:w-[100%] md:h-[100%] lg:h-[110%] border-blue-900"
          style={{
            aspectRatio: "1213/967",
            backgroundColor: "tomato",
            maskImage:
              "url(\"data:image/svg+xml,%3Csvg width='221' height='122' viewBox='0 0 221 122' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M183 4C183 1.79086 184.791 0 187 0H217C219.209 0 221 1.79086 221 4V14V28V99C221 101.209 219.209 103 217 103H182C179.791 103 178 104.791 178 107V118C178 120.209 176.209 122 174 122H28C25.7909 122 24 120.209 24 118V103V94V46C24 43.7909 22.2091 42 20 42H4C1.79086 42 0 40.2091 0 38V18C0 15.7909 1.79086 14 4 14H24H43H179C181.209 14 183 12.2091 183 10V4Z' fill='%23D9D9D9'/%3E%3C/svg%3E%0A\")",
            WebkitMaskImage:
              "url(\"data:image/svg+xml,%3Csvg width='221' height='122' viewBox='0 0 221 122' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M183 4C183 1.79086 184.791 0 187 0H217C219.209 0 221 1.79086 221 4V14V28V99C221 101.209 219.209 103 217 103H182C179.791 103 178 104.791 178 107V118C178 120.209 176.209 122 174 122H28C25.7909 122 24 120.209 24 118V103V94V46C24 43.7909 22.2091 42 20 42H4C1.79086 42 0 40.2091 0 38V18C0 15.7909 1.79086 14 4 14H24H43H179C181.209 14 183 12.2091 183 10V4Z' fill='%23D9D9D9'/%3E%3C/svg%3E%0A\")",
            maskRepeat: "no-repeat",
            WebkitMaskRepeat: "no-repeat",
            maskSize: "contain",
            WebkitMaskSize: "contain",
          }}>
          <video
            autoPlay
            muted
            loop
            className="w-full h-[100%] object-cover aspect-square border-1">
            <source
              src="https://res.cloudinary.com/dqpohzbea/video/upload/v1729188985/cinematic_camping_video_nature_video_4k_-_Simon_Joseph_1080p_h264_youtube_z2sqcm.mp4"
              type="video/mp4"
            />
          </video>
        </section>

        <div className="p-8 rounded-lg">
          <div className="space-y-6">
            {[
              {
                question: "What are your shipping options?",
                answer:
                  "We offer a variety of shipping options to suit your needs, including standard and express delivery.",
                icon: <FaDollarSign className="text-blue-500 mr-2" />,
              },
              {
                question: "Can I return a product?",
                answer:
                  "Yes, you can return products within 30 days of purchase. Please ensure the items are in their original condition.",
                icon: <FaBoxes className="text-green-500 mr-2" />,
              },

              {
                question: "How do I track my order?",
                answer:
                  "You can track your order using the tracking link provided in your confirmation email.",
                icon: <FaDollarSign className="text-blue-500 mr-2" />,
              },
              {
                question: "What payment methods do you accept?",
                answer:
                  "We accept various payment methods, including credit cards, PayPal, and bank transfers.",
                icon: <FaBoxes className="text-green-500 mr-2" />,
              },
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg mb-2">
                <button
                  className="w-full text-left p-6 flex items-center justify-between border-b-2 border-gray-200"
                  onClick={() => toggleFAQ(index)}>
                  <span className="text-2xl font-semibold">
                    {faq.icon} {faq.question}
                  </span>
                  <span>{isOpen === index ? "-" : "+"}</span>{" "}
                  {/* Toggle icon */}
                </button>
                {isOpen === index && (
                  <p className="p-6 text-gray-600">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
