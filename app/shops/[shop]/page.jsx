'use client'
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useEffect, useState } from "react";

import Navigation from "../../../components/Navigation";
import Strawberry from "../../../components/Strawberry";
import Logo from "../../../components/Logo";

// displays everything in one shop
export default function Page({params}) {
    const shopName = (params.shop).split('_').join(' ');
    const supabase = createClientComponentClient()
    const [items, setItems] = useState([])
    const [shopId, setShopId] = useState(null)

    // function to find the shop id and make sure the shop exists
    async function getShopId() {
        let { data, error } = await supabase
            .from('shops')
            .select('id')
            .eq('name', shopName)
            .single()
        if (error) {
            console.warn(error)
            setItems(null) // assuming the shop doesn't exist
        } else if (data) {
            setShopId(data.id)
        }
    }

    // function to find all the items in the shop based off the shop name (which should be unique) - uses foreign key relation
    async function getItems() {
        await getShopId()

        if (!shopId) {
            console.log("that shop doesn't exist")
            return
        }

        let { data, error } = await supabase
            .from('items')
            .select('id, name, description, price')
            .eq('shop_id', shopId)
        
        if (error) {
            console.warn(error)
        } else if (data) {
            setItems(data)
        }
    }

    useEffect(() => {
        getItems();
    }, [shopId])

    return(
        <>
        <Logo />
        <Navigation />
        <Strawberry heading={shopName.toUpperCase()} showLargeStrawberry='none' />
        {items ? items.map((item) => (
            <div key={item.id}>
                <h3>{item.name} - ${item.price}</h3>
                <p>{item.description}</p>
            </div>
        )) : 
        <p>Sorry, we can't find this shop in our database.</p>}
        </>
    )
}