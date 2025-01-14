import { ClipLoader } from "react-spinners"

export default function Loading(){
    return(
        <ClipLoader
            loading={true} 
            color="#636363"
            size={50}
        />
    )
}