import React from 'react'
import {createBrowserRouter,createRoutesFromElements,Route,RouterProvider} from 'react-router-dom'
import {Layout} from '../Pages/Layout'
import {Dashboard} from '../Pages/Dashboard'
import {OrderList} from '../Pages/OrderList'
import {OrderDetails} from '../Pages/OrderDetails'
import {Customer} from '../Pages/Customer'
import {Analytics} from '../Pages/Analytics'
import {Reviews} from '../Pages/Reviews'
import {Foods} from '../Pages/Foods'
import {FoodsDetails} from '../Pages/FoodsDetails'
import {CustomerDetails} from '../Pages/CustomerDetails'
import {Calender} from '../Pages/Calender'
import {Chat} from '../Pages/Chat'
import {Wallet} from '../Pages/Wallet'

const Router_App = () => {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route element={<Layout/>}>
                <Route path='' element={<Dashboard/>}/>
                <Route path='orderList' element={<OrderList/>}/>
                <Route path='orderdetail' element={<OrderDetails/>}/>
                <Route path='customer' element={<Customer/>}/>
                <Route path='analytics' element={<Analytics/>}/>
                <Route path='reviews' element={<Reviews/>}/>
                <Route path='food' element={<Foods/>}/>
                <Route path='fooddetail' element={<FoodsDetails/>}/>
                <Route path='customerdetail' element={<CustomerDetails/>}/>
                <Route path='calender' element={<Calender/>}/>
                <Route path='chat' element={<Chat/>}/>
                <Route path='wallet' element={<Wallet/>}/>

            </Route>
        )
    )
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export  {Router_App}