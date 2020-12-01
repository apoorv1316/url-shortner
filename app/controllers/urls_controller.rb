class UrlsController < ApplicationController
  
  before_action  :set_url, only: [:show, :update]

  def index
    @urls = Url.all
  end

  def create
    @url = Url.new(url_params)
    @url.assign_random_string_for_slug
    if @url.save
      render status: :ok, json: {notice: "Success"}
    else
      render status: :unprocessable_entity, json: {errors: @url.errors.full_messages}
    end
  end
  
  def show
    @url.clicked +=1
    if @url.save
      render status: :ok, json: {notice: "Successful increment", url: @url }
    else
      render status: :unprocessable_entity, json: {errors: @url.errors.full_messages}
    end
  end

  def update
    @url.toggle!(:pinned)
    if @url.save
      render status: :ok, json: {notice: "pin updated"}
    else
      render status: :unprocessable_entity, json: {errors: @url.errors.full_messages}
    end
  end

  private

  def url_params
    params.require(:url).permit(:full_url)
  end

  def set_url
    @url = Url.find(params[:id])
    unless @url
      render status: :unprocessable_entity, json: {errors: @url.errors.full_messages}
    end
  end

end
