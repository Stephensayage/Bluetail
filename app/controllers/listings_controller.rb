class ListingsController < ApplicationController
  before_action :set_listing, only: [:show, :update, :destroy]
  before_action :authorize_request, only: [:create, :update, :destroy, :add_agent]

  # GET /listings
  def index
    @listings = Listing.all

    render json: @listings
  end

  # GET /listings/1
  def show
    render json: @listing, include: :users
  end

  # POST /listings
  def create
    @listing = Listing.new(listing_params)

    if @listing.save
      render json: @listing, status: :created
    else
      render json: @listing.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /listings/1
  def update
    if @listing.update(listing_params)
      render json: @listing
    else
      render json: @listing.errors, status: :unprocessable_entity
    end
  end

  # DELETE /listings/1
  def destroy
    @listing.destroy
  end

  def add_agent
    @user = User.find(params[:user_id])
    @listing = Listing.find(params[:listing_id])

    @user.listings.push(@listing)
    render json: @listing, include: :users
  end
  
  def remove_agent
    @user = User.find(params[:user_id])
    @listing = Listing.find(params[:listing_id])

    @user.listings.slice!(@listing)
    render json: @listing, include: :users
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_listing
      @listing = Listing.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def listing_params
      params.require(:listing).permit(:street, :city, :state, :zip, :content, :price, :square_footage, :date, :img_Url_1)
    end
end
