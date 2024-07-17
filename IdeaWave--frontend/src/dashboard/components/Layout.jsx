import { Outlet } from "react-router-dom";

export const Layout = () => {
	return (
		<main className="main-container">
			<Outlet />
		</main>
	)
}

export default Layout;