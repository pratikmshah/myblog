class PostsController < ApplicationController

  def index
  end

  def show
    @post = Post.find(params[:id])
  end

  def new
    @post = Post.new
  end

  def edit
  end

  def create
    @post = Post.new(post_params)

    if @post.save
      redirect_to @post
    else
      redirect_to new_post(@post)
    end
  end

  def update
  end

  def destroy
  end

  private #========= PRIVATE

  def post_params
    params.require(:post).permit(:title, :content)
  end

end
