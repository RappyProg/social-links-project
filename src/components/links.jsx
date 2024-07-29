import avatar from "../assets/images/avatar-jessica.jpeg"

export default function Links() {
  return (
    <>
        <div className="absolute h-screen w-screen bg-[var(--grey900)]"></div>

        <div className="h-screen w-screen flex justify-center items-center inter">
            <div className="card bg-[var(--grey800)] p-5 max-w-[350px] items-center">
                <img src={avatar} alt="" className="w-[80px] rounded-full"/>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-[var(--white)]">Jessica Randall</h2>
                    <p className="text-[var(--green)]">London, United Kingdom</p>
                    <p className="text-xs">&quot;Front-end developer and avid reader&quot;</p>
                    <button className="bg-[var(--grey700)] mt-2 text-[14px] text-[var(--white)] p-2 w-[300px] rounded-md hover:bg-[var(--green)] hover:text-[var(--grey900)] font-bold">GitHub</button>
                    <button className="bg-[var(--grey700)] mt-2 text-[14px] text-[var(--white)] p-2 w-[300px] rounded-md hover:bg-[var(--green)] hover:text-[var(--grey900)] font-bold">Frontend Mentor</button>
                    <button className="bg-[var(--grey700)] mt-2 text-[14px] text-[var(--white)] p-2 w-[300px] rounded-md hover:bg-[var(--green)] hover:text-[var(--grey900)] font-bold">LinkedIn</button>
                    <button className="bg-[var(--grey700)] mt-2 text-[14px] text-[var(--white)] p-2 w-[300px] rounded-md hover:bg-[var(--green)] hover:text-[var(--grey900)] font-bold">Twitter</button>
                    <button className="bg-[var(--grey700)] mt-2 text-[14px] text-[var(--white)] p-2 w-[300px] rounded-md hover:bg-[var(--green)] hover:text-[var(--grey900)] font-bold">Instagram</button>
                </div>
            </div>
        </div>
        
    </>
    
  )
}
