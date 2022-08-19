import { Button } from "./TimelineStyle";
import { BiRefresh } from "react-icons/bi";

export default function NewPostsButton({ newPosts, updateTimeline}) {
    return(
        <Button onClick={updateTimeline}>
            <p>{`${newPosts} new posts, load more!`} <BiRefresh size={"30px"} /></p>
        </Button>
    );
}