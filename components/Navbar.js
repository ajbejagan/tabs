export default function Navbar() {
  return (
    <div className="bg-black">
      <ul className="flex items-center">
        <li className="text-lg hover:text-[#888888] text-white px-3 hover:bg-[#333333] py-[4px] cursor-pointer hover:rounded">Overview</li>
        <li className="text-lg hover:text-[#888888] text-white px-3 hover:bg-[#333333] py-[4px] cursor-pointer hover:rounded">Integrations</li>
        <li className="text-lg hover:text-[#888888] text-white px-3 hover:bg-[#333333] py-[4px] cursor-pointer hover:rounded">Activity</li>
        <li className="text-lg hover:text-[#888888] text-white px-3 hover:bg-[#333333] py-[4px] cursor-pointer hover:rounded">Domains</li>
        <li className="text-lg hover:text-[#888888] text-white px-3 hover:bg-[#333333] py-[4px] cursor-pointer hover:rounded">Usage</li>
        <li className="text-lg hover:text-[#888888] text-white px-3 hover:bg-[#333333] py-[4px] cursor-pointer hover:rounded">Settings</li>
      </ul>
    </div>
  )
}