import { BsThreeDots,BsHeart } from "react-icons/bs";
import {IoPaperPlaneOutline } from "react-icons/io5";
import "./card.css";

const Card=(props)=>{
    let file=props.file;
    console.log(file)
    return(
        <>
        {
        file.map((value)=>{
             return(
       
                <div className="card">
                    <header className="card-head">
                            <div className="name"><b>{value.name}</b>
                            <br/>
                            {value.location}
                            </div>
                            <div className="threeDot"><BsThreeDots size="1.5em"/></div>
                        </header>
                        <section>
                            <img src={`https://instaclone-dragon.herokuapp.com/uploads/${value.PostImage}`}  alt="photos" className="post-image"/>
                        </section>
                        <section className="action">
                            <div className="heart" ><BsHeart/></div>
                            <div><IoPaperPlaneOutline/></div>
                            <div className="date">10-09-2022</div>
                        </section>
                        <section>
                            <div className="likes">0 </div>
                        </section>
                        <section>
                            <div className="description">{value.description}</div>
                        </section>
                </div>
                );
        })
    }
        </>
    );

    
}
export default Card;