import Link from "next/link"

export default function Home() {
  return (
    <div>
      <h1 className='text-3xl'>From Fool to Full Stack Developer</h1>
      <p>with Tech With Shubh</p>

      <Link className="text-blue-600 underline" href="/videos">Watch Video Tutorials</Link>
    </div>
  )
}
