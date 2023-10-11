import { NativeStackNavigationProp } from '@react-navigation/native-stack/lib/typescript/src/types'

export type Post = {
    date?: string;
    explanation?: string;
    hdurl?: string;
    media_type?: string;
    service_version?: string;
    title?: string;
    url?: string;
}

export type RootStackParams = {
    Home: undefined;
    Detail: Post;
}

export type PostImageNavigationProps = NativeStackNavigationProp<RootStackParams, 'Detail'>