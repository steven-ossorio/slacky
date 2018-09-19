class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
<<<<<<< HEAD
  helper_method :current_user, :logged_in
  skip_before_action :verify_authenticity_token

=======

  helper_method :current_user, :logged_in
>>>>>>> e9b6e61ceba75a328238be5489170a71961ebc51

  def login(user)
    @current_user = user
    session[:session_token] = user.reset_session_token!
  end

  def logout
    current_user.reset_session_token!
    session[:session_token] = nil
  end

  def logged_in?
    !!current_user
  end

  def current_user
    @current_user ||= User.find_by(session_token: session[:session_token])
  end
end
