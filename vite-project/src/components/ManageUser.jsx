export const ManageUser = () => {
    return (
        <div className="text-white md:mx-10 md:mt-10">
            <div className="grid grid-cols-2 gap-4">
                <div className=" text-white text-center p-2">
                    <div className="flex gap-4">
                        <input type="text" placeholder="search" className="rounded px-3 py-1" />
                        <div className="flex rounded bg-green-400 px-4 py-1 items-center cursor-pointer">Search</div>
                    </div>

                    <div className="border text-start p-2 rounded-lg text-black bg-white w-[60%] mt-2">
                        <div className="grid grid-cols-10 gap-2">
                            <div className="col-span-3 flex items-center mx-auto  h-[5rem]">
                                <div className="rounded-full bg-blue-400  w-14 h-14"></div>
                            </div>
                            <div className="col-span-7">
                                <div className=" flex justify-between">
                                    <div className="">
                                        <p> Vikas <small className=" items-center rounded-xl bg-red-500 text-white px-2">backend</small></p>
                                    </div>
                                    <div className="bg-green-600 h-4  w-4 rounded-full"></div>
                                </div>
                                <p>vikas@outlook.com</p>
                                <p className="text-gray-400 font-bold">EMP0001</p>
                                
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className="border text-white">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque unde quos ducimus amet repellat, beatae, tenetur deserunt maxime velit provident, dolorum sequi quam perferendis ratione architecto rerum harum vel nesciunt?</div>
            </div>
        </div>
    )
}