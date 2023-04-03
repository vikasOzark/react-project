import { Button, Input } from "../assets/Utility"

export const LoginComponent = () => {
    return (
        
            <>
                <div className=" p-3 w-[50%] m-auto rounded h-64 bg-slate-400 text-center shadow-lg  mt-5">
                    <h2 className="text-white font-extrabold">Login here</h2>
                    <div className="mt-3">
                        <form class="">
                            <div class="mb-4">
                                <Input type="text" placeholder="Username" />
                            </div>
                            <div class="mb-6">
                                <Input type="password" placeholder='Password' />
                            </div>
                            <Button name='Login' css=''/>
                        </form>
                    </div>
                </div>
            </>
    )
}

