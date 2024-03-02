const Customization = () => {
  return (
    <div className="flex flex-col items-start justify-start ">
        <h2 className="ml-4 text-[#D9D9D9]">Customization</h2>
        <ul className="items-center justify-start flex flex-col">
         <li className="h-10 w-52 flex items-center justify-start gap-3 hover:bg-[#5172f9cc] hover:text-white rounded-3xl activ:bg-[#5151F9]"><img src="/assets/theme.svg" className="justify-start ml-4"/><span className="text-[#888888]">Theme</span></li>
         <li className="h-10 w-52 flex items-center justify-start gap-3 hover:bg-[#5172f9cc] hover:text-white rounded-3xl activ:bg-[#5151F9]"><img src="/assets/setting.svg" className="justify-start ml-4"/><span className="text-[#888888]">Settings</span></li>
        </ul>
      </div>
  )
}
export  default Customization;