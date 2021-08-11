import React from 'react'
import { Link } from 'react-router-dom'

export default function AppHeader() {
    return (
        <div className="header">
            <div className="container mx-auto">
                <nav className="flex items-center justify-between flex-wrap p-4 py-6">
                    <div className="flex items-center flex-shrink-0 mr-6">
                        Logo
                    </div>
                    <div className="flex flex-wrap justify-end content-center">

                    </div>
                </nav>
            </div>
            <div className="header-menu">
                <div className="container mx-auto">
                    {/* <BaseMenu currentUser={ currentUser } /> */}
                    <Link to="/">Home</Link> &nbsp;
                    <Link to="/testing">Test</Link>  &nbsp;
                    <Link to="/anyPage"> Error page</Link>
                </div>
            </div>
        </div>
    )
}
