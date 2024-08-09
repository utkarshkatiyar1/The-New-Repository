"use client"

import store, { persistor } from "./store"
import { PersistGate } from "redux-persist/integration/react";



export function PersistGateways({children}) {

    return <PersistGate loading={null} persistor={persistor}>
    {children}
  </PersistGate>

}