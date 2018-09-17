class Api::WorkspacesController < ApplicationController 
<<<<<<< HEAD
=======
  skip_before_action :verify_authenticity_token
>>>>>>> 126791fd0aeb40e4e5ede8ce0e3b0c8ae1f8584e

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
<<<<<<< HEAD
    @members = @workspace.members
    render :members
  end

  def channels
    @workspace = Workspace.find(params[:id])
    @channels = @workspace.channels
    render :channels
  end

=======
    render :members
  end

>>>>>>> 126791fd0aeb40e4e5ede8ce0e3b0c8ae1f8584e
  private
  def workspace_params
    params.require(:workspace).permit(:name)
  end
end