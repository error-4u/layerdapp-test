import { AiFillPhone, AiFillHome } from "react-icons/ai";
import { AiTwotoneMail } from "react-icons/ai";
import { useRef, useEffect } from "react";

function Footer() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            sectionObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 } // Adjust the threshold as needed
    );

    if (sectionRef.current) {
      sectionObserver.observe(sectionRef.current);
    }
  }, []);

  return (
    <footer
      className="flex flex-col bg-dark-footer"
      style={{
        color: "white",
        backgroundColor: "rgb(25 33 50)",
      }}
    >
      <div
        className=" mx-5  py-8 px-20 border-t section items-center justify-around "
        ref={sectionRef}
        style={{ borderColor: "rgba(0, 0, 0, 0.2)" }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {/* Logo Section */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
              width: "50%",
              padding: "0 5%",
              lgPadding: "0 1%",
            }}
          >
            <div
              style={{
                marginTop: "2px",
                textAlign: "left",
                lgMarginTop: "2rem",
              }}
            >
              &copy; 2023 Flix. All rights reserved
            </div>
          </div>

          {/* Sections Container */}
          <div
            className="grid grid-cols-3 items-center justify-center"
            style={{
              width: "100%",

              gap: "1px",
              mdGap: "0",
              padding: "0 5%",
              lgPadding: "0 1%",
            }}
          >
            {/* Resources Section */}
            <div style={{ lineHeight: "1.7" }}>
              <h3
                style={{
                  fontSize: "1.25rem",
                  fontWeight: "bold",
                  marginBottom: "0.75rem",
                }}
              >
                Resources
              </h3>
              <ul
                style={{
                  listStyle: "none",
                  paddingLeft: "0",
                  marginTop: "0",
                  marginBottom: "0",
                }}
              >
                <li>
                  <a
                    href="#"
                    style={{
                      color: "inherit",
                      textDecoration: "none",
                      ":hover": { color: "gray" },
                    }}
                  >
                    Documentation
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    style={{
                      color: "inherit",
                      textDecoration: "none",
                      ":hover": { color: "gray" },
                    }}
                  >
                    Tutorials
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    style={{
                      color: "inherit",
                      textDecoration: "none",
                      ":hover": { color: "gray" },
                    }}
                  >
                    Newsletter
                  </a>
                </li>
              </ul>
            </div>

            {/* Company Section */}
            <div style={{ lineHeight: "1.7" }}>
              <h3
                style={{
                  fontSize: "1.25rem",
                  fontWeight: "bold",
                  marginBottom: "0.75rem",
                }}
              >
                Company
              </h3>
              <ul
                style={{
                  listStyle: "none",
                  paddingLeft: "0",
                  marginTop: "0",
                  marginBottom: "0",
                }}
              >
                <li>
                  <a
                    href="#"
                    style={{
                      color: "inherit",
                      textDecoration: "none",
                      ":hover": { color: "gray" },
                    }}
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    style={{
                      color: "inherit",
                      textDecoration: "none",
                      ":hover": { color: "gray" },
                    }}
                  >
                    Our Socials
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    style={{
                      color: "inherit",
                      textDecoration: "none",
                      ":hover": { color: "gray" },
                    }}
                  >
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Us Section */}
            <div style={{}}>
              <h3
                style={{
                  fontSize: "1.25rem",
                  fontWeight: "bold",
                  marginBottom: "0.75rem",
                }}
              >
                Contact Us
              </h3>
              <ul
                style={{
                  listStyle: "none",
                  paddingLeft: "0",
                  marginTop: "0",
                  marginBottom: "0",
                  display: "flex",
                  flexDirection: "column",
                  gap: "6px",
                }}
              >
                <li
                  style={{
                    display: "flex",
                    alignItems: "center",
                    ":hover": { color: "gray" },
                  }}
                >
                  <AiTwotoneMail style={{ marginRight: "5px" }} />
                  <a
                    href="mailto:info@example.com"
                    style={{ color: "inherit", textDecoration: "none" }}
                  >
                    info@example.com
                  </a>
                </li>
                <li
                  style={{
                    display: "flex",
                    alignItems: "center",
                    ":hover": { color: "gray" },
                  }}
                >
                  <AiFillPhone style={{ marginRight: "5px" }} />
                  <a
                    href="tel:+123456789"
                    style={{ color: "inherit", textDecoration: "none" }}
                  >
                    +123456789
                  </a>
                </li>
                <li
                  style={{
                    display: "flex",
                    alignItems: "start",
                    ":hover": { color: "gray" },
                  }}
                >
                  <AiFillHome style={{ marginRight: "5px" }} />
                  123 Main St, New Delhi
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
