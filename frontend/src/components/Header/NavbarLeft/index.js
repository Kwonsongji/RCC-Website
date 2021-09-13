import React from 'react';
import './style.scss';
import { NavLink } from 'react-router-dom';
import { NavDropDown } from 'react-bootstrap';
const NavBarLeft = () => {
  return (
    <div className="navbar__main">
			<nav class="main-nav">
				<ul class="main-nav__list">
					<li >< NavLink to="home.html" className="main-nav__list__title">Home</NavLink></li>
					<li class="">
						<NavDropDown title="Teams" id="basic-nav-dropdown">
						<NavLink to="#">Teams</NavLink>
						<ul class="main-nav__sub">
							<li class="">
								<a href="#">Team Selections</a>
								<ul class="main-nav__sub">
									<li class=""><a href="team-selection-1.html">Team Selection v1</a></li>
									<li class=""><a href="team-selection-2.html">Team Selection v2</a></li>
									<li class=""><a href="team-selection-3.html">Team Selection v3</a></li>
									<li class=""><a href="team-selection-4.html">Team Selection v4</a></li>
								</ul>
							</li>
							<li>
								<a href="team-overview.html" className="main-nav__list__title">Team Overview</a>
								<ul class="main-nav__sub">
									<li class=""><a href="team-overview.html">Team Overview v1</a></li>
									<li class=""><a href="team-overview-2.html">Team Overview v2</a></li>
								</ul>
							</li>
							<li class=""><a href="team-player-1.html">Player Page</a></li>
							<li class=""><a href="management-and-staff.html">Staff Page</a></li>
							<li class=""><a href="staff-member.html">Staff Member<span class="badge badge-danger">New</span></a></li>
						</ul>
					</li>
					<li ><a href="#" className="main-nav__list__title">Matches</a>
						<ul class="main-nav__sub">
							<li class=""><a href="matches-scores.html">Match Scores</a></li>
							<li class=""><a href="matches-upcoming.html">Upcoming Matches</a></li>
							<li class=""><a href="matches-standings.html">Standings</a></li>
							<li class=""><a href="#">Match Stats</a>
								<ul class="main-nav__sub">
									<li class=""><a href="matches-stats-1.html">Match Stats v1</a></li>
									<li class=""><a href="matches-stats-2.html">Match Stats v2</a></li>
									<li class=""><a href="matches-stats-3.html">Match Stats v3</a></li>
								</ul>
							</li>
							<li class="">
								<a href="#">Match Lineups</a>
								<ul class="main-nav__sub">
									<li class=""><a href="matches-lineups-1.html">Match Lineups v1</a></li>
									<li class=""><a href="matches-lineups-2.html">Match Lineups v2</a></li>
									<li class=""><a href="matches-lineups-3.html">Match Lineups v3</a></li>
								</ul>
							</li>
							<li class=""><a href="#">Match Overviews</a>
								<ul class="main-nav__sub">
									<li class=""><a href="matches-overview-1.html">Match Overview v1</a></li>
									<li class=""><a href="matches-overview-2.html">Match Overview v2</a></li>
								</ul>
							</li>
							<li class=""><a href="matches-replay.html">Match Replay</a></li>
						</ul>
					</li>
				</ul>
			</nav>
    </div>
  )
};

export default NavBarLeft;
