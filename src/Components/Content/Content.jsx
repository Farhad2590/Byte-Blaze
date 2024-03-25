import { useLoaderData } from "react-router-dom";
import placeHolderImage from "../../assets/404.jpg"
import Markdown from 'https://esm.sh/react-markdown@9'
import rehypeRaw from 'rehype-raw'

const Content = () => {
    const blog = useLoaderData()
    const { cover_image, tags, title, body_html } = blog;
    console.log(blog)
    return (
        <div className=" mx-auto group  border-2   bg-opacity-30 hover:no-underline focus:no-underline ">
            <img role="presentation" className="p-2 object-cover w-full rounded h-44 " src={cover_image || placeHolderImage} />
            <div className="flex flex-wrap py-6 gap-2 border-t border-dashed dark:border-gray-600">
                {
                    tags.map(tag => <a key={tag} className="px-3 py-1 rounded-sm hover:underline dark:bg-violet-600 dark:text-gray-50">#{tag}</a>)
                }
            </div>
            <div className="space-y-6">
                <h1 className="text-4xl font-bold md:tracking-tight md:text-5xl">{title}</h1>
                <Markdown rehypePlugins={[rehypeRaw]}>{body_html}</Markdown>
            </div>
        </div>

    );
};

export default Content;