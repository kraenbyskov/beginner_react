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
import Forms from "./Forms"
import UseEffectHook from "./UseEffectHook"
import ReactRouterDom from "./ReactRouterDom"
import Destructuring from "./Destructuring"
import Containment from "./Containment"
import CodeSplitting from "./Code-Splitting/CodeSplitting"




const Routes = [
    {
        id: 1,
        name: "Home",
        path: "/",
        icon: "fas fa-home",
        Component: Home,
    },
    {
        id: 6,
        name: "JSX",
        path: "/JSX",
        icon: "fas fa-code",
        Component: Jsx,
    },
    {
        id: 7,
        name: "Component",
        path: "/Component",
        icon: "fas fa-cogs",
        Component: CustomComponent,
    },
    {
        id: 8,
        name: "Handling Events",
        path: "/HandlingEvents",
        icon: "far fa-calendar-alt",
        Component: HandlingEvents,
    },
    {
        id: 9,
        name: "UseState Hook",
        path: "/UseStateHook",
        icon: "fas fa-book",
        Component: UseStateHook,
    },
    {
        id: 10,
        name: "Conditional Rendering",
        path: "/ConditionalRendering",
        icon: "fas fa-check-circle",
        Component: ConditionalRendering,
    },
    {
        id: 11,
        name: "Lists og Keys",
        path: "/ListsAndKeys",
        icon: "fas fa-list",
        Component: ListsAndKeys,
    },
    {
        id: 12,
        name: "Forms",
        path: "/Forms",
        icon: "far fa-keyboard",
        Component: Forms,
    },
    {
        id: 13,
        name: "UseEffectHook",
        path: "/UseEffectHook",
        icon: "fas fa-history",
        Component: UseEffectHook,
    },
    {
        id: 14,
        name: "React Router Dom",
        path: "/ReactRouterDom",
        icon: "fas fa-map-marked-alt",
        Component: ReactRouterDom,
    },
    {
        id: 15,
        name: "Destructuring",
        path: "/Destructuring",
        icon: "fas fa-wrench",
        Component: Destructuring,
    },
    {
        id: 16,
        name: "Containment",
        path: "/Containment",
        icon: "fas fa-box",
        Component: Containment,
    },
    {
        id: 17,
        name: "CodeSplitting",
        path: "/CodeSplitting",
        icon: "fas fa-sitemap",
        Component: CodeSplitting,
    },
    {
        id: 2,
        name: "FetchApi",
        path: "/FetchApi",
        icon: "fas fa-cloud-download-alt",
        Component: FecthAPI,
    },
    {
        id: 3,
        name: "Styling",
        path: "/Styling",
        icon: "fas fa-tshirt",
        Component: Styling,
    },
    {
        id: 4,
        name: "Cascading Style Sheets",
        path: "/CascadingStyleSheets",
        icon: "fas fa-tshirt",
        Component: CascadingStyleSheets,
    },
    {
        id: 5,
        name: "Styled Components",
        path: "/StyledComponents",
        icon: "fas fa-tshirt",
        Component: StyledComponents,
    },

]


export default Routes