import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBlog } from "../features/blogs/blogSlice";
import { Link, useParams } from "react-router-dom";
import { format } from "date-fns";
import { ArrowLeft, Loader2 } from "lucide-react";

export default function BlogDetailPage() {
  const { blogId } = useParams(); // Use useParams to get the blog ID
  const dispatch = useDispatch();
  const { blog, isLoading, isError, message } = useSelector(
    (state) => state.blog
  );

  useEffect(() => {
    if (blogId) {
      dispatch(getBlog(blogId)); // Fetch blog by ID
    }
  }, [dispatch, blogId]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <p className="text-red-500">Error: {message}</p>
      </div>
    );
  }

  if (!blog || !blog._id) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <p className="text-muted-foreground">Blog post not found.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <Link to="/blog">
          <button className="mb-6 pl-0 flex items-center justify-center gap-2 bg-pink-300 hover:bg-pink-500 text-white rounded-lg py-3 px-6 transition duration-300 ease-in-out transform hover:scale-105">
            <ArrowLeft className="h-4 w-4 ml-2" />
            <span>Quay về trang tin tức</span>
          </button>
        </Link>

        <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>

        <p className="text-sm text-muted-foreground mb-8">
          {format(new Date(blog.createdAt), "MMMM dd, yyyy")}
        </p>

        {blog.images && blog.images.length > 0 && (
          <div className="mb-8">
            <div className="relative h-full w-full rounded-lg overflow-hidden">
              <img
                src={blog.images[0].url || "/placeholder.svg"}
                alt={blog.title}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        )}

        {/* Additional images if there are more than one */}
        {blog.images && blog.images.length > 1 && (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            {blog.images.slice(1).map((image, index) => (
              <div
                key={image._id || index}
                className="relative h-40 rounded-lg overflow-hidden"
              >
                <img
                  src={image.url || "/placeholder.svg"}
                  alt={`${blog.title} - image ${index + 2}`}
                  className="object-cover w-full h-full"
                />
              </div>
            ))}
          </div>
        )}

        <div
          className="prose prose-lg max-w-none dark:prose-invert"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />
      </div>
    </div>
  );
}
