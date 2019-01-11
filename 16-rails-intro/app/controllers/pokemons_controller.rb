class PokemonsController < ApplicationController

  def index
    # Index Action => "Shows everything about this resource"
    @pokemons = Pokemon.all
    render :index
  end

  def show
    # GET /pokemons/:id
    @pokemon = Pokemon.find(params[:id])
    render :show
  end

  def kachow
    # Cars the movie
    render :wow
  end

end
