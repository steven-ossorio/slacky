<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 2b7fe1971aac7fa54a235e6eccdfbae43d053dfd
class Api::UsersController < ApplicationController
=======
class Api::UsersController < ApplicationController
  skip_before_action :verify_authenticity_token
>>>>>>> 3ba7c6d0b646da36ed3ac846006346a90132658d

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

<<<<<<< HEAD
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
<<<<<<< HEAD
    params.require(:user).permit(:email_address, :password, :username)
=======
    params.require(:user).permit(:email, :password)
>>>>>>> add controllers and working on creating methods
=======
    params.require(:user).permit(:email_address, :password, :username)
=======
    params.require(:user).permit(:email, :password)
>>>>>>> add controllers and working on creating methods
=======
  private

  def user_params
    params.require(:user).permit(:email_address, :password, :username)
>>>>>>> 3ba7c6d0b646da36ed3ac846006346a90132658d
>>>>>>> 2b7fe1971aac7fa54a235e6eccdfbae43d053dfd
  end
end