export default function Footer() {
  return (
    <footer>
      <div className="footerMarquee">
        <div className="footerInfo">
          {/* Duplicate the content for a continuous flow */}
          <div className="marquee-content">
            <p className="vt323">
              Lorem ipsum dolor.
            </p>
            <a
              className="vt323"
              href="mailto:parsamh8@gmail.com?subject=Friend Inquiries&body=How can I help you, my friend?"
            >
              parsamh8[at]gmail.com
            </a>
            <p className="vt323">
              Lorem ipsum dolor.
            </p>
          </div>
          <div className="marquee-content">
            <a
              className="vt323"
              href="mailto:parsamh8@gmail.com?subject=Friend Inquiries&body=How can I help you, my friend?"
            >
              parsamh8[at]gmail.com
            </a>
            <p className="vt323">
              Lorem ipsum dolor.
            </p>
            <a
              className="vt323"
              target="_blank"
              rel="noopener noreferrer"
              href="https://x.com/ParsaMh"
            >
              Twitter
            </a>
            <p className="vt323">
              Lorem ipsum dolor.
            </p>
          </div>
        </div>
      </div>
      <h6 className="center green">
        2025 &copy; <a href="/">Parsamh</a>. All rights reserved.
      </h6>
    </footer>
  );
}
