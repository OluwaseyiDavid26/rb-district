"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default function Header(): React.ReactNode {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("/");
  const pathname = usePathname();
  // const router = useRouter();

  useEffect(() => {
    const handlePopState = () => {
      // Check if URL contains a hash
      if (window.location.hash) {
        // Remove the hash and replace the URL without it
        const cleanUrl = window.location.href.split("#")[0];
        window.history.replaceState({}, "", cleanUrl);

        // Reset active section to root path
        setActiveSection("/");

        // Scroll to top smoothly
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    };

    // Add popstate event listener
    window.addEventListener("popstate", handlePopState);

    // Cleanup
    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = {
        about: document.getElementById("about"),
        services: document.getElementById("services"),
        location: document.getElementById("location"),
        contact: document.getElementById("footer"),
      };

      // Set active based on pathname first
      if (pathname.includes("/properties")) {
        setActiveSection("/properties");
        return;
      }

      // Then check scroll position for sections
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const [key, section] of Object.entries(sections)) {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            switch (key) {
              case "services":
                setActiveSection("/services");
                break;
              case "location":
                setActiveSection("/guide");
                break;
              case "contact":
                setActiveSection("/contact");
                break;
              case "about":
                setActiveSection("/about");
                break;
              default:
                setActiveSection("/");
            }
            return;
          }
        }
      }

      setActiveSection("/");
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const handleNavigation = (
    e: React.MouseEvent<HTMLAnchorElement>,
    path: string
  ) => {
    if (path === "/") {
      if (pathname !== "/") {
        window.location.href = "/";
        return;
      }
      // Add state to history when navigating to sections
      window.history.pushState({ section: path }, "", "/");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (path.startsWith("#")) {
      // Add state to history when navigating to sections
      window.history.pushState({ section: path }, "", path);
    }
    setIsMenuOpen(false);
  };

  const getLinkClass = (path: string) => {
    return `font-medium text-sm ${
      activeSection === path ? "text-[#27A031]" : "text-[#8C8C8C]"
    }`;
  };

  return (
    <>
      <div className="fixed top-0 left-0 right-0 text-black z-50">
        {/* Main Header */}
        <div className="flex justify-between items-center sm:px-8 md:px-20 py-4 relative bg-white">
          {/* Logo */}
          <div className="flex-1 flex justify-start z-10">
            <Link href="/" onClick={(e) => handleNavigation(e, "/")}>
              <Image
                src="/logo.png"
                alt="Logo"
                width={203}
                height={58}
                className="w-[100px] sm:w-[100px] md:w-[103px]"
              />
            </Link>
          </div>

          {/* Centered Desktop Navigation */}
          <div className="hidden sm:flex flex-1 justify-center items-center">
            <nav className="flex space-x-6 md:space-x-8">
              <Link
                href="/"
                onClick={(e) => handleNavigation(e, "/")}
                className={getLinkClass("/")}
              >
                Home
              </Link>
              <Link href="#about" className={getLinkClass("/about")}>
                About Us
              </Link>
              <Link href="/properties" className={getLinkClass("/properties")}>
                Available Properties
              </Link>
              <Link href="#services" className={getLinkClass("/services")}>
                Services
              </Link>
            </nav>
          </div>

          {/* Right Navigation */}
          <nav className="hidden sm:flex flex-1 justify-end space-x-4 md:space-x-6 z-10">
            <Link href="#location" className={getLinkClass("/guide")}>
              Neighbourhood Guide
            </Link>
            <Link href="#footer" className={getLinkClass("/contact")}>
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="sm:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="space-y-2">
              <span
                className={`block w-8 h-0.5 bg-black transition-transform duration-300 ${
                  isMenuOpen ? "rotate-45 translate-y-2.5" : ""
                }`}
              ></span>
              <span
                className={`block w-8 h-0.5 bg-black transition-opacity duration-300 ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`block w-8 h-0.5 bg-black transition-transform duration-300 ${
                  isMenuOpen ? "-rotate-45 -translate-y-2.5" : ""
                }`}
              ></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`sm:hidden bg-white ${isMenuOpen ? "block" : "hidden"}`}
        >
          <div className="px-4 py-6 space-y-6">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/"
                onClick={(e) => handleNavigation(e, "/")}
                className={`font-medium text-lg ${
                  pathname === "/" ? "text-[#27A031]" : "text-[#8C8C8C]"
                }`}
              >
                Home
              </Link>
              <Link
                href="#about"
                onClick={(e) => handleNavigation(e, "about")}
                className={`font-medium text-lg ${
                  pathname === "/about" ? "text-[#27A031]" : "text-[#8C8C8C]"
                }`}
              >
                About Us
              </Link>
              <Link
                href="/properties"
                className={`font-medium text-lg ${
                  pathname === "/properties"
                    ? "text-[#27A031]"
                    : "text-[#8C8C8C]"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Available Properties
              </Link>
              <Link
                href="/services"
                className={`font-medium text-lg ${
                  pathname === "/services" ? "text-[#27A031]" : "text-[#8C8C8C]"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
            </nav>
            <nav className="flex justify-between pt-4 border-t border-gray-800">
              <Link
                href="/guide"
                className={`font-medium text-lg ${
                  pathname === "/guide" ? "text-[#27A031]" : "text-[#8C8C8C]"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Neighbourhood Guide
              </Link>
              <Link
                href="/contact"
                className={`font-medium text-lg ${
                  pathname === "/contact" ? "text-[#27A031]" : "text-[#8C8C8C]"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </div>
      {/* Spacer div to prevent content from going under header */}
      <div className="h-[88px]"></div>
    </>
  );
}
