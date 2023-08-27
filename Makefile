build-release:
	EXPORTED_PORT=3000 docker compose up --build -d
build-dev:
	EXPORTED_PORT=3001 docker compose up --build -d

clean:
	docker compose down