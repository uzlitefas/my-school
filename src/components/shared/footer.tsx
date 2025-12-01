import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

const footerData = {
  logo: {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcnblockscom-icon.svg",
    alt: "School logo",
    link: "https://www.shadcnblocks.com",
  },
  description: "Maktabimizning harhil ijtimoiy tarmoqdagi manzilari",
  socialIcons: [
    { icon: <FaInstagram />, link: "#", label: "Instagram" },
    { icon: <FaFacebookF />, link: "#", label: "Facebook" },
    { icon: <FaTwitter />, link: "#", label: "Twitter" },
    { icon: <FaLinkedinIn />, link: "#", label: "LinkedIn" },
  ],
  sections: [
    {
      title: "Product",
      links: ["Overview", "Pricing", "Marketplace", "Features"],
    },
    {
      title: "Company",
      links: ["About", "Team", "Blog", "Careers"],
    },
    {
      title: "Resources",
      links: ["Help", "Sales", "Advertise", "Privacy"],
    },
  ],
  bottomLinks: ["Terms and Conditions", "Privacy Policy"],
  copyright: "© 2025 Shadcnblocks.com. All rights reserved.",
};

const Footer = () => {
  return (
    <section className="bg-emerald-50 dark:bg-black py-32 px-4 transition-colors duration-300">
      <div className="container mx-auto">
        <div className="flex w-full flex-col justify-between gap-10 lg:flex-row lg:items-start lg:text-left">
          <div className="flex w-full flex-col justify-between gap-6 lg:items-start">
            <div className="flex items-center gap-2 lg:justify-start">
              <a href={footerData.logo.link}>
                <img
                  src={footerData.logo.src}
                  alt={footerData.logo.alt}
                  className="h-10"
                />
              </a>
              <h2 className="text-emerald-900 dark:text-emerald-100 text-xl font-semibold">
                {footerData.logo.alt}
              </h2>
            </div>
            <p className="text-emerald-700 dark:text-emerald-300 max-w-[70%] text-sm">
              {footerData.description}
            </p>

            <ul className="flex items-center space-x-6 text-emerald-600 dark:text-emerald-200">
              {footerData.socialIcons.map((item, index) => (
                <li
                  key={index}
                  className="hover:text-emerald-800 dark:hover:text-emerald-50 transition-colors"
                >
                  <a href={item.link} aria-label={item.label}>
                    {item.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid w-full gap-6 md:grid-cols-3 lg:gap-20 text-emerald-700 dark:text-emerald-200">
            {footerData.sections.map((section, idx) => (
              <div key={idx}>
                <h3 className="mb-4 font-bold text-emerald-900 dark:text-emerald-100">
                  {section.title}
                </h3>
                <ul className="space-y-3 text-sm">
                  {section.links.map((link, index) => (
                    <li
                      key={index}
                      className="hover:text-emerald-800 dark:hover:text-emerald-50 font-medium transition-colors"
                    >
                      <a href="#">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-col justify-between gap-4 border-t border-emerald-200 dark:border-emerald-700 py-8 text-xs font-medium md:flex-row md:items-center">
          <p className="order-2 lg:order-1 text-emerald-600 dark:text-emerald-300">
            {footerData.copyright}
          </p>
          <ul className="order-1 flex flex-col gap-2 md:order-2 md:flex-row text-emerald-600 dark:text-emerald-300">
            {footerData.bottomLinks.map((link, index) => (
              <li
                key={index}
                className="hover:text-emerald-800 dark:hover:text-emerald-50 transition-colors"
              >
                <a href="#">{link}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Footer;
