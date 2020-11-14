import React, {useState, useCallback} from "react";
import {BrowserRouter, Route, Redirect, Switch} from "react-router-dom";
import ProductList from "./products/components/ProductList";
import NavBar from "./shared/components/navbar/NavBar";
import SignUp from "./signup/components/SignUp";
import Login from "./login/components/Login";
import Cart from "./cart/Cart";
import CartContextProvider from "./contexts/CartContext";
import {AuthContext} from "./contexts/AuthContext";


function App() {

    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const login = useCallback(() => {
        setIsLoggedIn(true)
    }, [])

    const logout = useCallback(() => {
        setIsLoggedIn(false)
    }, [])

    return (
        <BrowserRouter>
            <AuthContext.Provider value={{isLoggedIn: isLoggedIn, login: login, logout: logout}}>
                <CartContextProvider>
                    <NavBar/>
                    <main>
                        <Switch>
                            <Route path="/" exact={true}>
                                {/*<BookContextProvider>*/}
                                {/*    <SongList/>*/}
                                {/*    <Navbar/>*/}
                                {/*    <BookList/>*/}
                                {/*    <NewBookForm/>*/}
                                {/*</BookContextProvider>*/}

                                <ProductList/>

                            </Route>
                            <Route path="/signup" exact={true}>
                                <SignUp/>
                            </Route>
                            <Route path="/login" exact={true}>
                                <Login/>
                            </Route>

                            <Route path="/cart" exact={true}>
                                <Cart/>
                            </Route>
                            <Redirect to="/"/>
                        </Switch>
                    </main>
                </CartContextProvider>
            </AuthContext.Provider>
        </BrowserRouter>

    );
}

export default App;
