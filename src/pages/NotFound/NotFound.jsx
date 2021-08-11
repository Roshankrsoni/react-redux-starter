import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => (
    <div className="flex items-center justify-center flex-wrap text-center text-grey-darkest h-screen">
        <div className="flex flex-wrap w-full items-center justify-center">
            <h1 className="text-5xl text-grey-light font-light mb-4">404</h1>
            <h2 className="w-full mb-4">
                We couldn't find the page you were looking for, sorry!
            </h2>
            <div>
                Click <Link to="/">here</Link> to be sent back to the overview
            </div>
        </div>
    </div>
)

export default NotFound;