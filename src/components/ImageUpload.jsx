import {useState} from "react";
import {IoAdd} from 'react-icons/io5';

const ImageUpload = () => {
    const [imageup, setImageup] = useState();
    console.log(imageup)
    return (
        <div className="main">
            <div className="uploadimage">
                <label htmlFor="imgs"><IoAdd/></label>
            </div>
            <input id="imgs" type="file" accept="image/png, image/jpeg,.txt,.doc" onChange={(e) => setImageup(e.target.files)} />
        </div>
    );
}
export default ImageUpload;