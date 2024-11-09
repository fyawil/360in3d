function Footer() {

    return (
      <>
        <footer>
          <div id='footer'>
            <div className="footer-col">
              <div>
                <p>&copy; {new Date().getFullYear()} 360 In 3D. All rights reserved.</p>
              </div>
              <div>
              <p>Company Registration Number: 00000000</p>
              <p>Registered in England & Wales</p>
              <p>Registered Office Address:</p>
              <p>000 Example Street, City, X0 0XX, UK</p>                
              </div>
            </div>
            <div className="footer-col">
              <a target='blank' href="/privacy-policy">Privacy Policy</a>
              <a target='blank' href="/terms-and-conditions">Terms and Conditions</a>
              <a target='blank' href="/sitemap">Sitemap</a>
            </div>
            <div className="footer-col">
              <p>Contact Us</p>
              <a 
                target='blank' 
                href="mailto:someone@example.com?subject=Your Subject&body=Hello, I would like to...">contact@yourcompany.com</a>
              <a href="tel:+440000000000">+44 0000 000000</a>
            </div>
            <div className="footer-col">
              <a target='blank' href="https://facebook.com/yourcompany">Facebook</a>
              <a target='blank' href="https://x.com/yourcompany">X</a>
              <a target='blank' href="https://linkedin.com/company/yourcompany">LinkedIn</a>
            </div>            
          </div>

        </footer>
      </>
    )
  }
  
  export default Footer