import CascadingStyleSheets from "./CascadingStyleSheets/CascadingStyleSheets"
import ConditionalRendering from "./ConditionalRendering"
import CustomComponent from "./CustomComponent"
import FecthAPI from "./FetchAPI"
import HandlingEvents from "./HandlingEvents"
import Home from "./Home"
import Jsx from "./Jsx"
import ListsAndKeys from "./ListsAndKeys"
import StyledComponents from "./StyledComponents"
import UseStateHook from "./UseStateHook"
import Styling from "./Styling"




const Routes = [
    {
        id: 1,
        name: "Home",
        path: "/",
        Component: Home,
    },
    {
        id: 6,
        name: "JSX",
        path: "/JSX",
        Component: Jsx,
    },
    {
        id: 7,
        name: "Component",
        path: "/Component",
        Component: CustomComponent,
    },
    {
        id: 8,
        name: "Handling Events",
        path: "/HandlingEvents",
        Component: HandlingEvents,
    },
    {
        id: 9,
        name: "UseState Hook",
        path: "/UseStateHook",
        Component: UseStateHook,
    },
    {
        id: 10,
        name: "Conditional Rendering",
        path: "/ConditionalRendering",
        Component: ConditionalRendering,
    },
    {
        id: 11,
        name: "Lists og Keys",
        path: "/ListsAndKeys",
        Component: ListsAndKeys,
    },
    {
        id: 2,
        name: "FetchApi",
        path: "/FetchApi",
        Component: FecthAPI,
    },
    {
        id: 3,
        name: "Styling",
        path: "/Styling",
        Component: Styling,
    },
    {
        id: 4,
        name: "Cascading Style Sheets",
        path: "/CascadingStyleSheets",
        Component: CascadingStyleSheets,
    },
    {
        id: 5,
        name: "Styled Components",
        path: "/StyledComponents",
        Component: StyledComponents,
    },

]


export default Routes