import React from 'react';
import './footer.scss'

function Footer () {
	return (
		<div className='footer'>
			<div className="container">
				<div className="footer__wrap">
					<div className="footer__wrap-right">
						<p className='footer__subtitle'>We will advise you and help you start  a new project</p>
						<div className="footer__links">
							<a href="tel:+74993916669" className="footer__link">+7 499 391-66-69</a>
							<a href="mailto:mail@greensight.ru" className="footer__link">mail@greensight.ru</a>
						</div>
						<div className="footer__address">
							<p className='footer__text'>Moscow, Zelenograd, Central Ave., bldg. 305, 3rd floor  How to get there? </p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Footer;