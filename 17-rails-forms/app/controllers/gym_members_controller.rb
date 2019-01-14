class GymMembersController < ApplicationController

  def new
    @gym_member = GymMember.new
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
    gym_member = GymMember.create(gym_member_params)

    # redirect_to "/gym_members/#{gym_member.id}"
    redirect_to gym_member_path(gym_member)
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
    params.require(:gym_member).permit(:name, :address, :phone_number)
    # params = { gym_members: {name: "....", phone_number: "....", address: "...."}}
  end
end
