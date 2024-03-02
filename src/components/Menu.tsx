





const Menu = () => {
  
  
  return (


    <div className="flex flex-col items-start justify-start w-52 h-80">
        <h2 className="ml-4 text-[#D9D9D9]">All Menu</h2>
        <ul className="items-center justify-start flex flex-col">
         <li className="h-10 w-52 flex items-center gap-3  hover:bg-[#5172f9cc] hover:text-white rounded-3xl activ:bg-[#5151F9]"><img  src="/assets/overview.svg" className="justify-start ml-4 "/><span className="text-[#888888]">Overview</span></li>
         <li className="h-10 w-52 flex items-center gap-3 hover:bg-[#5172f9cc] hover:text-white rounded-3xl activ:bg-[#5151F9]"><img src="/assets/bills.svg" className="justify-start ml-4"/><span className="text-[#888888]">Bills</span></li>
         <li className="h-10 w-52 flex items-center gap-3 hover:bg-[#5172f9cc] hover:text-white rounded-3xl activ:bg-[#5151F9]"><img src="/assets/bookmark.svg" className="justify-start ml-4"/><span className="text-[#888888]">Bookmark</span></li>
         <li className="h-10 w-52 flex items-center gap-3  hover:bg-[#5172f9cc] hover:text-white rounded-3xl activ:bg-[#5151F9]"><img src="/assets/statistic.svg" className="justify-start ml-4"/><span className="text-[#888888]">Statistic</span></li>
         <li className="h-10 w-52 flex items-center gap-3 hover:bg-[#5172f9cc] hover:text-white rounded-3xl activ:bg-[#5151F9]"><img src="/assets/email.svg" className="justify-start ml-4"/><span className="text-[#888888]">Email</span><img className="justify-end " src="/assets/flach.png"/></li>
         <li className="h-10 w-52 flex items-center gap-3  hover:bg-[#5172f9cc] hover:text-white rounded-3xl activ:bg-[#5151F9]"><img src="/assets/chat.svg" className="justify-start ml-4"/><span className="text-[#888888]">Chat</span><img src="/assets/photo.png"/><img src="/assets/4msg.svg"/></li>
        </ul>
      </div>
  )
}

export default Menu