require 'ya2yaml'
require 'psych'
$LOAD_PATH.unshift 'lib'

namespace :journal do
  task :reload do
    a = []
    Dir["entries/*.md"].each do |file|
      entry = File.read(file).split("---\n")
      meta = Psych.load(entry[0])
      # matches = f.match(/\/(\d{4})-(\d{2})-(\d{2})-([\w\-]+)\.md$/)
      # key = matches[4]
      # puts "#{key}"
      a.push({
        title: meta['title'],
        excerpt: meta['excerpt'],
        date: meta['date'],
        tags: meta['tags'],
        # slug: "/journal/" << key,
        slug: "/journal/" << File.basename(file, ".md"),
      })
      puts "#{a.count} posts indexed."
    end
    File.open("views/journal/_directory.yaml", 'w') {
      |file| file.write a.sort_by{|a| a[:date]}.reverse.ya2yaml
    }
  end
end
