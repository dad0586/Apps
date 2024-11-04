import { useContext } from "react";
import { MyContext } from "../../context/home-context";

const About = () => {
    const { setValue } = useContext(MyContext);

    return (
        <>
            <h1>About</h1>
            <button onClick={() => setValue("about page dagi contex")}> change context value</button>
        </>
    )
}
export default About