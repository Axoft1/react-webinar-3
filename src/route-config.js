import Main from "./app/main"
import About from "./app/adout"
import NotFound from "./app/not-found"

export const RoutePath = {
    main: '/',
    aboutId: 'about/:aboutId',
    notFound: '*'
}

export const routeConfig = {
    main: { path: RoutePath.main, element: <Main /> },
    aboutId: { path: RoutePath.aboutId, element: <About /> },
    notFound: {
        path: RoutePath.notFound, element: <NotFound />
    },
}