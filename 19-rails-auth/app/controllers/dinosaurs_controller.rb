class DinosaursController < ApplicationController
  

  def index
    @dinosaurs = Dinosaur.all
    render :index
  end
end
