require 'rest-client'
require 'json'
require 'pry'





# response = RestClient.get "https://www.reddit.com/r/awww.json"
# response_hash = JSON.parse(response)


# want to ask the user to tell us some words to search for *DONE
puts "Whatcha lookin for?? (tell me something your interested in...)"
# save what they tell us so we can use it later *DONE
user_input = gets.chomp
# use the users query to ask the google book api for info
#  - put our user's input into the q in our url *DONE
url = "https://www.googleapis.com/books/v1/volumes?q=#{user_input}"
#  - make a request with our new url to the google api & save the response *DONE
response = RestClient.get url
#  - parse the JSON that we get back from our google api (the url) *DONE
# save the response from google so we can use it later *DONE
response_hash = JSON.parse(response)
# list out all of our books we get back from the api (maybe loop through the response?)
# response_hash["items"][0] => This is a hash that represents a single book
# response_hash["items"] => is an array of all of our books

books = response_hash["items"]

# We want to list out:
books.each do |book|
  # - title
  puts ""
  puts "title:"
  puts book["volumeInfo"]["title"]
  puts "--------"
  # - authors
  puts ""
  puts "authors:"
  puts book["volumeInfo"]["authors"] # => returns an array of authors
  puts "--------"
  # - desc
  puts ""
  puts "description:"
  puts book["volumeInfo"]["description"]
  puts "--------"
  puts ""
  puts "********************************"
  puts ""

end
# make the info we get back user friendly
# put it to the screen for the use to see!


# binding.pry

0
