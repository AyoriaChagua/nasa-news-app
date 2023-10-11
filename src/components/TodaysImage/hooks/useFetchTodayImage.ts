import fetch from '../../../api/nasa/fetch';
import { useEffect, useState } from 'react';
import { Post } from '../../../types/core';

function useFetchTodayImage() {
    const [todayImage, setTodayImage] = useState<Post>({});
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        async function loadTodayPost() {
            try {
                const todaysImageReponse = await fetch()
                setTodayImage(todaysImageReponse[0])
                setLoading(false)
            } catch (error) {
                console.log(error)
                setTodayImage({})
            }
        }
        loadTodayPost().catch(null)
    }, []);
    return {loading, todayImage}
}

export default useFetchTodayImage