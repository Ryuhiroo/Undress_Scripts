import Link from "next/link";
import { Post } from "./lib/interface";
import { client } from "./lib/sanity";

async function getData() {
  const query = '* [_type == "post"]';
  const data = await client.fetch(query);
  return data;
}

export const metadata = {
  title: "Undress Scripts",
  description: "Articles and opinions regards on such"
}

export default async function IndexPage() {
  const data = await getData() as Post[];
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-u700">
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-6xl sm:leading-10 md:text-6xl
        md:leading-14">
          All Articles
        </h1>
      </div>
      <ul>
        {
          data.map((post) => (
            <li key={post._id} className="py-4">
              <article className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                <div>
                  <p className="text-base font-bold italic leading-6 tracking-tight text-gray-900 dark:text-gray-100">
                    {post.author}
                  </p>
                  <p className="text-sm font-medium leading-2 tracking-tight text-gray-900 dark:text-gray-100">
                    {post.date}
                    </p>
                </div>

                <Link href={`/post/${post.slug.current}`} 
                prefetch 
                className="space-y-3 xl:col-span-3">
                  <div>
                    <h3 className="text-2xl font-bold leading-8 tracking-tight text-gray-900 dark:text-gray-100">
                      {post.title}
                    </h3>
                  </div>
                  <p className="prose max-v-none text-gray-500 dark:text-gray-400 line-clamp-2">
                    {post.overview}
                  </p>
                </Link>

              </article>
            </li>
          ))
        }
      </ul>
    </div>
  )
}
