class Api::ChannelsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def create
    @channel = Channel.new(channel_params)
    if @channel.save
      render :show
    else
      render json: @channel.errors.messages, status: 422
    end
  end

  def messages
    @channel = Channel.find(params[:id])
    render :messages
  end

  private

  def channel_params
    params.require(:channel).permit(:name, :workspace_id)
  end
end