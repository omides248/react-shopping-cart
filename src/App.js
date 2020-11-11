import React from "react";
import {BrowserRouter, Route, Redirect, Switch} from "react-router-dom";
import ProductList from "./products/components/ProductList";
import NavBar from "./shared/components/navbar/NavBar";
import SignUp from "./signup/components/SignUp";
import Login from "./login/components/Login";
import Cart from "./cart/Cart";


function App() {
    return (


        <BrowserRouter>
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
        </BrowserRouter>

    );
}

export default App;
