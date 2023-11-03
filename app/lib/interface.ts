export interface Post {
    map(arg0: unknown): unknown;
    title: string;
    overview: string;
    author: string;
    content: any;
    _id: string;
    date: string;
    slug: {
        current: string;
    }
}