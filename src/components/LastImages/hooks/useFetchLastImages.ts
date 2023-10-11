import { useEffect, useState } from "react";
import fetch from "../../../api/nasa/fetch";
import { Post } from "../../../types/core";
import {format, subDays} from "date-fns";

function useFetchLastImage() {
    const [lastPosts, setLastPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        async function loadLastPosts() {
            try {
                const date = new Date();
                const todaysDate = format(date, 'yyyy-MM-dd');
                const fiveDaysAgoDate = format(subDays(date, 5), 'yyyy-MM-dd')
                const lastPostsResponse = await fetch(`&start_date=${fiveDaysAgoDate}&end_date=${todaysDate}`);
                setLastPosts(lastPostsResponse)
                setLoading(false)
            } catch (error) {
                console.log(error);
            }
        }
        loadLastPosts().catch(null)
    }, [])
    return ({lastPosts, loading})
}

export default useFetchLastImage