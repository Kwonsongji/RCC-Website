import React from 'react';
const Footer = () => {
  return (
    <div className="footer__main">
      <footer id="footer" class="footer text-center">
			<ul class="social-menu social-menu--landing social-menu--landing-glitch">
				<li>
					<a href="https://www.facebook.com/danfisher.dev/" target="_blank">
						<i class="fab fa-facebook-square"></i>
						<span class="link-subtitle">Facebook</span>Necrogame
					</a>
				</li>
				<li>
					<a href="https://twitter.com/danfisher_dev" target="_blank">
						<i class="fab fa-twitter"></i>
						<span class="link-subtitle">Twitter</span>Necrotwt
					</a>
				</li>
				<li>
					<a href="https://twitch.tv" target="_blank">
						<i class="fab fa-twitch"></i>
						<span class="link-subtitle">Twitch</span>Necroplays
					</a>
				</li>
				<li>
					<a href="https://discordapp.com/" target="_blank">
						<i class="fab fa-discord"></i>
						<span class="link-subtitle">Discord</span>Necrochat
					</a>
				</li>
			</ul>
		</footer>
    </div>
  )
};

export default Footer;