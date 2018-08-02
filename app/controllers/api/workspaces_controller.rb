class Api::WorkspacesController < ApplicationController 
  skip_before_action :verify_authenticity_token

  def create
    @workspace = Workspace.new(workspace_params)
    @workspace.user_id = current_user.id
    if @workspace.save
      render :show
    else
      render json: @workspace.errors.messages, status: 422
    end
  end

  private
  def workspace_params
    params.require(:workspace).permit(:name)
  end
end