"use client"
import { FC, SyntheticEvent } from "react"

interface IProps {
    handleSubmit: (e: SyntheticEvent) => void;
    formData: {email: string; password: string};
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    loading: boolean
}

export const Adminlogin:FC<IProps> = ({handleChange, handleSubmit, formData, loading}) => {
    return (
        <div className="w-screen h-screen flex items-center justify-center">
 
        <div>
            <h1 className="text-gray-700 text-center text-2xl mb-4">Admin Login</h1>
            <form onSubmit={handleSubmit} className="flex flex-col gap-y-4 w-[340px]">
                <input 
                    type="text"
                    id="email"
                    placeholder="enter username"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 h-12.5 border border-gray-300 rounded-md text-gray-700 focus:ring-2 focus:ring-gray-400 focus:outline-none focus:border-transparent"
                />
                <input
                    type="password"
                    id="password"
                    placeholder="enter password"
                    name="password"
                    required
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full px-4 py-2 h-12.5 border border-gray-300 rounded-md text-gray-700 focus:ring-2 focus:ring-gray-400 focus:outline-none focus:border-transparent"
                />
                <button
                    type="submit"
                    className="border-gray-500 w-full cursor-pointer bg-black/90 rounded-md mt-2 mb-10 border text-white py-4  transition"
                >
                    {loading ? 'Submitting...' : 'Submit'}
                </button>
            </form>
        </div>

    </div>
    )
}