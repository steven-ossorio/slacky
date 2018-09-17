class Api::UsersController < ApplicationController
<<<<<<< HEAD
=======
  skip_before_action :verify_authenticity_token
>>>>>>> c2355ef2d1f19eae09c7a2263043c43bbe0024f0

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
  end

=======
>>>>>>> c2355ef2d1f19eae09c7a2263043c43bbe0024f0
  private

  def user_params
    params.require(:user).permit(:email_address, :password, :username)
  end
end