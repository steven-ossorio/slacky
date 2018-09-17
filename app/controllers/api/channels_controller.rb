class Api::ChannelsController < ApplicationController
<<<<<<< HEAD

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
=======
  skip_before_action :verify_authenticity_token

  def create
    @channel = Channel.new(channel_params)
    @channel.save
    render :show
>>>>>>> 7829a44ef8c65ea243e413ae6c4a53a729acac5c
  end

  private

  def channel_params
    params.require(:channel).permit(:name, :workspace_id)
  end
end