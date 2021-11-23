import { Link, Outlet } from "react-router-dom"
export default function Friends(){
    const friendsList = ["Jack", "Adele", "Taylor"]
    return (
        <section>
            <div className="container h-100">
            <h2 class="title text-center">Friends page</h2>
                <div class="d-flex  align-items-center justify-content-evenly h-100">
                        <ul>
                            {friendsList.map((friend) => (
                                <li>
                                    <Link to={`/friends/${friend}`}>{friend}</Link>
                                </li>
                            ))}
                        </ul>
                        <div>
                            <Outlet/>
                        </div>
                </div>
            </div>
        </section>
    )
}