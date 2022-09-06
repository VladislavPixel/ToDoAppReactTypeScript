import { StrictMode } from "react"
import ReactDOM from "react-dom/client"
import "./scss/style.scss"
import App from "./App"

const rootElementHTML = document.getElementById("root") as HTMLElement
const root = ReactDOM.createRoot(rootElementHTML)

root.render(
	<StrictMode>
		<App />
	</StrictMode>
)

