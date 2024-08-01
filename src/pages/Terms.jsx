import React from "react";
import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <div className="other-page">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="my-5 pb-4">
              <div className="fs-20 fw-500">Terms of Service</div>
              <div className="fs-14 mt-4">
                Welcome to COINSEC Network! These Terms of Service ("Terms")
                govern your access to and use of the COINSEC Network website and
                services ("Services"). Please read these Terms carefully before
                accessing or using our Services.
              </div>
              {termsData.slice(0, 11).map((term, index) => (
                <div key={index} className="termsBox">
                  <div className="fs-20 fw-500">{term.title}</div>
                  <div className="fs-14">{term.content}</div>
                </div>
              ))}
              <div className="termsBox">
                <div className="fs-20 fw-500">12. Privacy Policy</div>
                <div className="fs-14">
                  Please refer to our
                  <Link to="/privacy-policy"> Privacy Policy </Link> for
                  information on how we collect, use, and protect your personal
                  data.
                </div>
              </div>
              {termsData.slice(12, 24).map((term, index) => (
                <div key={index} className="termsBox">
                  <div className="fs-20 fw-500">{term.title}</div>
                  <div className="fs-14">{term.content}</div>
                </div>
              ))}
              <div className="mt-4">
                <div className="fs-14">
                  These Terms of Service outline your responsibilities, our
                  limitations of liability, and the conditions under which you
                  may access and use the COINSEC Network and Services.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const termsData = [
  {
    title: "1. General Information",
    content:
      "While we strive to provide transparency regarding the use of blockchain and cryptocurrency, the information on our website should not be relied upon to make investment decisions. The content is subject to change without notice. SEC tokens are intended solely for rewarding miners for validating transactions, utility within our ecosystem, and as a settlement currency. They should not be perceived as an investment or managed investment scheme.",
  },
  {
    title: "2. Accuracy of Information",
    content:
      "While we strive to ensure that the information provided on the COINSEC Network website and through our Services is accurate and up-to-date, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose. Any reliance you place on such information is therefore strictly at your own risk. We disclaim all liability and responsibility arising from any reliance placed on such materials by any visitor to our website or by anyone who may be informed of any of its contents.",
  },
  {
    title: "3. Independent Research and Advice",
    content:
      "Potential purchasers are strongly encouraged to conduct their own research and seek independent financial or legal advice before participating in the COINSEC Network. We make no guarantees regarding the future value or performance of SEC tokens.",
  },
  {
    title: "4. Jurisdiction and Legal Compliance",
    content:
      "t is your responsibility to ensure that participating in this presale is legal in your jurisdiction. This offering is not intended for individuals or entities in the United States or any jurisdiction where such offerings are prohibited by law.",
  },
  {
    title: "5. Liability",
    content:
      "By accessing our website, you acknowledge and agree that we shall not be liable for any direct, indirect, or consequential loss arising from the use of information provided on our website or the use of SEC tokens.",
  },
  {
    title: "6. Investment Disclaimer",
    content:
      "Nothing on our website constitutes an offer to invest in a business, financial product, or managed investment scheme. COINSEC (UK) Limited and its subsidiaries do not own the COINSEC Network.",
  },
  {
    title: "7. Ownership and Warranties",
    content:
      'We do not own the COINSEC Network. The COINSEC Network operates as a permissionless blockchain technology and is provided "as is," without any warranties or guarantees.',
  },
  {
    title: "8. User Responsibility",
    content:
      "While we strives to offer reliable infrastructure and transparency regarding the use of the blockchain and its cryptocurrency, participation in the COINSEC Network is at your own risk. You should conduct thorough research and not solely rely on our efforts or information when deciding to purchase SEC tokens.",
  },
  {
    title: "9. Risk of Cryptocurrencies",
    content:
      "Cryptocurrencies are speculative and carry a high degree of risk. Potential purchasers should fully understand these risks and the potential for financial loss before participating in our Services.",
  },
  {
    title: "10. Modifications to Terms",
    content:
      "We reserves the right to modify or update these Terms at any time without prior notice. Changes will be effective immediately upon posting. Continued use of our Services after modifications constitutes acceptance of the updated Terms.",
  },
  {
    title: "11. Governing Law",
    content:
      "These Terms are governed by and construed in accordance with the laws of the Australia, without regard to its conflict of law principles.",
  },
  {
    title: "12. Privacy Policy",
    content:
      "Please refer to our <Link to='/privacy-policy'>Privacy Policy</Link> for information on how we collect, use, and protect your personal data.",
  },
  {
    title: "13. User Conduct",
    content:
      "You agree to use our Services in accordance with applicable laws and regulations, and refrain from activities such as fraud, hacking, or misuse of the platform.",
  },
  {
    title: "14. Intellectual Property",
    content:
      "All content and materials on our website are our property Users are granted a limited, non-exclusive, non-transferable license to access and use the Services for personal and non-commercial purposes.",
  },
  {
    title: "15. Termination",
    content:
      "We reserves the right to terminate or suspend your access to the Services at any time, with or without cause, and without prior notice.",
  },
  {
    title: "16. Dispute Resolution",
    content:
      "Any disputes arising from or relating to these Terms shall be resolved through arbitration in Australia, in accordance with the rules of ",
  },
  {
    title: "17. Service Availability",
    content:
      "We endeavor to provide continuous availability of our Services, but we do not guarantee uninterrupted access or operation of our website. We may perform maintenance or updates that may temporarily disrupt access.",
  },
  {
    title: "18. Indemnification",
    content:
      "You agree to indemnify and hold us harmless from any claims, damages, losses, or liabilities arising from your use of the Services or violation of these Terms.",
  },
  {
    title: "19. Notifications",
    content:
      "We may communicate with you via email or through notices on our website regarding updates to Terms, changes in Services, or other important information.",
  },
  {
    title: "20. Age Restrictions",
    content:
      "You must be of legal age in your jurisdiction (typically 18 years or older) to use our Services. By accessing our Services, you represent that you meet this requirement.",
  },
  {
    title: "21. Accessibility",
    content:
      "We are committed to providing accessible Services. Please contact us if you encounter accessibility barriers.",
  },
  {
    title: "22. Third-Party Links",
    content:
      "Our website may contain links to third-party websites or content that are not under our control. We are not responsible for the content or privacy practices of these third parties.",
  },
  {
    title: "23. Force Majeure",
    content:
      "We shall not be liable for any failure or delay in performing its obligations under these Terms due to circumstances beyond its reasonable control, such as natural disasters, strikes, or government actions.",
  },
  {
    title: "Contact Us",
    content:
      "If you have any questions or concerns about these Terms, please contact us at coinsecfoundation.org",
  },
];

export default Terms;
