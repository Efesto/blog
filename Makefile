all:
	jekyll serve

new-post:
	./new_post.sh "$(TITLE)"
