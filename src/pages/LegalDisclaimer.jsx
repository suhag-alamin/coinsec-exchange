const LegalDisclaimer = () => {
  return (
    <div className="other-page">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="my-5 pb-4">
              <div className="fs-24 fw-500">Legal Disclaimer</div>
              <ol className="ms-3">
                {LegalDatas.map((term, index) => (
                  <li key={index} className="legalDisclaimerBox">
                    <div className="fs-20 fw-500">{term.title}</div>
                    <div
                      className="fs-14"
                      dangerouslySetInnerHTML={{ __html: term.content }}
                    />
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const LegalDatas = [
  {
    title: "General Information",
    content:
      "While we strive to maintain transparency regarding the use of our blockchain and cryptocurrency, the information on this website is subject to change without notice. We reserve the right to modify its architecture, business model, and token offering, including the termination of its token program. SEC tokens are intended solely for rewarding miners for validating transactions, utility within our ecosystem, and as a settlement currency. They should not be perceived as an investment or managed investment scheme.",
  },
  {
    title: "Accuracy of Information",
    content:
      "We endeavor to ensure that the information provided on the COINSEC Network website and through our services is accurate and up-to-date. However, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose. Any reliance you place on such information is strictly at your own risk. We disclaim all liability and responsibility arising from any reliance placed on such materials by any visitor to our website or by anyone who may be informed of any of its contents.",
  },
  {
    title: "Independent Research and Advice",
    content:
      "Potential purchasers are encouraged to conduct their own research and seek independent financial or legal advice before participating. We make no guarantees regarding the future value or performance of SEC tokens.",
  },
  {
    title: "Jurisdiction and Legal Compliance",
    content:
      "It is the responsibility of potential purchasers to ensure that participation in this presale is legal in their jurisdiction. This offering is not intended for, and should not be accessed or used by, individuals or entities in the United States or any other jurisdiction where such offerings are prohibited by law.",
  },
  {
    title: "Liability",
    content:
      "By accessing this website, you acknowledge and agree that we shall not be liable for any direct, indirect, or consequential loss arising from the use of this information.",
  },
  {
    title: "Investment Disclaimer",
    content:
      "Nothing on this website should be construed as an offer to invest in a business, financial product, or managed investment scheme. COINSEC (UK) Limited and its subsidiaries do not own the COINSEC Network.",
  },
  {
    title: "Ownership and Warranties",
    content: `The COINSEC Network is a permissionless network and is not owned by COINSEC (UK) Limited or its subsidiaries. The infrastructure and technology is provided "as is" without any warranties or guarantees.`,
  },
  {
    title: "User Responsibility",
    content:
      "While we strive to offer reliable infrastructure and transparency regarding the potential use of the blockchain and its cryptocurrency, participation in the COINSEC Network is at your own risk. You should conduct your own research and should not rely solely on our efforts or the information provided when deciding to purchase SEC tokens.",
  },
  {
    title: "Risk of Cryptocurrencies",
    content:
      "Cryptocurrencies are speculative in nature and carry a high degree of risk. Potential purchasers should be aware of these risks and the potential for loss before making any decisions.",
  },
];

export default LegalDisclaimer;
