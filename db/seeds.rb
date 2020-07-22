# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Topic.destroy_all
Message.destroy_all

@gerand=User.create!(username:'gmac', password:'pw123456', img:'https://i.imgur.com/jKlqby6.png')
@mike=User.create!(username:'mike1', password:'mike123', img:'https://images.unsplash.com/photo-1594533136556-5e46506f63cf')

@baseball=Topic.create!(name:'Baseball')
@anime=Topic.create!(name:'hunterXhunter')

@message=Message.create!(content:'The houston astros are cheaters, sure hope every pitcher gets to take a shot at Altuve.', topic_id: @baseball.id, user_id: @gerand.id)
@message=Message.create!(content:'Regardless of cheating, the Yankees are the best team in baseball and are going to win the world series.', topic_id: @baseball.id, user_id: @mike.id)
@message=Message.create!(content:'Torres is the man!!', topic_id: @baseball.id, user_id: @gerand.id)
@message=Message.create!(content:'Killua is faster than Gong', topic_id: @anime.id, user_id: @mike.id)
@message=Message.create!(content:'But Gong is the stronger of the two', topic_id: @anime.id, user_id: @gerand.id)

