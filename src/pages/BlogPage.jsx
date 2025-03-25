import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBlogs } from "../features/blogs/blogSlice";  // Adjust path if necessary
import { Link } from "react-router-dom";  // Use react-router-dom's Link
import { format } from "date-fns";
import { Loader2 } from "lucide-react"; // For loading spinner

export default function BlogPage() {
  const dispatch = useDispatch();
  const { blogs, isLoading, isError, message } = useSelector((state) => state.blog);

  useEffect(() => {
    dispatch(getBlogs()); 
  }, [dispatch]);

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

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 justify-center flex ">Tin tức của chúng tôi</h1>

      {blogs.length === 0 ? (
        <p className="text-center text-muted-foreground">Không có bài nào được tìm thấy</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {blogs.map((blog) => (
            <Link to={`/blog/${blog._id}`} key={blog._id} className="group">
              <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col ">
                <div className="relative w-full h-64">
                  {blog.images && blog.images.length > 0 ? (
                    <img
                      src={blog.images[0].url || "/placeholder.svg"}
                      alt={blog.title}
                      className="object-cover w-full h-full"
                    />
                  ) : (
                    <div className="bg-muted h-full w-full flex items-center justify-center">
                      <p className="text-muted-foreground">Không có ảnh</p>
                    </div>
                  )}
                </div>
                <div className="p-4 flex flex-col justify-between flex-grow">
                  <h2 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-200">
                    {blog.title}
                  </h2>
                  <div
                    className="text-muted-foreground mb-3 line-clamp-2 text-sm"
                    dangerouslySetInnerHTML={{
                      __html: blog.content.replace(/<[^>]*>/g, " ").substring(0, 150) + "...",
                    }}
                  />
                  <p className="text-xs text-muted-foreground">{format(new Date(blog.createdAt), "MMMM dd, yyyy")}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}