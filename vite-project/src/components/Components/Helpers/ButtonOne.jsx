
function ButtonOne({text, onClick}) {
  return (
    <button onClick={onClick} className="pad1 w-full rounded-[8px] text-text-color bg-main-color-30 flex items-center justify-center text-center text-[16px] font-bold">
        {text}
    </button>
  )
}

export default ButtonOne