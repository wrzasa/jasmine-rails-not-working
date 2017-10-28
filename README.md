# README

This is a minimal Rails 5 example for the problem with `jasmine-rails` I
described in this question:
https://stackoverflow.com/questions/46981445/jasmine-rails-gem-used-from-commandline-skips-all-my-specs-why
and in this issue: https://github.com/searls/jasmine-rails/issues/226.

The problem is that `jasmine` specs are running from web, but skipping
all specs from commandline. If anyone has a suggestion, just answer the
above question or create a pull request... whatever ;-)

## Steps to reproduce:

1. Clone repo
2. run `bundle install`
3. run `bundle exec rake spec:javascript`
4. See that bot specs are skipped, while the second should fail
5. start `rails server`
6. Go to http://localhost:3000/specs and see that specs are run as
   expected


## Already fixed!

There was a bug in `jasmine-rails 0.14.6` that caused it. Fixed in
`0.14.7`.
