import logo from "../tatouage/Helena_sans_contour.svg"

function Coordonnees() {
  return (
    <div className="flex pl-5 gap-8 w-full h-30% text-black font-bold text-xl">
        <img className="size-20 pt-1" src={logo} alt="Logo" />
        <h1 className="py-5">Inainked</h1>
        <h1 className="py-5">inainked@gmail.com</h1>
        <h1 className="py-5">XX.XX.XX.XX.XX</h1>
        
    </div>
  )
}

export default Coordonnees