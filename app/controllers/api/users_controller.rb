<<<<<<< HEAD
class Api::UsersController < ApplicationController
  skip_before_action :verify_authenticity_token

  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render :show
    else
      render json: @user.errors.messages, status: 422
    end
  end
  
  def show
    @user = User.find(params[:id])
  end

  def workspaces
    @workspaces = Workspace.where(user_id: current_user.id)
    render :workspaces
=======
class API::UsersController < ApplicationController
  def create
    
>>>>>>> add controllers and working on creating methods
  end

  private

  def user_params
<<<<<<< HEAD
    params.require(:user).permit(:email_address, :password, :username)
=======
    params.require(:user).permit(:email, :password)
>>>>>>> add controllers and working on creating methods
  end
end