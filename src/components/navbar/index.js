import React from 'react'

const Nav = () => {
    return(
        <nav class="navbar navbar-expand-md bg-dark navbar-dark sticky-top">
            <div class="container"> 
            <a class="navbar-brand" href="#a">Home</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="collapsibleNavbar">
                <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" href="#a">MENU</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#a">LIST</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#a">INFO</a>
                </li>
                </ul>
            </div>
            </div>
        </nav>
    )
}

export default Nav;