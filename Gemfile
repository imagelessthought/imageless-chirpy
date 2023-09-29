# frozen_string_literal: true

source "https://rubygems.org"

gemspec

group :jekyll_plugins do
  gem 'jekyll_download_link'
  gem 'jekyll_pre'
  gem 'jekyll_outline'
  gem 'jekyll-glossary_tooltip'
  gem "html-proofer", "~> 4.4"
  gem "jekyll-octicons", "~> 14.2"
  gem 'jekyll-typogrify'
  gem 'jekyll-redirect-from'
  gem 'jekyll-target-blank'
  gem 'jekyll-import'
end

# Windows and JRuby does not include zoneinfo files, so bundle the tzinfo-data gem
# and associated library.
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

# Performance-booster for watching directories on Windows
gem "wdm", "~> 0.1.1", :platforms => [:mingw, :x64_mingw, :mswin]

# Lock `http_parser.rb` gem to `v0.6.x` on JRuby builds since newer versions of the gem
# do not have a Java counterpart.
gem "http_parser.rb", "~> 0.6.0", :platforms => [:jruby]

# Lock jekyll-sass-converter to 2.x on Linux-musl
if RUBY_PLATFORM =~ /linux-musl/
  gem "jekyll-sass-converter", "~> 2.0"
end

# Manage our dependency on the version of the github-pages gem here.
#gem 'github-pages', group: :jekyll_plugins
#gem "github-pages"
