require 'pry'
# environment & application setup
# requiring relative and necessary files to make our app communicate
require "./user"
require "./tweet"
require "./like"

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

# kevin has 3 likers
kevin.like_tweet(tweet4)
kevin.like_tweet(tweet3)
Like.new(tweet2, kevin)

# coffee_dad has 4 likes
Like.new(tweet5, coffee_dad)
Like.new(tweet6, coffee_dad)
coffee_dad.like_tweet(tweet4)
coffee_dad.like_tweet(tweet3)


binding.pry

puts 'done'
