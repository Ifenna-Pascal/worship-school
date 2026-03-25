
import RegistrationForm from "@/components/register-form";

export default function RegisterPage() {
  return (
    <>
    <div className='registration-image-with-overlay h-[30vh] flex-col flex items-center justify-center'>
      <h2 className="text-3xl text-white mt-4 font-bold mb-2 text-center">Be A Memeber</h2>
      <p className="text-md md:text-xl px-4 text-gray-300 text-center max-w-3xl mx-auto">
        Discover your rhythm, connect with fellow musicians, and showcase your talent every month.
      </p>
    </div>
      <main > 
        <RegistrationForm />
      </main>
    </>
  )
}