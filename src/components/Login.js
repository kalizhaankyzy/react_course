import { useNavigate } from "react-router"
import { useState } from "react";
export default function Login({ setAuthed }){
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [isCorrect, setIsCorrect]=useState(true)
    const navigate = useNavigate()
    function loginToSystem(){
        if(username==="test" && password==="qwerty"){
            setAuthed(true);
            navigate("/")
        }
        else setIsCorrect(false);
    }
    return(
        <section >
            <div class="container py-5 h-100">
                <div class="row d-flex justify-content-center align-items-center h-100">
                    <div class="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div class="card shadow-2-strong">
                            <div class="card-body p-5 text-center">
                                <h3 class="mb-5">Login</h3>
                                <div class="form-outline mb-4">
                                    <input type="email" id="typeEmailX-2" class="form-control form-control-lg" placeholder="Email" value={username} onChange={(e)=>setUsername(e.target.value)} />
                                </div>
                                <div class="form-outline mb-4">
                                    <input type="password" id="typePasswordX-2" class="form-control form-control-lg" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                                </div>
                                <button class="btn btn-primary btn-lg btn-block w-100" type="submit" onClick={()=>loginToSystem()}>Login</button>
                                {!isCorrect && 
                                    <div class="invalid-feedback" style={{display:"block"}}>Incorrect username or password</div>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}