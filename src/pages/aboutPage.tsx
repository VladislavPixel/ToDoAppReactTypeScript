import React from "react"
import { useNavigate } from "react-router-dom"

const AboutPage: React.FC = () => {
	const navigate = useNavigate()
	return (
		<React.Fragment>
			<div className="container__about about">
				<h2 className="about__title">Информация о нас!</h2>
				<p className="about__sub-title">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci commodi aliquam accusamus reiciendis ipsam culpa quam repudiandae iure ipsa deleniti, provident incidunt minus, cumque est corporis laudantium explicabo maiores!</p>
				<button type="button" onClick={() => navigate("/")} className="about__back-btn">Обратно на страницу задач</button>
			</div>
		</React.Fragment>
	)
}

export default AboutPage
