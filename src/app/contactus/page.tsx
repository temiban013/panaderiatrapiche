'use server'

export default async function ContactUs() {
  return (
    <div className="flex flex-col bg-cover bg-trapiche-orange min-h-screen p-10">
      <div className='flex w-full flex-col  justify-center text-center'>
        <div className="text-4xl text-trapiche-tan pb-5 pt-40">Contact Us</div>
        <div className="text-xl pb-3">187 Luna Street,</div>
        <div className="text-xl pb-3"> Edificio Rali 105</div>
        <div className="text-xl pb-3">San Germán, 00683</div>
        <div className="text-xl pb-3">Puerto Rico.</div>
        <div className="text-xl pb-3">+1 787-892-4673</div>
      </div>
    </div>
  )
}