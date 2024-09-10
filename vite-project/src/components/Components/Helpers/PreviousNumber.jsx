import { prevNumber } from "../../../data/previousNumber"


function PreviousNumber() {

    const prevnumbers = prevNumber
  return (
    <div className="w-full flex flex-col">
        {
            prevnumbers.map((item, idx) => (
                <div key={idx} className="group pad2 flex items-center gap-[10px] cursor-pointer">
                    <span className="h-8 w-8 rounded-full bg-circle-opa group-hover:bg-circle-red duration-100"></span>
                    <p>{item?.number}</p>
                </div>
            ))
        }
    </div>
  )
}

export default PreviousNumber