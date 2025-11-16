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
  description:
    "A collection of components for your startup business or side project.",
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
  copyright: "© 2024 Shadcnblocks.com. All rights reserved.",
};

const Footer = () => {
  return (
    <section className="py-32 px-2">
      <div className="container mx-auto">
        <div className="flex w-full flex-col justify-between gap-10 lg:flex-row lg:items-start lg:text-left">
          <div className="flex w-full flex-col justify-between gap-6 lg:items-start">
            <div className="flex items-center gap-2 lg:justify-start">
              <a href={footerData.logo.link}>
                <img
                  src={footerData.logo.src}
                  alt={footerData.logo.alt}
                  className="h-8"
                />
              </a>
              <h2 className="text-xl font-semibold">{footerData.logo.alt}</h2>
            </div>
            <p className="text-muted-foreground max-w-[70%] text-sm">
              {footerData.description}
            </p>

            <ul className="text-muted-foreground flex items-center space-x-6">
              {footerData.socialIcons.map((item, index) => (
                <li key={index} className="hover:text-primary font-medium">
                  <a href={item.link} aria-label={item.label}>
                    {item.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid w-full gap-6 md:grid-cols-3 lg:gap-20">
            {footerData.sections.map((section, idx) => (
              <div key={idx}>
                <h3 className="mb-4 font-bold">{section.title}</h3>
                <ul className="text-muted-foreground space-y-3 text-sm">
                  {section.links.map((link, index) => (
                    <li key={index} className="hover:text-primary font-medium">
                      <a href="#">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="text-muted-foreground mt-8 flex flex-col justify-between gap-4 border-t py-8 text-xs font-medium md:flex-row md:items-center md:text-left">
          <p className="order-2 lg:order-1">{footerData.copyright}</p>
          <ul className="order-1 flex flex-col gap-2 md:order-2 md:flex-row">
            {footerData.bottomLinks.map((link, index) => (
              <li key={index} className="hover:text-primary">
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
