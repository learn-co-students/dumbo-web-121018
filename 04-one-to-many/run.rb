require 'pry'
# environment & application setup
# requiring relative and necessary files to make our app communicate
require "./user"
require "./tweet"

coffee_dad = User.new("coffee_dad")
kevin = User.new("KevyWevy")

tweet1 = Tweet.new(" Cofffee", coffee_dad)
tweet2 = Tweet.new("yum yum in my tum, coffee", coffee_dad)
tweet3 = Tweet.new("I stare into the darkness...", coffee_dad)
tweet4 = Tweet.new("I ❤️ COFEEEE", coffee_dad)
coffee_dad.post_tweet("coffeeee")
coffee_dad.post_tweet("it's time...")
# coffee_dad => 6


tweet5 = Tweet.new("sup", kevin)
tweet6 = Tweet.new("yo", kevin)
kevin.post_tweet("programminggggg")
# kevin => 3


binding.pry

puts 'done'
