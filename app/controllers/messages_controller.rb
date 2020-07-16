class MessagesController < ApplicationController
  before_action :find_topic, only: :index
  before_action :set_message, only: [:destroy, :update]
  before_action :authorize_request, only: [:create, :destroy, :update]

  def index
    @message = Message.where(topic_id: @topic.id)
    render json: @message, include: :topic, status: :ok
  end

  def show
    @message = Message.find(params[:id])
    render json: @message, include: :user
  end

  
  def create
    @message = Message.new(message_params)
    @topic = Topic.find(params[:topic_id])
    # @topic.messages<<@message
    @message.topic = @topic
    @message.user = @current_user
    if @message.save
      render json: @message, status: :created
    else
      render json: @message.errors, status: :unprocessable_entity
    end
  end

  def update
    if @message.user_id == @current_user.id
    if @message.update(message_params)
        render json: @message
      else
        render json: @message.errors, status: :unprocessable_entity
      end
    else render json: 'not authorized'
    end
  end

  def destroy
   if @message.user_id == @current_user.id
     @message.destroy
     render json: 'deleted'
   else
    render json: 'not authorized'
   end
  end



  private 
  
  def message_params
    params.require(:message).permit(:content)
  end 

  def find_topic
    @topic = Topic.find(params[:topic_id])
  end

  def set_message
    @message = Message.find(params[:id])
  end


end

