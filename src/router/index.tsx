import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Imports de layouts
import MainLayout from '../components/layout/Main';
import AuthLayout from '../components/layout/Auth';

// Imports de pages
// import Home from '@/pages/Home'
// import About from '@/pages/About'
// import News from '@/pages/News'
// import Contact from '@/pages/Contact'

// Auths Imports
// import Login from '@/pages/Login'
// import Register from '@/pages/Register'
// import ForgotPassword from '@/pages/ForgotPassword'

// Fallback 404
import NotFound from '../pages/NotFound/NotFound';

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>

                {/* Layout com Header/Footer */}
                <Route element={<MainLayout />}>
                    {/* <Route path="/" element={<Home />} />
                    <Route path="/sobre" element={<About />} />
                    <Route path="/noticias" element={<News />} />
                    <Route path="/contactos" element={<Contact />} /> */}
                </Route>

                {/* Layout limpo (auth) */}
                <Route element={<AuthLayout />}>
                    {/* <Route path="/login" element={<Login />} />
                    <Route path="/registo" element={<Register />} />
                    <Route path="/recuperar-senha" element={<ForgotPassword />} /> */}
                </Route>

                {/* 404 global */}
                <Route path="*" element={<NotFound />} />

            </Routes>
        </BrowserRouter>
    )
}