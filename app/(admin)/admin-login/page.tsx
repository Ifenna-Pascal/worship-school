"use client"
import { SyntheticEvent, useState } from "react";
import { Adminlogin } from "./components/login-page";
import { useRouter } from "next/navigation";

export default function AdminSignin() {
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const [formData, setFormData] = useState({
       email: '',
       password: ''
      })
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e: SyntheticEvent) => {
        e.preventDefault();
        const isAllowed = formData.email === "admin-user" && formData.password === "admin-password"
        if(isAllowed) {
            localStorage.setItem('admin-login', JSON.stringify(formData))
            router.push("/admin")
        }
    }


    return (
        <Adminlogin 
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        loading={loading}
        formData={formData}
    />
    )
  
}