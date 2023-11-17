import { NavItem } from "./nav-item/nav-item";

export const navItems: NavItem[] = [
    {
        navCap: "Gestion del estudiante",
    },
    {
        displayName: "Datos del estudiante",
        iconName: "layout-dashboard",
        route: "/Tablero",
    },
    {
        navCap: "Servicios y constancias",
    },
    {
        displayName: "Estudios",
        iconName: "rosette",
        route: "/Gestion-Estudiantil/Estudios",
    },
    {
        displayName: "Historial",
        iconName: "poker-chip",
        route: "/Gestion-Estudiantil/Historial",
    },
    {
        displayName: "Conducta",
        iconName: "list",
        route: "/Gestion-Estudiantil/Conducta",
    },
    {
        displayName: "Horario",
        iconName: "layout-navbar-expand",
        route: "/Gestion-Estudiantil/Horario",
    },
    {
        displayName: "Calificaciones",
        iconName: "tooltip",
        route: "/Gestion-Estudiantil/Calificaciones",
    },
    {
        navCap: "Auth",
    },
    {
        displayName: "Login",
        iconName: "lock",
        route: "/authentication/login",
    },
    {
        displayName: "Register",
        iconName: "user-plus",
        route: "/authentication/register",
    },
];
