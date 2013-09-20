require 'sinatra'
require 'tilt'
require 'haml'
require 'redcarpet'
require 'pygments.rb'
require 'chronic'
require 'psych'

get '/' do
  @entries = load_structure('journal')
  haml :'/index'
end

get "/journal/?" do
  @entries = load_structure('journal')
  haml :'/index'
end

get "/journal/:entry/?" do
  file = "entries/#{params[:entry]}.md"
  if File.exist?(file)
    @entries = load_structure('journal')
    load_into_haml('/journal/entry', file)
  else
    404
  end
end

error 404 do
  haml :'/pages/notfound'
end

class BetterRender < Redcarpet::Render::HTML
  include Redcarpet::Render::SmartyPants
  def block_code(code, lang)
    Pygments.highlight(code, lexer: lang.to_sym, options: {linespans: 'line'})
  end
end

helpers do
  def load_into_haml(template, file)
    article = File.read(file).split("---\n")
    @meta = Psych.load(article[0])
    @text = article[1]
    haml template.to_sym
  end
  def load_structure(dir)
    Psych.load(File.open("views/#{dir}/_directory.yaml"))
  end
  def active(a)
    "active" if request.path_info != [a[:slug]]
  end
  def date(date)
    datestring = Chronic.parse(date).to_s
    Date.parse(datestring).strftime('%e %B, %Y')
  end
  def redcarpet(text)
    markdown = Redcarpet::Markdown.new(BetterRender, fenced_code_blocks: true)
    markdown.render(text)
  end
end

