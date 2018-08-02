class ChannelsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def create
    @channel = Channel.new(channel_params)
    render 'api/workspaces/channels'
  end

  private

  def channel_params
    params.require(:channel).permit(:name, :workspace_id)
  end
end