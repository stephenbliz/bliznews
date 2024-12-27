import Nav1 from './nav1';
import Nav2 from './nav2';

export default function Header(){

    return(
        <header
            className="h-fit border-b border-gray-300"
        >
            <Nav1 />
            <Nav2 />
        </header>
    )
}