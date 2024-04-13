// import CoworkingList from "./components/CoworkingList"
import CoworkingList from "./components/CoworkingList"
import Header from "./components/Header"
// import { Login } from "./routes/login.lazy"
// import { SignUp } from "./routes/signup.lazy"
import "./styles/style.sass"

function App() {
    return (
        <>
            {/* <Login /> */}
            {/* <SignUp /> */}
            <Header />
            <CoworkingList />
        </>
    )
}

export default App
