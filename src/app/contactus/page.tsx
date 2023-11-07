'use server'

export default async function ContactUs() {
  return (
    <div className="flex sm: flex-col md:flex-row gap-4 p-10">
      <div className='flex w-1/3 flex-col justify-center'>
        <h1>Contact Us</h1>
        <h3>187 Luna Street,</h3>
        <h3> Edificio Rali 105</h3>
        <h3>San Germán, 00683</h3>
        <h3>Puerto Rico.</h3>
      </div>
    </div>
  )
}