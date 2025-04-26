import { connectDB } from "@/lib/mongodb";
import Article from "@/models/Article";

export async function GET() {
  await connectDB();
  const articles = await Article.find();
  return Response.json(articles);
}

export async function POST(request) {
  const body = await request.json();
  await connectDB();
  const article = await Article.create(body);
  return Response.json(article);
}
export async function DELETE(request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  if (!id) {
    return Response.json(
      { error: "Article ID is required for deletion" },
      { status: 400 }
    );
  }

  await connectDB();

  const deletedArticle = await Article.findByIdAndDelete(id);

  if (!deletedArticle) {
    return Response.json({ error: "Article not found" }, { status: 404 });
  }

  return Response.json({ message: "Article deleted successfully" });
}