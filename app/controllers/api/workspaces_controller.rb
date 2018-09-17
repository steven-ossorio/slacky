class Api::WorkspacesController < ApplicationController 
<<<<<<< HEAD
=======
  skip_before_action :verify_authenticity_token
>>>>>>> c2355ef2d1f19eae09c7a2263043c43bbe0024f0

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

<<<<<<< HEAD
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

=======
>>>>>>> c2355ef2d1f19eae09c7a2263043c43bbe0024f0
  private
  def workspace_params
    params.require(:workspace).permit(:name)
  end
end