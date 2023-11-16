import { lazy } from "react";


export const Layout = lazy(()=> import('../Layout/Layout'))
export const Home = lazy(()=> import("../pages/Home/Home"))
export const Login = lazy(()=> import("../pages/Login/Login"))
export const Product = lazy(()=> import("../pages/Product/Product"))
export const Admin = lazy(()=> import("../pages/admin/Admin"))
export const Catalogy = lazy(()=> import("../pages/Catalogy/Catalogy"))
export const Category = lazy(()=> import("../pages/Category/Category"))
export const SubCategory = lazy(()=> import("../pages/SubCategory/SubCategory"))
export const Karzina = lazy(()=> import("../pages/Karzina/Karzina"))

export const NewProduct = lazy(()=> import("../pages/NewProduct/ NewProduct"))
export const ProductList = lazy(()=> import("../pages/ProductList/ProductList"))
export const ProductEdit = lazy(()=> import("../pages/ProductEdit/ProductEdit"))