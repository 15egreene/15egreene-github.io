// import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { Link } from "react-router-dom";
// import { useAuth, useUser } from "reactfire";
import '../components/Navbar.css'
let Navbar = () => {
    // const auth = useAuth();
    // const { status, data: user } = useUser();
    // const signin = async () => {
    //     const provider = new GoogleAuthProvider();
    //     let u = await signInWithPopup(auth, provider);
    //     console.log(u);
    // }

    // const signout = async () => {
    //     await signOut(auth);
    //     console.log('signed user out', user)
    // }
    return (
        <ul className="nav .bg-transparent justify-content-center bible-nav">
            <li className="nav-item">
                <Link to="/" className="nav-link active" >Home</Link>
            </li>
            <li className="nav-item dropdown">
                <Link to="" className="nav-link dropdown-toggle" role='button' data-bs-toggle="dropdown" aria-current="page" aria-expanded="false" >Read Bible</Link>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="/read-bible/text-specific">Search By Text</a></li>
                    <li><a className="dropdown-item" href="/read-bible">Scripture Search</a></li>
                    <li><a className="dropdown-item" href="/bible-stories">Bible Stories</a></li>
                </ul>
            </li>
            <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="https://audiobible.com/bible/Bible.html">Bible Audio</a>
            </li>
            <li className="nav-item">
                <a className="nav-link active" href="https://www.wholesomewords.org/family/sworddrill.pdf">Play Bible Drill</a>
            </li>
        </ul>
    )
}

export default Navbar;