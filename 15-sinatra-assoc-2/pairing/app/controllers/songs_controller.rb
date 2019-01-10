class SongsController < ApplicationController

  # What controller action? New Action
  get "/songs/new" do
    @artists = Artist.all
    @genres = Genre.all
    erb :new
  end

  # What controller action? Create Action
  post "/songs" do
    binding.pry

    # Check out the params
    # You'll notice the params has:
    # name is a string but genres is an array
    # {"name" => "Toxic", "genres" => [1,2,3]}
    # we will iterate over the genres and add a connection
    # for each one

    song = Song.new
    song.name = params[:name]
    # we're setting the artist id here
    song.artist_id = params[:artist_id]
    # Now we'll iterate over and add each genre
    params["genre_ids"].each do |genre_id|
      song.genres << Genre.find(genre_id)
      song.save
    end



    redirect "/songs/#{song.id}"
  end

  # What controller action do we go to AFTER we create? Show Action
  get "/songs/:id" do
    @song = Song.find(params[:id])
    binding.pry
    erb :show
  end
end
