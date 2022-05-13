import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#111111]">
        {children}
      </main>
    </>
  )
}