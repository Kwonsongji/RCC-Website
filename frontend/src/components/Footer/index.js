import React from 'react';
import { NavLink } from 'react-router-dom'; // lien href
import './style.scss';

/* React :
class => className
id => X
href => Link / NavLink
*/

const Footer = () => {
  return (
    <div className="footer__main">
      <footer class="footer text-center">
			<ul class="social-menu social-menu--landing social-menu--landing-glitch">
          <li>
            <NavLink
              className="footer__main__link"
              to="https://www.facebook.com/danfisher.dev/"
              target="_blank">
						<i class="fab fa-facebook-square"></i>
						<span className="link-subtitle">Facebook</span>Necrogame
            </NavLink>
				</li>
				<li>
            <NavLink
              className="footer__main__link"
              to="https://twitter.com/danfisher_dev"
              target="_blank">
						<i class="fab fa-twitter"></i>
						<span className="link-subtitle">Twitter</span>Necrotwt
				 </NavLink>
				</li>
				<li>
            <NavLink
              className="footer__main__link"
              to="https://twitch.tv"
              target="_blank">
						<i class="fab fa-twitch"></i>
						<span className="link-subtitle">Twitch</span>Necroplays
					</NavLink>
				</li>
				<li>
            <NavLink
              className="footer__main__link"
              to="https://discordapp.com/" target="_blank">
						<i class="fab fa-discord"></i>
						<span className="link-subtitle">Discord</span>Necrochat
					</NavLink>
				</li>
			</ul>
		</footer>
    </div>
  )
};

export default Footer;