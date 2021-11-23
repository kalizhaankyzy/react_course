export default function Home({authed}){
    return (
        <section>
            <div className="container h-100">
                <div class="d-flex flex-column align-items-center justify-content-center h-100">
                <h1 className="title text-center" style={{color:"#007DAD"}}>Welcome to the homepage!</h1>
                {authed ? (
                    <h2 className="title text-center">
                        You have successfully authed in your account!
                        <br />
                        You can now enter your pages
                    </h2>
                    ) : (
                    <h2 className="title text-center">
                        You are not authed! Please login to the system
                    </h2>
                    )
                }
                </div>
            </div>
        </section>
    )
}