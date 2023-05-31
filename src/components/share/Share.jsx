
import "./share.css"
import PermMediaIcon from '@mui/icons-material/PermMedia';
import LabelIcon from '@mui/icons-material/Label';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import LocationOnIcon from '@mui/icons-material/LocationOn';
export default function Share() {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
            <img src="/assets/person/1.jpeg" alt="" className="shareProfileImg" />
            <input placeholder="What's in your mind Safak?" className="shareInput" />
        </div>
        <hr className="shareHr"/>
        <div className="shareBottom">
            <div className="shareOptions">
               <div className="shareOption">
                  <PermMediaIcon htmlColor="tomato" className="shareIcon"></PermMediaIcon>
                  <span className="shareOptionText">Photo or Video</span>
               </div>
               <div className="shareOption">
                  <LabelIcon htmlColor="blue" className="shareIcon"></LabelIcon>
                  <span className="shareOptionText">Tag</span>
               </div>
               <div className="shareOption">
                  <LocationOnIcon htmlColor="green" className="shareIcon"></LocationOnIcon>
                  <span className="shareOptionText">Location</span>
               </div>
               <div className="shareOption">
                  <EmojiEmotionsIcon htmlColor="goldenrod" className="shareIcon"></EmojiEmotionsIcon>
                  <span className="shareOptionText">Emoji</span>
               </div>
              
            </div>
             <button className="shareButton">Share</button>
        </div>
      </div>
    </div>
  )
}
