import React from 'react';
import { Link } from 'react-router-dom';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import {
	faFacebookF,
	faInstagram,
	faTwitter,
	faPinterestP
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Font Awesome icons
const facebookIcon = <FontAwesomeIcon icon={faFacebookF} />;
const instagramIcon = <FontAwesomeIcon icon={faInstagram} />;
const twitterIcon = <FontAwesomeIcon icon={faTwitter} />;
const pinterestIcon = <FontAwesomeIcon icon={faPinterestP} />;
const heartIcon = <FontAwesomeIcon icon={faHeart} />;

class Footer extends React.Component {
	render() {
		return (
			<div>
				<div className="footer">
					<div className="social">
						<ul>
							<li className="heading">Connect</li>
							<li>
								<a href="/">{facebookIcon} Facebook</a>
							</li>
							<li>
								<a href="/">{instagramIcon} Instagram</a>
							</li>
						</ul>
					</div>
					<div className="shop-links">
						<ul>
							<li className="heading"> Questions?</li>
							<li>
								<Link exact to="/about">
									About
								</Link>
							</li>
							<li>
								<Link exact to="/contact">
									Contact Us
								</Link>
							</li>
						</ul>
					</div>
					<div className="location">
						<ul>
							<li className="heading">Store</li>
							<li>
								<div className="address">
									<p>Lorem Ispum</p>
									<p>Lorem 50 Street Road</p>
								</div>
							</li>
						</ul>
					</div>
				</div>

				<div className="github">
					<p>
						Copyright &#169; {new Date().getFullYear()}
					</p>
				</div>
			</div>
		);
	}
}

export default Footer;
