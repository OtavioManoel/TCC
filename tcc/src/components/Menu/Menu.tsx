import { Outlet, Link } from "react-router-dom";
import './Menu.module.css'
export function Menu() {
    return (
        <>
            <nav
                style={{
                    borderBottom: "solid 1px",
                    paddingBottom: "1rem",
                    display: 'flex',
                    flexDirection: 'column',
                    color: 'white'
                }}
            >
                <Link to="/documents">Documentos</Link>
                <Link to="/pdca">PDCA</Link>
                <Link to="/audits">Auditorias</Link>
                <Link to="/graphics">Graficos</Link>
                <Link to="/alerts">Alertas</Link>
            </nav>
            <Outlet />
        </>
    )
}