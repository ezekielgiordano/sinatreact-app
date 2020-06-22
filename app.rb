require 'sinatra'
require 'sinatra/json'
require 'json'
require 'pg'
require 'pry' if development? || test?

# data = PG.connect(dbname: 'your_database', user: 'your_username')

# # The data from table_1 will be deliverd to the api endpoint "/api/v1/table_1"

# table_1 = data.exec('SELECT * FROM table_1;')
# table_1_array = []
# table_1.each do |row|
# 	table_1_array << row
# end
# table_1_json = table_1_array.to_json

# # ROUTES

# get '/api/v1/table_1' do
# 	content_type :json
# 	table_1_json
# end

get '/' do
    File.read('public/index.html')
end
