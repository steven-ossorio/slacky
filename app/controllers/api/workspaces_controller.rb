class Api::WorkspacesController < ApplicationController 
<<<<<<< HEAD
=======
  skip_before_action :verify_authenticity_token
>>>>>>> 3ba7c6d0b646da36ed3ac846006346a90132658d

  def create
    @workspace = Workspace.new(workspace_params)
    @workspace.user_id = current_user.id
    if @workspace.save
<<<<<<< HEAD
      Member.create(user_id: current_user.id, workspace_id: @workspace.id)
=======
>>>>>>> 3ba7c6d0b646da36ed3ac846006346a90132658d
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
>>>>>>> 3ba7c6d0b646da36ed3ac846006346a90132658d
  private
  def workspace_params
    params.require(:workspace).permit(:name)
  end
end