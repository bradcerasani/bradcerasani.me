# A sample Guardfile
# More info at https://github.com/guard/guard#readme

guard 'sass', :input => 'public/css/sass', :output => 'public/css', :style => :compressed
guard 'coffeescript', :input => 'public/js/coffeescript', :output => 'public/js'

# guard 'uglify', :destination_file => "js/scripts.js" do
  # watch (%r{js/scripts.js})
# end

guard 'livereload' do
  watch(%r{.+\.(css|html|js|haml)$})
end
