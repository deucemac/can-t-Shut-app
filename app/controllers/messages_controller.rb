class MessagesController < ApplicationController
  before_action :message_params, only: :create 
  before_action :find_topic, only: :index

  def index
    @message = Message.where(topic_id: @topic.id)
    render json: @message, include: :topic, status: :ok
  end

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
    @topic.messages<<@message

    if @message.save
      render json: @message, status: :created
    else
      render json: @message.errors, status: :unprocessable_entity
    end
  end

  # def make_message
  #   @message = Message.new(message_params)
  #   @topic = Topic.find(params[:topic_id])
  #   @topic.messages<<@message

  #   if @message.save
  #     render json: @topic, status: :created
  #   else
  #     render json: @message.errors, status: :unprocessable_entity
  #   end
  # end

  private 
  
  def message_params
    params.require(:message).permit(:content)
  end 

  def find_topic
    @topic = Topic.find(params[:topic_id])
  end


end

