import { TimelineWrapper } from "./TimelineStyle";
import TimelineTitle from '../../components/timeline-title/TimelineTitle';
import PublishCard from "./PublishCard";
import PostCard from "./PostCard";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
// import { useState } from "react";

export default function Timeline() {
    return (
        <TimelineWrapper>
            <TimelineTitle title="timeline" />
            <PublishCard />
            <PostCard />
            <ToastContainer />
        </TimelineWrapper>
    )
}