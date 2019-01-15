class TrainersController < ApplicationController
# I want to show a specific trainer
  def show
    # GET /trainers/:id
    @trainer = Trainer.find(params[:id])
    render :show
  end
end
