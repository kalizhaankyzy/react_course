export default function Profile(){
    return (
        <section>
            <div className="container h-100">
                <h2 class="title text-center">Profile page</h2>

                <div class="d-flex flex-column align-items-center justify-content-center h-100">
                        <div class="avatar">
                            <img src={`https://via.placeholder.com/350x150?text=Alex`} />
                        </div>
                        <div class="name">
                            <h3 class="title">Alex</h3>
                            <h6>Age: 22</h6>
                            <h6>Country: Canada</h6>
                        </div>
                </div>    
            </div>        
        </section>
    )
}