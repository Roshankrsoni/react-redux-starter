import React from 'react'
import { Loading } from "../components/Base/Content/Loading";
import AppHeader from '../components/Base/AppHeader/AppHeader'

const PublicLayoutContent = ({
    children,
    loading
}) => {
    if (loading) {
        return <Loading />
    }

    return (
        <>
            <AppHeader />
            <center><h4>Public Layout </h4> </center>
            {children}
        </>
    )
}

export const PublicLayout = PublicLayoutContent