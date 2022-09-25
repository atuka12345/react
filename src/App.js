
import {
    BrowserRouter as Router,
    Routes,
    Route,
    useParams,
    useNavigate,
    
} from "react-router-dom";

import RegisterPage from "./pages/RegisterPage";
import { UserContextProvider } from "./context/userContext";
import Homepage from "./pages/Homepage";
import Profile from "./pages/Profile";
import MainLayout from "./components/layout"
import Loginpage from "./pages/Loginpage";
 import "./index.css"
import Protectedroute from "./APP/protectedroute";
import Productformpage from "./pages/productformpage";
import { isUSerAdmin } from "./APP/util";
import { ProductContextProvider } from "./context/productcontext";
import Categoryprodpag from "./pages/Categoryprodpag";
import Singleprodpages from "./pages/singleprodpages";
import { CartContextProvider } from "./context/Cartcontext";
import CartPage from "./pages/cartpage";

function App(){
        const isAdmin= isUSerAdmin ()
return(
 
      <header>
    <div >
    

        <Router>
            <UserContextProvider>
                <ProductContextProvider>
                <CartContextProvider>
                <MainLayout>
                    
        <Routes>
            <Route path="/" element={<Homepage/>} />
            <Route  path="/login" element={<Loginpage/>}/>
            <Route path="/regiter" element={<RegisterPage/>}/>
           <Route path="/Profile/:name" element={<Profile/>} />
           <Route   path="/products/categories/:categoryName"   element={<Categoryprodpag />}/>
<Route path="/products/categories/:categoryName/:productName" element={<Singleprodpages/>}/>
           <Route  path="/products/new" element={<Protectedroute hasAccess={isAdmin} ><Productformpage/> </Protectedroute>}            />
           <Route path="/cart" element={<CartPage />} />
           
           
            </Routes>
            </MainLayout>
            </CartContextProvider>
            </ProductContextProvider>
            </UserContextProvider>
        </Router>
         
    </div>
    </header>
    )

}


export default App
