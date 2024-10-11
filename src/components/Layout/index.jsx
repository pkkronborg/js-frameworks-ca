
import {Outlet} from 'react-router-dom'
import Footer from '../Footer';
import Header from '../Header';

function Layout() {
    return (
        <div className="d-flex flex-column min-vh-100">
            <Header />
            <main className="flex-grow-1">
                <div className="container">
                    <Outlet />
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default Layout;