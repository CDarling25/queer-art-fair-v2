import Styles from '../../components/Theme.js';
import Spacer from "../../components/Spacer";
import Navigation from "../../components/Navigation";
import Strawberry from "../../components/Strawberry";
import HeaderDecoration from "../../components/HeaderDecoration";
import Logo from "../../components/Logo";
import Subheader from "../../components/Subheader";
import pageStyles from "../../components/pages.module.css";
import Footer from "../../components/Footer";
import style from "./donate.module.css";

export default function Donate() {
    return (
        <div style = {Styles.body}>
            <HeaderDecoration />
            <Logo />
            <Subheader />
            <Navigation />
            <Spacer height = {3}/>
            <div className = {style.heading}>Donate</div>
            <Spacer height = {3} />
            <div className = {style.rowContainer}>
                <img className = {style.logo} src = {"/venmo-icon.svg"}/>
                <Spacer width = {1} />
                <a className = {style.link} href = "https://venmo.com/code?user_id=3755542212248893718&created=1689782761.003662&printed=1">
                    Queer Art Faire Venmo
                </a>
            </div>
            <Spacer height = {3} />
            <div className = {style.text}>
                Thank you for donating to Queer Art Faire! Your donation will help pay for future venues, marketing materials, the maintence of the QAF website, and tables for vendors!
            </div>
            <Spacer height = {3} />
            <div className = {style.imageContainer}>
                <img className = {style.image} src = {"/PeachWithWater.svg"}/>
            </div>
            <Footer />
        </div>
    );
}