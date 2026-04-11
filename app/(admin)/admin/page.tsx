'use client'

import AppLoader from "@/components/app-laoder"
import { APP_URL, BASE_URL } from "@/utils/config"
import { useRouter } from "next/navigation"
import { useCallback, useEffect, useState } from "react"
import { toast } from "sonner"
type Member = {
  firstName: string
  lastName: string
  email: string
  phone: string
  comments: string
  status: string
  location: string
}
const RegisteredUsers = () => {
    const [members, setMembers] = useState<Member[] | null>(null)
    const [loading, setLoading] = useState(true)
    const [loadingStatus, setLoadingStatus] = useState(false)
    const [id, setId] = useState('')
    const router = useRouter();
    const adminLogin = JSON.parse(localStorage.getItem('admin-login') as string);
    const fetchUser = useCallback(() => {
        setLoading(true)
        fetch(`${BASE_URL}?sort_by=id&sort_order=desc`)
        .then((response) => response.json())
        .then((data) => {
            setLoading(false)
            setMembers(data)
        });
    }, [])

    const isAllowed = (adminLogin: Record<string, string>) => {
        if(adminLogin) {
            const isAllowed = adminLogin.email === "admin-user" && adminLogin.password === "admin-password"
            if(!isAllowed) router.push('/admin-login')
            fetchUser()
            setLoading(false)
        } else {
            router.push('/admin-login')
        }
    }

    useEffect(() => {
        isAllowed(adminLogin)
    }, [])
    

const sendMail = (info: Pick<Member, 'email' | "firstName" | "lastName">) => {
    return fetch(`${APP_URL}/payment/payment-success`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: info.email,
            firstname: info.firstName,
            lastname: info.lastName,
            whatsAppLink: 'https://chat.whatsapp.com/HnZ5sOWCzdF42NvwpI0tIC?mode=gi_t'
        })
    })
}

const togglePaymentStatus = (email: string, firstName: string, lastName: string, status: string) => {
    setLoadingStatus(true)
    setId(email)

    const patchRequest = fetch(`${BASE_URL}/email/${email}`, {
        method: 'PATCH',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            data: {
                'status': `${status === 'paid' ? 'unpaid' : 'paid'}`
            }
        })
    })

    const mailRequest = sendMail({ email, firstName, lastName })

    Promise.all([patchRequest, mailRequest])
        .then(() => {
            fetchUser()
            setLoadingStatus(false)
        })
        .catch(() => {
            toast.error('Error occurred...')
        })
}
    
    return (
    <div className="p-12 py-20">

        {loading ? (
            <AppLoader overlay/>
        ) : members && members.length === 0 ? (
            <p>No users found</p>
        ) : (
            <>
                     <h2 className="text-xl font-bold mb-4 text-center text-gray-900">Registered Members</h2>

<table className="w-full text-gray-800 border border-gray-300">
    <thead>
        <tr className="bg-gray-100 text-left">
            <th className="p-2">S/N</th>
            <th className="p-2">Name</th>
            <th className="p-2">Email</th>
            <th className="p-2">Phone</th>
            <th className="p-2">Comments</th>
            <th className="p-2">Status</th>
            <th className="p-2">Location</th>
            <th className="p-2">Action</th>          
        </tr>
    </thead>
    <tbody>
        {members && members.map((user, index) => (
            <tr key={index} className="border-t">
                <td className="p-2">{index+1}</td>
                <td className="p-2">
                    {user.firstName} {user.lastName}
                </td>
                <td className="p-2">{user.email}</td>
                <td className="p-2">0{user.phone}</td>
                <td className="p-2 w-65">
                    {user.comments || 'N/A'}
                </td>
                 <td className="p-2 w-65">
                    {user.status}
                </td>
                <td className="p-2 w-65">
                    {user.location || 'N/A'}
                </td>
                <td>
                    <td className="p-2">
                    <button onClick={() => togglePaymentStatus(user.email, user.firstName, user.lastName, user.status)} className={`${user.status === 'Paid' ? 'bg-red-500' : 'bg-green-500'} p-2 px-4 text-[13px] cursor-pointer text-white`}>{loadingStatus && id === user.email ? 'Loading...' : `${user.status === 'paid' ? 'Revoke' : 'Pay Now'}` }</button>
                    </td>
                </td>
            </tr>
        ))}
    </tbody>
</table>
            </>
        )}
    </div>
)
}

export default RegisteredUsers