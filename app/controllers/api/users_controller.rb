class Api::UsersController < ApplicationController

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
  end

  private

  def user_params
    params.require(:user).permit(:email_address, :password, :username)
  end
end