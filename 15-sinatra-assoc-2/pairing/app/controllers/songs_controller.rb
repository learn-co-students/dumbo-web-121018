class SongsController < ApplicationController

  # What controller action? New Action
  get "/songs/new" do
    @artists = Artist.all
    erb :new
  end

  # What controller action? Create Action
  post "/songs" do
    binding.pry
  end

  # What controller action do we go to AFTER we create? Show Action
  get "/songs/:id" do
    @song = Song.find(params[:id])
    erb :show
  end
end