class SessionsController < ApplicationController

  before_action :is_admin?, only: [:admin]

  def new
  end

  def validate_login
    if params[:username].present? && params[:password].present?     # check for user input
      user = User.find_by(username: params[:username])              # find user in database
      if user
        authenticated_user = user.authenticate(params[:password])   # if found check password
      end
    end
    if authenticated_user                                           # if authenticated create session cookie
      session[:user_id] = user.id
      session[:admin] = user.admin
      flash[:notice] = "Welcome #{user.username.capitalize}"
      redirect_to '/'
    else                                                            # otherwise retry login
      flash[:notice] = "Invalid username/password."
      redirect_to '/login'
    end
  end

  def destroy
    # remove session cookie and redirect to homepage
    session.delete(:user_id)
    flash[:notice] = "You have been logged out."
    redirect_to '/'
  end

end
