import React, { useState } from 'react'

const Header = () => {
    const [nav, setNav] = useState("d-none")
    return (
        <>

            <header>
                header
                <button onClick={() => { setNav("d-block") }}>click</button>
            </header>
            <nav className={nav}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6"></div>
                        <div className="col-lg-6">
                            close
                            nav_items
                            nav_copyright
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header