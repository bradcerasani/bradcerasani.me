require 'rubygems'
require 'rack/rewrite'
require 'bundler'
Bundler.require

$LOAD_PATH.unshift 'lib'

use Rack::Rewrite do
  r301 '/is-money-and-wants-to-show-it/', '/'
  r307 '/', 'journal/a-dance-with-sinatra'
  r307 '/journal/', 'journal/a-dance-with-sinatra'
end

require './application'
run Sinatra::Application
