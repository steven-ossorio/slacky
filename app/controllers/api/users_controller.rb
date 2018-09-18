class Api::UsersController < ApplicationController
<<<<<<< HEAD
<<<<<<< HEAD
=======
  skip_before_action :verify_authenticity_token
>>>>>>> Successfully add a user through postman
=======
<<<<<<< HEAD
=======
  skip_before_action :verify_authenticity_token
>>>>>>> Successfully add a user through postman
=======
  skip_before_action :verify_authenticity_token
>>>>>>> 31bf41b831cafe2bd6d1b6f6fd8b793ea8baf6db
>>>>>>> 1541b1de5e710ca2ba3f5a07cb4a61a96e9544c9

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
<<<<<<< HEAD
  end

  def workspaces
    @workspaces = Workspace.where(user_id: current_user.id)
    render :workspaces
=======
>>>>>>> Successfully add a user through postman
  end

  private

  def user_params
    params.require(:user).permit(:email_address, :password, :username)
  end
end