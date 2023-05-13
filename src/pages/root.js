import { Outlet } from "react-router";

function RootLayout() {
    return (
        <div className="root-container">
            <Outlet />
        </div>
    );
}

export default RootLayout;