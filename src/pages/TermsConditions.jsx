import React from "react";

const TermsConditions = () => {
  return (
    <div className="other-page">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="my-5 pb-4">
              <div className="fs-20 fw-500">Presale Terms and Conditions</div>
              <div className="fs-20 mt-3">Effective Date: 01/07/2024</div>
              <div className="fs-14 mt-3">
                These Terms and Conditions ("Terms") govern your participation
                in the presale of SEC tokens ("Presale") on COINSEC Network
                ("COINSEC," "we," "us," or "our"). By participating in the
                Presale, you agree to comply with these Terms. Please read them
                carefully.
              </div>
              {termsData.map((term, index) => (
                <div key={index} className=" termsConditionBox">
                  <div className="fs-20 fw-500 pb-3">{term.title}</div>
                  <div
                    className="fs-14"
                    dangerouslySetInnerHTML={{ __html: term.content }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;

const termsData = [
  {
    title: "1. Eligibility",
    content:
      "1.1. <b>Age</b>: You must be at least 18 years old to participate in the Presale<br/><br/>" +
      "1.2. <b>Jurisdiction:</b> Participation in the Presale is void where prohibited by law. It is your responsibility to ensure that participation in the Presale is legal in your jurisdiction.",
  },
  {
    title: "2. Purchase Process",
    content:
      "2.1. <b>Registration:</b> To participate, you may be required to register on the COINSEC Network website and provide accurate and complete information.<br/><br/>" +
      "2.2. <b>Token Purchase:</b> During the Presale, you may purchase SEC tokens subject to the terms specified on the COINSEC Network website, including the amount of tokens available, pricing, and any applicable discounts or bonuses.<br/><br/>" +
      "2.3. <b>Payment:</b> Payment must be made in the specified currency and method as detailed on the COINSEC Network website.",
  },
  {
    title: "3. Token Distribution",
    content:
      "3.1. <b>Timing:</b> Tokens will be distributed according to the schedule specified on the COINSEC Network website or as communicated to participants.<br/><br/>" +
      "3.2. <b>Delivery:</b> Tokens will be delivered to the wallet addresses provided by participants. It is your responsibility to ensure the accuracy and security of your wallet address.",
  },
  {
    title: "4. Warranties and Disclaimers",
    content:
      "4.1. <b>SEC Tokens:</b> SEC tokens are utility tokens intended for use within the COINSEC Network as described in the project documentation. They are not intended as an investment or managed investment scheme.<br/><br/>" +
      "4.2. <b>No Guarantees:</b> We makes no guarantees regarding the future value or performance of SEC tokens.",
  },
  {
    title: "5. Compliance and Legal Responsibilities",
    content:
      "5.1. <b>Regulatory Compliance:</b> You agree to comply with all applicable laws, regulations, and guidelines in your jurisdiction related to the purchase and use of SEC tokens.<br/><br/>" +
      "5.2. <b>Taxation:</b> You are responsible for any taxes or fees associated with your purchase and use of SEC tokens.",
  },
  {
    title: "6. Limitation of Liability",
    content:
      "6.1. <b>Exclusion of Liability:</b> To the fullest extent permitted by law, we shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising out of or in connection with the Presale or your use of SEC tokens.",
  },
  {
    title: "7. Changes to Terms",
    content:
      "7.1. <b>Modification:</b> We reserves the right to modify these Terms at any time. Any changes will be effective immediately upon posting the revised Terms on the COINSEC Network website. Your continued participation in the Presale constitutes acceptance of the modified Terms. <br/><br/>" +
      "7.2. <b>Architectural and Business Changes:</b> While we strive to maintain transparency regarding the use of our blockchain and cryptocurrency, the information on this website is subject to change without notice. We reserves the right to modify its architecture, business model, and token offering, including the termination of its token program.",
  },
  {
    title: "8. Miscellaneous",
    content:
      "8.1. <b>Entire Agreement:</b> These Terms constitute the entire agreement between you and us regarding the Presale of SEC tokens.<br/><br/>" +
      "8.2. <b> Governing Law:</b> These Terms shall be governed by and construed in accordance with the laws of Australia.",
  },
  {
    title: "9. Contact Us",
    content:
      "If you have any questions about these Terms and Conditions, please contact us at enquiries@coinsecfoundation.org",
  },
];
