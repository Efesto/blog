all:
	bundle exec jekyll serve

new-post:
	./new_post.sh "$(TITLE)"

new-post-til:
	./new_post.sh "Today I learned: $(TITLE)"
