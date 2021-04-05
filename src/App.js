import React from 'react';
import './css/app.css';

import user from './assets/images/image-victor.jpg';

function App() {
	return (
		<div className="container">
			<main className="container--wrapper">
				<section className="card">
					<div className="card--top__box"></div>
					<div className="card--top__wrapper">
						<img src={user} alt="..." className="card--top__img" />
						<h1 className="card--top__title">
							<span>Victor Crest</span> 26
						</h1>
						<p className="card--top__desc">London</p>
					</div>
					<div className="card--status">
						<div className="card--status--wrapper">
							<h2 className="card--status__title">
								<span>80K</span> Followers
							</h2>
						</div>
						<div className="card--status--wrapper">
							<h2 className="card--status__title">
								<span>803K</span> Likes
							</h2>
						</div>
						<div className="card--status--wrapper">
							<h2 className="card--status__title">
								<span>1.4K</span> Photos
							</h2>
						</div>
					</div>
				</section>
			</main>
		</div>
	);
}

export default App;
