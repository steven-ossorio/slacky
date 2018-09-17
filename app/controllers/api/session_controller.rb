class Api::SessionController < ApplicationController
<<<<<<< HEAD

  def create
    @user = User.find_by_credentials(
      user_params[:email_address],
      user_params[:password]
=======
  skip_before_action :verify_authenticity_token

  def create
    @user = User.find_by_credentials(
      params[:user][:email_address],
      params[:user][:password]
>>>>>>> c2355ef2d1f19eae09c7a2263043c43bbe0024f0
    )

    if @user
      login(@user)
      render 'api/users/show'
    else
      render json: ['Invalid Credentials'], status: 401
    end
  end

  def destroy
    @user = current_user
    if @user
      logout
      render '/api/users/show'
    else
      render json: ['No user is logged in']
    end
  end
<<<<<<< HEAD

  def user_params
    params.require(:user).permit(:email_address, :password)
  end
=======
>>>>>>> c2355ef2d1f19eae09c7a2263043c43bbe0024f0
end