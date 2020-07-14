class MessagesController < ApplicationController
  before_action :message_params, only: :create 

  def show
    @message = Message.find(params[:id])
    render json: @message, include: :user
  end

  def sender_of_message
    @message = Message.all
    # @send = User.where()
    @user = User.find(params[:id])
    @sender = @message.where(@message.user_id === @user.id)
    render json: @sender
  end

  
  def create
    @message = Message.new(message_params)
    @topic = Topic.find(params[:topic_id])
    @message.topic = @topic

    if @message.save
      render json: @message, status: :created
    else
      render json: @message.errors, status: :unprocessable_entity
    end
  end


  private 
  
  def message_params
    params.require(:message).permit(:content)
  end 


end

