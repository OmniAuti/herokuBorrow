import { useEffect, useState } from "react";
import { UserAuth } from "../context/AuthContext";
import { getAccountItemsAsked } from "../api/api";

import AskItemForm from "../components/AskItemForm";
import AskAccountColumn from "../components/AskAccountColumn";

const Ask = () => {

    const [isAskLoaded, setIsAskLoaded] = useState(false);
    const [accountAskedData, setAccountAskData] = useState([])

const {user} = UserAuth()

useEffect(() => {
    if (user === undefined) return
    getAccountItemsAsked({_uid: user.uid}).then(res => setAccountAskData(res.data))
    setIsAskLoaded(true)
    console.log('yes')
    return () => {
        setIsAskLoaded(false)
    }
}, [user])

    return (
        <section className="w-full flex flex-col">
            <h1 className="text-5xl mb-10 text-center">Ask</h1>
            <div className="flex flex-col lg:flex-row">
            <AskAccountColumn accountAskedData={accountAskedData} isAskLoaded={isAskLoaded}/>

            <AskItemForm/>
            </div>
        </section>
    )
}

export default Ask;