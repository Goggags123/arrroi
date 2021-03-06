import React, {Component} from "react";
import Image from "./Image";
var slideIndex, slides, dots;
class SlideShow extends Component {
	initGallery = () => {
		slideIndex = 0;
		slides = document.getElementsByClassName("imageHolder");
		slides[slideIndex].style.opacity = 1;

		dots = [];
		var dotsContainer = document.getElementById("dotsContainer");
		for (let i = 0; i < slides.length; i++) {
			let dot = document.createElement("img");
			if (i === 0) dot.classList.add("slideImg1");
			else dot.classList.add("slideImg");
			dot.name = this.props.nameFood[i];
			dot.alt = this.props.nameFood[i];

			dot.onclick = () => {
				this.moveSlide(i);
			};
			dotsContainer.append(dot);
			dots.push(dot);
		}
		dots[slideIndex].classList.add("active");
	};
	componentDidMount = () => {
		this.initGallery();
	};
	plusSlides = (n) => {
		this.moveSlide(slideIndex + n);
	};
	moveSlide = (n) => {
		var i, current, next;
		var moveSlideAnimClass = {
			forCurrent: "",
			forNext: "",
		};
		if (n > slideIndex) {
			if (n >= slides.length) {
				n = 0;
			}
			moveSlideAnimClass.forCurrent = "moveLeftCurrentSlide";
			moveSlideAnimClass.forNext = "moveLeftNextSlide";
		} else if (n < slideIndex) {
			if (n < 0) {
				n = slides.length - 1;
			}
			moveSlideAnimClass.forCurrent = "moveRightCurrentSlide";
			moveSlideAnimClass.forNext = "moveRightPrevSlide";
		}
		if (n !== slideIndex) {
			next = slides[n];
			current = slides[slideIndex];
			for (i = 0; i < slides.length; i++) {
				slides[i].className = "imageHolder";
				slides[i].style.opacity = 0;
				dots[i].classList.remove("active");
			}
			current.classList.add(moveSlideAnimClass.forCurrent);
			next.classList.add(moveSlideAnimClass.forNext);
			dots[n].classList.add("active");
			slideIndex = n;
		}
	};
	render() {
		return (
			<div>
				<div className="galleryContainer">
					<Image
						className="arrowL"
						nameIcon="arrowL"
						onClick={() => this.plusSlides(-1)}
					/>
					<Image
						className="arrowR"
						nameIcon="arrowR"
						onClick={() => this.plusSlides(1)}
					/>
					<div className="slideShowContainer">
						<div className="imageHolder">
							<img
								name={this.props.nameFood[0]}
								alt={this.props.nameFood[0]}
							/>
						</div>
						<div className="imageHolder">
							<img
								name={this.props.nameFood[1]}
								alt={this.props.nameFood[1]}
							/>
						</div>
						<div className="imageHolder">
							<img
								name={this.props.nameFood[2]}
								alt={this.props.nameFood[2]}
							/>
						</div>
						<div className="imageHolder">
							<img
								name={this.props.nameFood[3]}
								alt={this.props.nameFood[3]}
							/>
						</div>
					</div>
					<div id="dotsContainer"></div>
				</div>
			</div>
		);
	}
}
export default SlideShow;
