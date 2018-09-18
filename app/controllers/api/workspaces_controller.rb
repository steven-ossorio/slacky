class Api::WorkspacesController < ApplicationController 

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