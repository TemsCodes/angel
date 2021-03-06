class PlacesController < ApplicationController
  before_action :set_place, only: [:show, :edit, :update, :destroy]

  def index
    @booking = current_user.bookings.where('date >= ?', DateTime.now).first if current_user.bookings
    @places = Place.all
  end

  def create
    @place = Place.new(place_params)
    if @place.save
      redirect_to place_path(@place)
    else
      render :new
    end
  end

  def show
    @booking = Booking.new
    @markers =
      [{
        lat: @place.latitude,
        lng: @place.longitude
      }]
  end

  private

  def set_place
    @place = Place.find(params[:id])
  end

  def place_params
    params.require(:place).permit(:name, :address, :description, :website, :map_url, :phone_number)
  end

end


  # def edit
  # end

  # def update
  #   @place.update(place_params)
  #   redirect_to place_path(@place)
  # end

  # def destroy
  #   @place.destroy
  #   redirect_to places_path
  # end

  # def new
  #   @place = Place.new
  # end
