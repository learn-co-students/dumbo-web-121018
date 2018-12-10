require 'pry'

def game_hash
  {
    home: {
      team_name: "Brooklyn Nets",
      colors: ["Black", "White"],
      players: [
        {
          name: "Alan Anderson",
          number: 0,
          shoe: 16,
          points: 22,
          rebounds: 12,
          assists: 12,
          steals: 3,
          blocks: 1,
          slam_dunks: 1
        },
        {
          name: "Reggie Evans",
          number: 30,
          shoe: 14,
          points: 12,
          rebounds: 12,
          assists: 12,
          steals: 12,
          blocks: 12,
          slam_dunks: 7
        },
        {
          name: "Brook Lopez",
          number: 11,
          shoe: 17,
          points: 17,
          rebounds: 19,
          assists: 10,
          steals: 3,
          blocks: 1,
          slam_dunks: 15
        },
        {
          name: "Mason Plumlee",
          number: 1,
          shoe: 19,
          points: 26,
          rebounds: 12,
          assists: 6,
          steals: 3,
          blocks: 8,
          slam_dunks: 5
        },
        {
          name: "Jason Terry",
          number: 31,
          shoe: 15,
          points: 19,
          rebounds: 2,
          assists: 2,
          steals: 4,
          blocks: 11,
          slam_dunks: 1
        }
      ]
    },
    away: {
      team_name: "Charlotte Hornets",
      colors: ["Turquoise", "Purple"],
      players: [
        {
          name: "Jeff Adrien",
          number: 4,
          shoe: 18,
          points: 10,
          rebounds: 1,
          assists: 1,
          steals: 2,
          blocks: 7,
          slam_dunks: 2
        },
        {
          name: "Bismak Biyombo",
          number: 0,
          shoe: 16,
          points: 12,
          rebounds: 4,
          assists: 7,
          steals: 7,
          blocks: 15,
          slam_dunks: 10
        },
        {
          name: "DeSagna Diop",
          number: 2,
          shoe: 14,
          points: 24,
          rebounds: 12,
          assists: 12,
          steals: 4,
          blocks: 5,
          slam_dunks: 5
        },
        {
          name: "Ben Gordon",
          number: 8,
          shoe: 15,
          points: 33,
          rebounds: 3,
          assists: 2,
          steals: 1,
          blocks: 1,
          slam_dunks: 0
        },
        {
          name: "Brendan Haywood",
          number: 33,
          shoe: 15,
          points: 6,
          rebounds: 12,
          assists: 12,
          steals: 22,
          blocks: 5,
          slam_dunks: 12
        }
      ]
    }
  }
end

def num_points_scored(player_name)
  player_hash = find_player(player_name)
  player_hash[:points]
end

def shoe_size(player_name)
  player_hash = find_player(player_name)
  player_hash[:shoe]
end

def find_player(player_name)
  players.find { |player_hash| player_hash[:name] == player_name }
end

def players
  home_players = game_hash[:home][:players]
  away_players = game_hash[:away][:players]

  home_players + away_players
end


# num_points_scored("Jeff Adrien") => 10
# shoe_size("Jeff Adrien") => 18

find_player("Jeff Adrien")
#
binding.pry









# want to know what you're looking for first
# looking for the points ?
# work my way from the key :points and work my way up to the parent objects

# How would a human do this?

# taking in a player name and look for the points scored
# scrolling down the hash and looking for the player
# name and then the players points scored


# # find a player?
# # - going through the different layers that lead to a player
# # - want the values of payers that hold the players score
#
# # and return the player that we are looking for's points
# # -
#
# # let's find "Jeff Adrien" and returns his points
# # game_hash[:away][:players][0][:points]
#
# # how we got here:
# #  - look through home and away
#   game_hash.each do |location, team_info|
#     # go to just the players key
#     #  - find the players in the team hash
#     team_info[:players].each do |player_hash|
#       # we have each player?
#       #  - look through each player to find the
#       # player with the name "Jeff Adrien"
#       if player_hash[:name] == player_name
#         #  - return the players points
#         return player_hash[:points]
#       end
#     end
#   end
#
#
# # to see what team jeff was on
#
