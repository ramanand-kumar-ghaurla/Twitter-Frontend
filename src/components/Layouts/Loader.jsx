import { Spinner } from "@material-tailwind/react";
 
export function Loader({
    className = '',
    color = 'gray',
    divClass = ''
}) {
  return (
   <>
     <div className= {`h-full w-full flex justify-center items-center ${divClass}`}>
      <Spinner className={`h-16 w-16 text-gray-200 ${className}`} color={color} />;
    </div>
   </>
  )
}

export default Loader