import './Footer.css'

function Footer() {
    return (
        <footer>
            <div className="social-container">
                <div className="social-links">
                    <div className="peter person">
                        <h4>Social Links</h4>
                        <ul>
                            <li>
                                <a href="https://www.linkedin.com/in/petershin731/">Linkedin</a></li><li><a href="https://github.com/PeterShinnn">Github</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="copyright">
                <p>© Copyright 2022 Peter Shin</p>
            </div>
        </footer>
    );
}

export default Footer;
