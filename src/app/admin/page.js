'use client'
import React from "react";
import { useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import Header from './Header'

function Page() {
    const { user } = useAuthContext()
    const router = useRouter()

    console.log(user.email);

    React.useEffect(() => {
        if (user == null) router.push("/")
    }, [user])

    return (<div>
    <Header/>
    <h1>Only logged in users can view this page.  {user.email}</h1>
    </div>);
}

export default Page;