import React from 'react'
import './Progress.css'
import FavoriteIcon from '@mui/icons-material/Favorite';
import CloseIcon from '@mui/icons-material/Close';
export default function Progress(props) {

    return (
        <div className="progressFather">

            <div className="bar">
                <div className="cancel">
                    {/* <img src="assets/close2.png" alt="" /> */}
                    <CloseIcon
                        fontSize="large"
                        style={{
                            color: "#e5e5e5",
                            position: "relative", top: "20px", right: "10%",
                            marginRight: "20px"
                        }}
                    />
                </div>
                <div className="progressTop" dir="ltr">

                    <div className="progress"
                        style={{ width: props.width + "%" }}>

                    </div>
                </div>
            </div>
            <div className="tries">
                عدد المحاولات : 5
                <FavoriteIcon
                    fontSize="large"
                    style={{
                        color: "rgb(201, 32, 32)",
                        position: "relative", top: "10px",
                        marginRight: "20px"
                    }}
                />
            </div>
        </div>
    )
}
