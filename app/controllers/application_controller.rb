class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  private

    # check to see if you are admin in order to write, edit, delete posts
    def is_admin?
      if session[:user_id]                       # check to see if logged in
        account = User.find(session[:user_id])   # check if this  user is an admin
        if account.admin                         # if admin proceed to dashboard
          return true
        else
          flash[:notice] = "Your account does not have admin privileges"
          redirect_to(:controller => 'posts', :action => 'index')
          return false                           # stops the before action from continuing
        end
      else
        flash[:notice] = "Please log in"
        redirect_to(:controller => 'sessions', :action => 'new')  # redirect to login if no session
        return false
      end
    end

end
