import { CommentInputWrapper } from "./CommentInputStyle";
import { IoPaperPlaneOutline } from 'react-icons/io5'

export default function CommentInput({ pictureUrl, publishComment, comment, setComment }) {
    return (
        <CommentInputWrapper>
            <img src={pictureUrl} alt="user" />
            <div>
                <input type="text" placeholder="write a comment..." value={comment}
                    onChange={(e) => setComment(e.target.value)} onKeyDown={(e) => e.key === 'Enter' ? publishComment() : false} />
                <IoPaperPlaneOutline cursor="pointer" style={{ fontSize: '20px', color: '#F3F3F3' }} onClick={publishComment} />
            </div>            
        </CommentInputWrapper>
    )
}