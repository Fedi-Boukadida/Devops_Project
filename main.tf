terraform {
  required_providers {
    docker = {
      source  = "kreuzwerker/docker"
      version = "~> 2.25.0"
    }
  }
}

provider "docker" {}

resource "docker_image" "express_app" {
  name = "express-app"
  build {
    context = "${path.module}/app"
  }
}

resource "docker_container" "express_app" {
  name  = "express-app"
  image = docker_image.express_app.latest

  ports {
    internal = 3000
    external = 3000
  }
}
