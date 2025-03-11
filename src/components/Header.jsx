import logo from "../assets/globe.png"

export default function Header() {
    return (
        <header>
            <img src={logo} alt="globe icon" />
            <h1>my travel journal.</h1>
        </header>
    )
}