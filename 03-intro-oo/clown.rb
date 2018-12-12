require 'pry'

# clown_joke = "Why don't sharks eat clowns? They taste funny."
# clown_names = [ "Bluster", "Flaky", "Raspy", "Floppy", "Krusty", "Baby" ]

# clown1 = { name: "Bluster", age: 40, skill: "juggling", fear: "red noses" }
# clown2 = { name: "Flaky", age: 32, skills: "pie throwing", fears: "children" }
# clown3 = { name: "Raspy", age: 24, skill: "haunting your dreams", fear: "other clowns" }
# clown4 = { name: "Floppy", clown_age: 76, skill: "falling down", fear: "stairs" }
# clown5 = { name: "Krusty", age: 39, skill: "giving a creepy smile", fear: "parties" }
# clown6 = { name: "Baby", age: 19, skills: "eating a lot of food", fear: "birds" }
#
# clowns = [ clown1, clown2, clown3, clown4, clown5, clown6 ]
#
# # i want a clown to say hello
# def say_hello(name, age)
#   # Hi, I'm Bluster! and I'm 40 years old!
#   puts "Hi, I'm #{name}! and I'm #{age} years old!"
# end




class Clown
  attr_accessor :name, :age, :fear, :skill

  def initialize(name, age, skill, fear)
    @fear = fear
    @name = name
    @age = age
    @skill = skill
  end

  def say_hello
    "Hi, I'm #{@name}! and I'm #{@age} years old!"
  end

  def perform
    "I'm currently #{@skill}...."
  end

  def tell_secret
    "Shhhh... don't anyone, but I'm terrified of #{@fear}"
  end

end





clown1 = Clown.new("Bluster", 40, "juggling", "red noses")
clown2 = Clown.new("Flaky", 32, "pie throwing", "children")
clown3 = Clown.new("Raspy", 24, "haunting your dreams","other clowns")
clown4 = Clown.new("Floppy", 76, "falling down","stairs")
clown5 = Clown.new("Krusty", 39, "giving a creepy smile","parties")
clown6 = Clown.new("Baby", 19, "eating a lot of food","birds")

clowns = [ clown1, clown2, clown3, clown4, clown5, clown6 ]




# have all the clowns say hi
clowns.each do |clown|
  puts clown.say_hello
end

# i want a list of all of the clown's names that are over 30
# clown_names_array = []

older_clowns = clowns.select do |clown|
  clown.age > 30
end

clown_names = older_clowns.map do |clown|
  clown.name
end

# => ["Bluster", "Flaky", "Floppy", "Krusty"]







# attr_reader :name, :age, :fear, :skill
# attr_writer :name, :age, :fear, :skill

# attr_reader :age



# set information
# setter / writer
# def name=(name)
#   @name = name
# end

# get our name back
# getter / reader
# def name
#   @name
# end

# def age=(age)
#   @age = age
# end

# def age
#   @age
# end

# def fear=(fear)
#   @fear = fear
# end

# def fear
#   @fear
# end

# def skill=(skill)
#   @skill = skill
# end

# def skill
#   @skill
# end







binding.pry

0
