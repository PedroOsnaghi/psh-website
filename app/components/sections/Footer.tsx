import React from "react";
import { Escudo } from "../ui/Escudo";
import { FacebookIcon } from "@/assets/icons/FacebookIcon";
import { SocialXIcon } from "@/assets/icons/SocialXIcon";
import { LinkedInIcon } from "@/assets/icons/LinkedInIcon";
import { LineBlock } from "../ui/grid/LineBlock";

const footerData = [
  {
    title: "Productos",
    items: ["Servicios", "Acerca de PSH", "Eventos", "Blog"],
  },
  {
    title: "Links Importantes",
    items: [
      "Organization Team",
      "Our Journeys",
      "Pricing Plans",
      "Roadmap",
      "Terms & Conditions",
      "Privacy Policy",
    ],
  },
  {
    title: "Empresa",
    items: ["Acerca de PSH", "Trabajos", "Contacto"],
  },
];

export const Footer = () => {
  return (
    <footer aria-label="Site footer">
      <LineBlock>
        <div className="bg-dark-1 ">
          <div className="mx-auto w-full">
            <div className="flex flex-wrap">
              <div className="w-full lg:w-1/3 flex flex-col justify-center items-center border-b lg:border-b-0 border-white/10 lg:mb-8">
                <div className="flex justify-center w-full items-center grow basis-0">
                  <Escudo className="w-1/8 sm:w-1/9  lg:w-1/5" />
                </div>
                <p className="mb-10 lg:mt-4 w-[80%] lg:w-[98%] text-gray-400 leading-loose text-center lg:text-left mx-auto lg:px-4">
                  Seguinos en nuestras redes sociales para estar al tanto de
                  todas las novedades.
                </p>
                <div className="w-36 mx-auto lg:mx-0 flex">
                  <a
                    className="inline-block w-10 h-10 mr-2 p-2 pt-[0.55rem] outlined-button"
                    href="#"
                    aria-label="Facebook"
                  >
                    <FacebookIcon className="w-5 h-5" />
                  </a>
                  <a
                    className="inline-block w-10 h-10 mr-2 p-2 pt-[0.55rem] pl-[0.55rem] outlined-button"
                    href="#"
                    aria-label="Twitter"
                  >
                    <SocialXIcon className="w-5 h-5" />
                  </a>
                  <a
                    className="inline-block w-10 h-10 mr-2 p-2 pt-[0.55rem] pl-[0.55rem] outlined-button"
                    href="#"
                    aria-label="Instagram"
                  >
                    <LinkedInIcon className="w-5 h-5" />
                  </a>
                </div>
              </div>
              <div className="w-full lg:w-2/3 px-auto hidden lg:flex flex-wrap justify-between pr-12">
                {footerData.map(({ title, items }, index) => (
                  <React.Fragment key={`section-${index}`}>
                    <div className="w-12 border-b border-x-0 lg:border-x lg:border-b-0 border-white/10"></div>
                    <div className="w-full md:w-1/3 lg:w-auto mt-8 mb-0">
                      <h3 className="mb-6 text-md font-medium text-primary-text">
                        {title}
                      </h3>
                      <ul>
                        {items.map((item, i) => (
                          <li className="mb-2" key={`item-${index}-${i}`}>
                            <a
                              className="text-gray-400 text-sm hover:text-gray-300"
                              href="#"
                              aria-label={item}
                            >
                              {item}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </React.Fragment>
                ))}
              </div>
            </div>
            <div className="flex border-t border-white/10 ">
              <div className="w-full text-center py-6 text-gray-400">
                <p className="font-medium text-sm text-secondary-text/50">
                  © 2024 PSH. Hecho con ♥️ por Pedro Osnaghi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </LineBlock>
    </footer>
  );
};
