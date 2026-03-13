function Button({children, handleEvent, i}){
    return(
      <button
        style={{
          background: "color-mix(in srgb, #ffffff, transparent 80%)",
          padding: "5px",
          borderRadius: "13px",
          fontSize: "16px",
          width: "20%",
					height : "50%",
          border: "2px solid #fff",
          color: "white",
					marginTop:"40px"
        }}
				onClick= {() =>{handleEvent(i)}}
      >
        {children}
      </button>

    )
}
export default Button;