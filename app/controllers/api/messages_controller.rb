class Api::MessagesController < ApplicationController

  def create
    @message = Message.new(message_params)
    @message.user_id = current_user.id
    if @message.save
      render :show
    else 
      render json: @message.errors.messages, status: 422
    end
  end

  private

  def message_params
    params.require(:message).permit(:text, :channel_id)
  end
end