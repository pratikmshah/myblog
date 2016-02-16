module AdminHelper
  def admin?
    if session[:user_id]
      User.find(session[:user_id]).admin
    end
  end
end
