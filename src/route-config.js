import About from "./app/adout"
import NotFound from "./app/not-found"
import App from "./app"

export const RoutePath = {
    main: '/',
    aboutId: 'about/:aboutId',
    notFound: '*'
}

export const routeConfig = {
    main: { path: RoutePath.main, element: <App /> },
    aboutId: { path: RoutePath.aboutId, element: <About /> },
    notFound: {
        path: RoutePath.notFound, element: <NotFound />
    },
}