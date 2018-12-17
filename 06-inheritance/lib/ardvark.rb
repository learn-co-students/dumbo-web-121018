class Ardvark < Animal

  def initialize(name)
    super(name)
    @ants_eaten = 0
  end

  def eat
    if @ants_eaten > 6
      "no. I'm done eating ants, do you have any salad?"
    else
      @ants_eaten += 1
      " #{super("ants")} 🐜 🐜 🐜 🐜 🐜 🐜"
    end
  end

  def make_noise
    "MEEP MEEP meep m e e p...."
  end

  
end
