
import RegistrationForm from "@/components/register-form";

export default function RegisterPage() {
  return (
    <>
    <div className='registration-image-with-overlay h-[30vh] flex-col flex items-center justify-center'>
      <h2 className="text-3xl text-white mt-4 font-bold mb-2 text-center">Register Here</h2>
      <p className="text-md md:text-xl px-4 text-gray-300 text-center max-w-3xl mx-auto">
        Our assignment is to Awaken The End Time Music Ministers.
      </p>
    </div>
      <main> 
        <RegistrationForm />
      </main>
    </>
  )
}