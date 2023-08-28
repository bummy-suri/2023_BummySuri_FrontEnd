build-release:
	EXPORTED_PORT=3000 docker compose up --build -d

build-develop:
	EXPORTED_PORT=3001 docker compose up --build -d

clean:
	docker compose down

checkout-release:
	git switch release \
	git pull origin release

checkout-develop:
	git switch main \
	git pull origin main