import react from "react";
import{NavigationContainer} from '@react-navigation/native'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Inicio from '../screens/Inicio'

import Servi from "../screens/Servi";
import Mispedidos from "../screens/Mispedidos";

const Tab=createBottomTabNavigator();


export default function Navigation() {
    return(
        <NavigationContainer>
            <Tab.Navigator>
            <Tab.Screen
            name="Inicio"
            component={Inicio}
            options={{title:"Home"}}
            />

            <Tab.Screen
                name="Servicios"
                component={Servi}
                options={{title:"Estos son mis servicios"}}
            />

            <Tab.Screen 
                name="Pedidos"
                component={Mispedidos}
                options={{title:"Estos son mis pedidos"}}            
            />

            <Tab.Screen 
                name="Somos"
                component={Acercade}
                options={{title:"Nosotros somos!"}}
            
            
            />            
            </Tab.Navigator>

        </NavigationContainer>
    )
    
}