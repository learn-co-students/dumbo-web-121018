class GymMembersController < ApplicationController

  def new
    @gym_member = GymMember.new
    @trainers = Trainer.all
    render :new
  end

  # Methods inside of the controller => Actions
  def show
    # GET /gym_members/:id
    @gym_member = GymMember.find(params[:id])
    render :show
  end

  def create
    # binding.pry
    # byebug
    byebug
    @gym_member = GymMember.create(gym_member_params)

    # If it is successful, redirect to the show page
    # redirect_to "/gym_members/#{gym_member.id}"
    if @gym_member.valid?
      redirect_to gym_member_path(@gym_member)
    else
      # Else -> The form again
      flash[:error] = @gym_member.errors.full_messages
      @trainers = Trainer.all
      render :new
      # redirect_to "/gym_members/new"
    end
  end

  def edit
    # GET /gym_members/:id/edit
    @gym_member = GymMember.find(params[:id])
    render :edit
  end

  def update
    gym_member = GymMember.find(params[:id])
    gym_member.update(gym_member_params)

    redirect_to gym_member_path(gym_member)
  end

  private
  def gym_member_params
    params.require(:gym_member).permit(:name, :address, :phone_number, :trainer_id)
    # params = { gym_members: {name: "....", phone_number: "....", address: "...."}}
  end
end
