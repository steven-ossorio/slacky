class Api::WorkspacesController < ApplicationController 
<<<<<<< HEAD
=======
  skip_before_action :verify_authenticity_token
>>>>>>> e9b6e61ceba75a328238be5489170a71961ebc51

  def create
    @workspace = Workspace.new(workspace_params)
    @workspace.user_id = current_user.id
    if @workspace.save
      Member.create(user_id: current_user.id, workspace_id: @workspace.id)
      render :show
    else
      render json: @workspace.errors.messages, status: 422
    end
  end

  def members
    @workspace = Workspace.find(params[:id])
    @members = @workspace.members
    render :members
  end

  def channels
    @workspace = Workspace.find(params[:id])
    @channels = @workspace.channels
    render :channels
  end

  private
  def workspace_params
    params.require(:workspace).permit(:name)
  end
end